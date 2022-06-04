/**
 * @jest-environment jsdom
 */

import * as React from "react"
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe';

import {
  render,
  screen,
} from "components/CustomRender";
import Logo from '.';

expect.extend(toHaveNoViolations)

describe('Logo', () => {
  test('Should show logo image when render', async () => {
    render(
      <Logo />
    )

    expect(screen.getByTestId(/logoimage/i)).toBeInTheDocument();
  })

  test('Should be an accessible component', async () => {
    const { container } = render(
      <Logo />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})