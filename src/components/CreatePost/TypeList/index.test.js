/**
 * @jest-environment jsdom
 */

import * as React from "react"

import {
  render,
  screen
} from "components/customRender";
import TypeItem from '.';
import { PermMedia } from "@mui/icons-material";
import userEvent from "@testing-library/user-event";
import TypeList from ".";
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'
expect.extend(toHaveNoViolations)

describe('Header', () => {
  test('Should have Photo or Video TypeItem', async () => {
    render(
      <TypeList />
    )

    expect(screen.getByText(/Photo or Video/i)).toBeInTheDocument();
    expect(screen.getByTestId(/PermMediaIcon/i)).toBeInTheDocument();
  })

  test('Should have Tag TypeItem', async () => {
    render(
      <TypeList />
    )

    expect(screen.getByText(/Tag/i)).toBeInTheDocument();
    expect(screen.getByTestId(/LabelIcon/i)).toBeInTheDocument();
  })

  test('Should have Location TypeItem', async () => {
    render(
      <TypeList />
    )

    expect(screen.getByText(/Location/i)).toBeInTheDocument();
    expect(screen.getByTestId(/RoomIcon/i)).toBeInTheDocument();
  })

  test('Should have Feelings TypeItem', async () => {
    render(
      <TypeList />
    )

    expect(screen.getByText(/Feelings/i)).toBeInTheDocument();
    expect(screen.getByTestId(/EmojiEmotionsIcon/i)).toBeInTheDocument();
  })

  test('Should have TypeItem input', async () => {
    render(
      <TypeList />
    )

    expect(screen.getAllByTestId(/typeItem input/i)).toHaveLength(4)
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <TypeList />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})