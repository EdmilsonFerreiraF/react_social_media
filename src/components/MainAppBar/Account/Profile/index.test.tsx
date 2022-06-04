/**
 * @jest-environment jsdom
 */

import * as React from "react"
import { axe, toHaveNoViolations } from 'jest-axe';
import '@testing-library/jest-dom'

import {
  render,
  screen,
} from "components/CustomRender";

import Profile from '.';

expect.extend(toHaveNoViolations)

describe('Profile', () => {
  test('Should show user profile image', async () => {
    render(
      <Profile />
    )

    expect(screen.getByAltText(/My profile/i)).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <Profile />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})