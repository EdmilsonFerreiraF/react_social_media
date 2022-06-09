/**
 * @jest-environment jsdom
 */

import * as React from "react"
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from 'jest-axe';

import {
  render,
  screen,
  waitForElementToBeRemoved
} from "components/CustomRender";
import Navigation from '.';

expect.extend(toHaveNoViolations)

describe('Navigation', () => {
  test('Should show homepage link when screen is large', async () => {
    render(
      <Navigation />
    )

    expect(screen.getByTestId(/homepageLink/i)).toBeInTheDocument();
  })

  test('Should show timeline link when screen is large', async () => {
    render(
      <Navigation />
    )

    expect(screen.getByTestId(/timelineLink/i)).toBeInTheDocument();
  })

  test('Should show navigation menu item when screen is large', async () => {
    const handleProfileMenuOpen = jest.fn()

    render(
      <Navigation
        isMobileMenuOpen={true}
        handleProfileMenuOpen={handleProfileMenuOpen} />
    )

    expect(screen.getAllByTestId(/navigationMenuItem/i)).toHaveLength(2);
  })

  test('Should show navigation icon button when isMobileMenuOpen is true', async () => {
    const handleProfileMenuOpen = jest.fn()

    render(
      <Navigation
        isMobileMenuOpen={true}
        handleProfileMenuOpen={handleProfileMenuOpen} />
    )

    expect(screen.getAllByTestId(/navigationIconButton/i)).toHaveLength(2);
  })

  test('Should show home icon when isMobileMenuOpen is true', async () => {
    const handleProfileMenuOpen = jest.fn()

    render(
      <Navigation
        isMobileMenuOpen={true}
        handleProfileMenuOpen={handleProfileMenuOpen} />
    )

    expect(screen.getByTestId(/HomeIcon/i)).toBeInTheDocument();
  })

  test('Should show mobile timeline link when isMobileMenuOpen is true', async () => {
    const handleProfileMenuOpen = jest.fn()

    render(
      <Navigation
        isMobileMenuOpen={true}
        handleProfileMenuOpen={handleProfileMenuOpen} />
    )

    expect(screen.getByTestId(/mobileTimelineLink/i)).toBeInTheDocument();
  })

  test('Should go to homepage page when it is clicked', async () => {
    render(
      <Navigation />
    )

    userEvent.click(screen.getByTestId(/homepageLink/i));
     expect(
      screen.getByRole("progressbar")
    ).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByRole("progressbar"), {timeout: 2000});
    expect(screen.getByText(/Online friends/i)).toBeInTheDocument();
  })

  test('Should go to timeline page when it is clicked', async () => {
    render(
      <Navigation />
    )

    userEvent.click(screen.getByTestId(/timelineLink/i));

    await waitForElementToBeRemoved(() => screen.queryByRole("progressbar"), {timeout: 2000});
    expect(screen.getByText(/Online friends/i)).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const handleProfileMenuOpen = jest.fn()

    const { container } = render(
      <div role="menu" id="primary-search-account-menu">
        <Navigation
          isMobileMenuOpen={true}
          handleProfileMenuOpen={handleProfileMenuOpen} />
      </div>
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})