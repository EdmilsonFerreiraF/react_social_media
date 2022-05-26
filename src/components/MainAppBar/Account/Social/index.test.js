/**
 * @jest-environment jsdom
 */
import * as React from "react"

import {
  render,
  screen,
} from "components/customRender";
import '@testing-library/jest-dom'

import Social from '.';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations)

describe('FormErrors', () => {
  test('Should show all Social Items', async () => {
    render(
      <Social />
    )

    expect(screen.getAllByTestId(/socialItem/i)).toHaveLength(3);
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <div role="menu" id="primary-search-account-menu">
        <Social />
      </div>
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})