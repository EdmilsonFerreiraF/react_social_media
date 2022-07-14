/**
 * @jest-environment jsdom
 */

import { Feed } from "@mui/icons-material";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { act, render, screen } from "components/CustomRender";
import NavItem from ".";

expect.extend(toHaveNoViolations);

describe("NavItem", () => {
  test("Should have a title", async () => {
    await act(async () => {
      render(
        <ul>
          <NavItem title="Feed" />
        </ul>
      );
    });

    expect(screen.getByText(/Feed/i)).toBeInTheDocument();
  });

  test("Should have an icon", async () => {
    await act(async () => {
      render(
        <ul>
          <NavItem title="Feed">
            <Feed />
          </NavItem>
        </ul>
      );
    });

    expect(screen.getByTestId(/FeedIcon/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const { container }: any = act(() => {
      render(
        <ul>
          <NavItem title="Feed">
            <Feed />
          </NavItem>
        </ul>
      );
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
