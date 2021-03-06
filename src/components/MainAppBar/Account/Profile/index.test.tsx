/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { act, render, screen } from "components/CustomRender";

import Profile from ".";

expect.extend(toHaveNoViolations);

describe("Profile", () => {
  test("Should show user profile image", async () => {
    await act(async () => {
      render(<Profile />);
    });

    expect(screen.getByAltText(/My profile/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const { container }: any = await act(async () => {
      render(<Profile />);
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
