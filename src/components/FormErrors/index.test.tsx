/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { render, screen } from "components/CustomRender";
import FormErrors from ".";

expect.extend(toHaveNoViolations);

describe("FormErrors", () => {
  test("Should show error when email is invalid", async () => {
    const formErrors = {
      email: " is invalid",
      password: "",
    };

    render(<FormErrors formErrors={formErrors} />);

    expect(screen.getByText(/is invalid/i)).toBeInTheDocument();
  });

  test("Should show error when password is too short", async () => {
    const formErrors = {
      email: "",
      password: " is too short",
    };

    render(<FormErrors formErrors={formErrors} />);

    expect(screen.getByText(/ is too short/i)).toBeInTheDocument();
  });

  test("Should show error when both email and password are invalid", async () => {
    const formErrors = {
      email: " is invalid",
      password: " is too short",
    };

    render(<FormErrors formErrors={formErrors} />);

    expect(screen.getByText(/is invalid/i)).toBeInTheDocument();
    expect(screen.getByText(/ is too short/i)).toBeInTheDocument();
  });

  test("Should not show error when email is valid", async () => {
    const formErrors = {
      email: "",
      password: "",
    };

    render(<FormErrors formErrors={formErrors} />);

    expect(screen.queryByText(/is invalid/i)).not.toBeInTheDocument();
  });

  test("Should not show error when password is valid", async () => {
    const formErrors = {
      email: "",
      password: "",
    };

    render(<FormErrors formErrors={formErrors} />);

    expect(screen.queryByText(/is too short/i)).not.toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const formErrors = {
      email: " is invalid",
      password: " is too short",
    };

    const { container } = render(<FormErrors formErrors={formErrors} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
