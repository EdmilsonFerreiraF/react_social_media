/**
 * @jest-environment jsdom
 */

import * as React from "react"
import { axe, toHaveNoViolations } from 'jest-axe'
import '@testing-library/jest-dom'

import {
  render,
  screen,
} from "components/CustomRender"
import Content from '.'

expect.extend(toHaveNoViolations)

describe('Content', () => {

  test('Should have user profile image', async () => {
    const inputHandler = jest.fn()

    render(
      <Content inputHandler={inputHandler} />
    )

    expect(screen.getByAltText(/CreatePost user profile/i)).toBeInTheDocument()
  })

  test('Should have description field', async () => {
    const inputHandler = jest.fn()

    render(
      <Content inputHandler={inputHandler} />
    )

    expect(screen.getByPlaceholderText(/What's in your mind/i)).toBeInTheDocument()
  })

  test('Should be an acessible component', async () => {
    const inputHandler = jest.fn()

    const { container } = render(
      <Content inputHandler={inputHandler} />
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})