/**
 * @jest-environment jsdom
 */

import * as React from "react"
import { axe, toHaveNoViolations } from 'jest-axe';

import {
  render,
  screen,
} from "components/customRender";
import '@testing-library/jest-dom'

import Profile from '.';

expect.extend(toHaveNoViolations)

describe('FormErrors', () => {
  test('Should show error message when email is invalid', async () => {
    render(
      <Profile />
    )

    expect(screen.getByAltText(/Your profile/i)).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <Profile />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})