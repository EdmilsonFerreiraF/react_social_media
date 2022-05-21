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
import { axe, toHaveNoViolations } from 'jest-axe'
import '@testing-library/jest-dom'
expect.extend(toHaveNoViolations)

describe('TypeItem', () => {
  test('Should have a title', async () => {
    render(
      <TypeItem
        className="typeItemInput"
        title="Photo or Video"
      />
    )

    expect(screen.getByText(/Photo or Video/i)).toBeInTheDocument();
  })

  test('Should have an input', async () => {
    render(
      <TypeItem
        className="typeItemInput"
        title="Photo or Video"
        inputType="file"
      />
    )

    expect(screen.getByTestId("typeItem input")).toBeInTheDocument();
  })


  test('Should call handler when input is changed', async () => {
    const onChangeHandler = jest.fn();

    render(
      <TypeItem
        className="typeItemInput"
        title="Photo or Video"
        inputType="text"
        onChange={onChangeHandler}
      />
    )

    const input = screen.getByTestId("typeItem input")
    userEvent.type(input, "abc")
    expect(onChangeHandler).toHaveBeenCalled();
    expect(screen.getByTestId("typeItem input")).toHaveDisplayValue("abc");
  })

  test('Should have an icon', async () => {
    const onChangeHandler = jest.fn();

    render(
      <TypeItem
        className="typeItemInput"
        title="Photo or Video"
        inputType="text"
        onChange={onChangeHandler}
      >
        <PermMedia htmlColor="tomato" />
      </TypeItem>
    )

    screen.debug()
    expect(screen.getByText(/Photo or Video/i)).toBeInTheDocument();
    expect(screen.getByTestId(/PermMediaIcon/i)).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const onChangeHandler = jest.fn();

    const { container } = render(
      <TypeItem
        className="typeItemInput"
        title="Photo or Video"
        inputType="text"
        onChange={onChangeHandler}
      >
        <PermMedia htmlColor="tomato" />
      </TypeItem>
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})