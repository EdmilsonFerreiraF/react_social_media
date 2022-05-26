/**
 * @jest-environment jsdom
 */

import * as React from "react"
import {
  render,
  screen,
} from "components/customRender";
import '@testing-library/jest-dom'

import Logo from '.';
import { axe, toHaveNoViolations } from 'jest-axe';

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