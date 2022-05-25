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
import NavigationItem from '.';

expect.extend(toHaveNoViolations)

describe('NavigationItem', () => {
  test('Should show title text', async () => {
    render(
      <NavigationItem dataTestId="homepageLink" title="Homepage" href="/" />
    )

    expect(screen.getByTestId(/homepageLink/i).hasAttribute("href")).toBeTruthy();
  })
  test('Should have href attribute', async () => {
    render(
      <NavigationItem dataTestId="homepageLink" title="Homepage" href="/" />
    )

    expect(screen.getByText(/Homepage/i)).toBeInTheDocument();
  })
  test('Should be an acessible component', async () => {
    const { container } = render(
      <NavigationItem dataTestId="homepageLink" title="Homepage" href="/" />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})