/**
 * @jest-environment jsdom
 */

import * as React from "react"
import { axe, toHaveNoViolations } from 'jest-axe'
import '@testing-library/jest-dom'

import {
  render,
  screen
} from "components/CustomRender"
import Error from '.'

expect.extend(toHaveNoViolations)

describe('Error', () => {
  test('Should show error when email is invalid', async () => {
    const error = "email is invalid"
    const idx = 0

    render(
      <Error idx={idx} error={error} />
    )

    expect(screen.getByText(/email is invalid/i)).toBeInTheDocument()
  })

  test('Should have correct id 1', async () => {
    const error = ""
    const idx = 0

    render(
      <Error idx={idx} error={error} />
    )

    expect(screen.getByTestId(/error line/i)).toHaveProperty('id', `error${idx + 1}`)
  })

  test('Should have correct id 2', async () => {
    const error = ""
    const idx = 1

    render(
      <Error idx={idx} error={error} />
    )

    expect(screen.getByTestId(/error line/i)).toHaveProperty('id', `error${idx + 1}`)
  })

  test('Should show error when password is too short', async () => {
    const error = "password is too short"
    const idx = 0

    render(
      <Error idx={idx} error={error} />
    )

    expect(screen.getByText(/password is too short/i)).toBeInTheDocument()
  })

  test('Should be an acessible component', async () => {
    const error = "email is invalid"
    const idx = 0

    const { container } = render(
      <Error idx={idx} error={error} />
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})