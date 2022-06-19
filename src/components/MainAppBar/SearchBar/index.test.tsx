/**
 * @jest-environment jsdom
 */

import * as React from "react"
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'

import {
  render,
  screen,
} from "components/CustomRender"
import SearchBar from '.'

expect.extend(toHaveNoViolations)

describe('SearchBar', () => {
  test('Should show searchbar when render', async () => {
    render(
      <SearchBar />
    )

    expect(screen.getByTestId(/searchicon/i)).toBeInTheDocument()
  })

  test('Should show search when render', async () => {
    render(
      <SearchBar />
    )

    expect(screen.getByTestId("search")).toBeInTheDocument()
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
        <SearchBar />
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})