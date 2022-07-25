/**
 * @jest-environment jsdom
 */

import { PermMedia } from "@mui/icons-material";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { render, screen } from "components/CustomRender";
import ElementItem from ".";

expect.extend(toHaveNoViolations);

describe("ElementItem", () => {
  test("Should have a title", async () => {
    render(<ElementItem title="Photo or Video" />);

    expect(screen.getByText(/Photo or Video/i)).toBeInTheDocument();
  });

  test("Should have an input", async () => {
    render(<ElementItem title="Photo or Video" inputType="file" />);

    expect(screen.getByTestId("elementItem input")).toBeInTheDocument();
  });

  test("Should call handler when input is changed", async () => {
    const onChangeHandler = jest.fn();

    render(
      <ElementItem
        title="Photo or Video"
        inputType="text"
        onChange={onChangeHandler}
      />
    );

    const input = screen.getByTestId("elementItem input");
    userEvent.type(input, "abc");

    expect(onChangeHandler).toHaveBeenCalled();
    expect(screen.getByTestId("elementItem input")).toHaveDisplayValue("abc");
  });

  test("Should have an icon", async () => {
    const onChangeHandler = jest.fn();

    render(
      <ElementItem
        title="Photo or Video"
        inputType="text"
        onChange={onChangeHandler}
      >
        <PermMedia htmlColor="tomato" />
      </ElementItem>
    );

    expect(screen.getByText(/Photo or Video/i)).toBeInTheDocument();
    expect(screen.getByTestId(/PermMediaIcon/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const onChangeHandler = jest.fn();

    const { container } = render(
      <ul>
        <ElementItem
          title="Photo or Video"
          inputType="text"
          onChange={onChangeHandler}
        >
          <PermMedia htmlColor="tomato" />
        </ElementItem>
      </ul>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
