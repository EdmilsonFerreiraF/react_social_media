/**
 * @jest-environment jsdom
 */

import * as React from "react"
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import { PermMedia } from "@mui/icons-material";
import { axe, toHaveNoViolations } from 'jest-axe'

import {
  render,
  screen
} from "components/CustomRender";
import ElementItem from '.';

expect.extend(toHaveNoViolations)

describe('ElementItem', () => {
  test('Should have a title', async () => {
    render(
      <ElementItem
        className="elementItemInput"
        title="Photo or Video"
      />
    )

    expect(screen.getByText(/Photo or Video/i)).toBeInTheDocument();
  })

  test('Should have an input', async () => {
    render(
      <ElementItem
        className="elementItemInput"
        title="Photo or Video"
        inputType="file"
      />
    )

    expect(screen.getByTestId("elementItem input")).toBeInTheDocument();
  })


  test('Should call handler when input is changed', async () => {
    const onChangeHandler = jest.fn();

    render(
      <ElementItem
        className="elementItemInput"
        title="Photo or Video"
        inputType="text"
        onChange={onChangeHandler}
      />
    )

    const input = screen.getByTestId("elementItem input")
    userEvent.type(input, "abc")
    expect(onChangeHandler).toHaveBeenCalled();
    expect(screen.getByTestId("elementItem input")).toHaveDisplayValue("abc");
  })

  test('Should have an icon', async () => {
    const onChangeHandler = jest.fn();

    render(
      <ElementItem
        className="elementItemInput"
        title="Photo or Video"
        inputType="text"
        onChange={onChangeHandler}
      >
        <PermMedia htmlColor="tomato" />
      </ElementItem>
    )

    screen.debug()
    expect(screen.getByText(/Photo or Video/i)).toBeInTheDocument();
    expect(screen.getByTestId(/PermMediaIcon/i)).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const onChangeHandler = jest.fn();

    const { container } = render(
      <ElementItem
        className="elementItemInput"
        title="Photo or Video"
        inputType="text"
        onChange={onChangeHandler}
      >
        <PermMedia htmlColor="tomato" />
      </ElementItem>
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})