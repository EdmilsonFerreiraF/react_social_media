/**
 * @jest-environment jsdom
 */

import * as React from "react"
import { axe, toHaveNoViolations } from 'jest-axe'
import '@testing-library/jest-dom'

import {
  render,
  screen
} from "components/customRender";
import TypeList from ".";

expect.extend(toHaveNoViolations)

describe('TypeList', () => {
  test('Should have Photo or Video ElementItem', async () => {
    render(
      <TypeList />
    )

    expect(screen.getByText(/Photo or Video/i)).toBeInTheDocument();
    expect(screen.getByTestId(/PermMediaIcon/i)).toBeInTheDocument();
  })

  test('Should have Tag ElementItem', async () => {
    render(
      <TypeList />
    )

    expect(screen.getByText(/Tag/i)).toBeInTheDocument();
    expect(screen.getByTestId(/LabelIcon/i)).toBeInTheDocument();
  })

  test('Should have Location ElementItem', async () => {
    render(
      <TypeList />
    )

    expect(screen.getByText(/Location/i)).toBeInTheDocument();
    expect(screen.getByTestId(/RoomIcon/i)).toBeInTheDocument();
  })

  test('Should have Feelings ElementItem', async () => {
    render(
      <TypeList />
    )

    expect(screen.getByText(/Feelings/i)).toBeInTheDocument();
    expect(screen.getByTestId(/EmojiEmotionsIcon/i)).toBeInTheDocument();
  })

  test('Should have ElementItem input', async () => {
    render(
      <TypeList />
    )

    expect(screen.getAllByTestId(/elementItem input/i)).toHaveLength(4)
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <TypeList />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})