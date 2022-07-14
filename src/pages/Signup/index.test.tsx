/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { render, screen, waitFor } from "components/CustomRender";
import Signup from ".";

expect.extend(toHaveNoViolations);

describe("Signup", () => {
  test("Should render logo correctly", async () => {
    render(<Signup />);

    expect(screen.getByTestId(/signupLogo/i)).toBeInTheDocument();
  });

  test("Should render subtitle heading correctly", async () => {
    render(<Signup />);

    expect(
      screen.getByText(
        /connect with friends and the world around you on lamasocial/i
      )
    ).toBeInTheDocument();
  });

  test("Should show error message when username is invalid", async () => {
    render(<Signup />);

    userEvent.type(screen.getByPlaceholderText(/username/i), "abc");

    await waitFor(() => {
      expect(screen.getByText(/username is invalid/i)).toBeInTheDocument();
    });
  });

  test("Should show error message when email is invalid", async () => {
    render(<Signup />);

    userEvent.type(screen.getByPlaceholderText(/email/i), "abc");

    await waitFor(() => {
      expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
    });
  });

  test("Should show error message when password is too short", async () => {
    render(<Signup />);

    userEvent.type(screen.getByPlaceholderText("Password"), "123");

    await waitFor(() => {
      expect(screen.getByText(/password is too short/i)).toBeInTheDocument();
    });
  });

  test("Should show error message when passwords aren't equal", async () => {
    render(<Signup />);

    userEvent.type(screen.getByPlaceholderText("Password"), "1234567");
    userEvent.type(screen.getByPlaceholderText(/password again/i), "123456");

    await waitFor(() => {
      expect(screen.getByText(/passwords don't match/i)).toBeInTheDocument();
    });
  });

  test("Should not show error when username is correct", async () => {
    render(<Signup />);

    userEvent.type(screen.getByPlaceholderText(/username/i), "user_username33");

    await waitFor(() => {
      expect(
        screen.queryByText(/username is invalid/i)
      ).not.toBeInTheDocument();
    });
  });

  test("Should not show error when email is correct", async () => {
    render(<Signup />);

    userEvent.type(
      screen.getByPlaceholderText(/email/i),
      "user_username33@email.com"
    );

    await waitFor(() => {
      expect(screen.queryByText(/email is invalid/i)).not.toBeInTheDocument();
    });
  });

  test("Should not show error when password is correct", async () => {
    render(<Signup />);

    userEvent.type(screen.getByPlaceholderText("Password"), "user_password");

    await waitFor(() => {
      expect(
        screen.queryByText(/password is too short/i)
      ).not.toBeInTheDocument();
    });
  });

  test("Should not show error when passwords are equal", async () => {
    render(<Signup />);

    userEvent.type(screen.getByPlaceholderText("Password"), "user_password");
    userEvent.type(
      screen.getByPlaceholderText(/password again/i),
      "user_password"
    );

    await waitFor(() => {
      expect(
        screen.queryByText(/passwords don't match/i)
      ).not.toBeInTheDocument();
    });
  });

  test("Should login and go to home when email and password are valid", async () => {
    render(<Signup />);

    userEvent.type(
      screen.getByPlaceholderText(/email/i),
      "user_username33@email.com"
    );
    userEvent.type(screen.getByPlaceholderText("Password"), "user_password");

    userEvent.click(screen.getByText(/sign up/i));

    await waitFor(() => {
      expect(screen.getByTestId(/signuplogo/i)).toBeInTheDocument();
    });
  });

  test("Should be an acessible component", async () => {
    const { container } = render(<Signup />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
