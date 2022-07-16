/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { render, screen } from "components/CustomRender";
import Login from ".";

expect.extend(toHaveNoViolations);

describe("Login", () => {
  test("Should show subtitle when render", async () => {
    render(<Login />);

    expect(
      screen.getByText(
        /connect with friends and the world around you on lamasocial/i
      )
    ).toBeInTheDocument();
  });

  test("Should show error message when email is invalid", async () => {
    render(<Login />);

    userEvent.type(screen.getByPlaceholderText(/email/i), "abc");
    expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
  });

  test("Should show error message when password is too short", async () => {
    render(<Login />);

    userEvent.type(screen.getByPlaceholderText(/password/i), "123");
    expect(screen.getByText(/password is too short/i)).toBeInTheDocument();
  });

  test("Should not show error when email is correct", async () => {
    render(<Login />);

    userEvent.type(
      screen.getByPlaceholderText(/email/i),
      "user_username33@email.com"
    );
    expect(screen.queryByText(/email is invalid/i)).not.toBeInTheDocument();
  });

  test("Should not show error when password is correct", async () => {
    render(<Login />);

    userEvent.type(screen.getByPlaceholderText(/password/i), "user_password");
    expect(
      screen.queryByText(/password is too short/i)
    ).not.toBeInTheDocument();
  });

  test("Should login and go to home when email and password are valid", async () => {
    render(<Login />);

    userEvent.type(
      screen.getByPlaceholderText(/email/i),
      "user_username33@email.com"
    );
    userEvent.type(screen.getByPlaceholderText(/password/i), "user_password");

    userEvent.click(screen.queryByText(/login/i) as HTMLElement);

    expect(screen.getByTestId(/loginLogo/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const { container } = render(<Login />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
