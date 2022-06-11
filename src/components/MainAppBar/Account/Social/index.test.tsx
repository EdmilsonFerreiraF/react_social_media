/**
 * @jest-environment jsdom
 */
import * as React from "react"
import {
  render,
  screen,
} from "components/CustomRender";
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe';

import Social from '.';

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
        <Social />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})