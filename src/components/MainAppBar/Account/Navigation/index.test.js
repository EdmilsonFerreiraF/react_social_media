/**
 * @jest-environment jsdom
 */

import * as React from "react"
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe';

import {
  render,
  screen,
} from "components/customRender";
import Navigation from '.';

expect.extend(toHaveNoViolations)

describe('FormErrors', () => {
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
    const handleMenuClose = jest.fn()

    render(
      <Navigation
        isMobileMenuOpen={true}
        handleMenuClose={handleMenuClose} />
    )

    expect(screen.getAllByTestId(/navigationMenuItem/i)).toHaveLength(2);
  })

  test('Should show navigation icon button when isMobileMenuOpen is true', async () => {
    const handleMenuClose = jest.fn()

    render(
      <Navigation
        isMobileMenuOpen={true}
        handleMenuClose={handleMenuClose} />
    )

    expect(screen.getAllByTestId(/navigationIconButton/i)).toHaveLength(2);
  })

  test('Should show home icon when isMobileMenuOpen is true', async () => {
    const handleMenuClose = jest.fn()

    render(
      <Navigation
        isMobileMenuOpen={true}
        handleMenuClose={handleMenuClose} />
    )

    expect(screen.getByTestId(/HomeIcon/i)).toBeInTheDocument();
  })

  test('Should show mobile timeline link when isMobileMenuOpen is true', async () => {
    const handleMenuClose = jest.fn()

    render(
      <Navigation
        isMobileMenuOpen={true}
        handleMenuClose={handleMenuClose} />
    )

    expect(screen.getByTestId(/mobileTimelineLink/i)).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const handleMenuClose = jest.fn()

    const { container } = render(
      <div role="menu" id="primary-search-account-menu">
        <Navigation
          isMobileMenuOpen={true}
          handleMenuClose={handleMenuClose} />
      </div>
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})