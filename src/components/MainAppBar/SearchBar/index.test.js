/**
 * @jest-environment jsdom
 */

import * as React from "react"

import {
  render,
  screen,
} from "components/customRender";
import '@testing-library/jest-dom'

import SearchBar from '.';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations)

describe('SearchBar', () => {
  test('Should show searchbar when render', async () => {
    render(
      <SearchBar />
    )

    expect(screen.getByTestId(/searchicon/i)).toBeInTheDocument();
  })

  test('Should show search when render', async () => {
    render(
      <SearchBar />
    )

    expect(screen.getByTestId("search")).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
        <SearchBar />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})