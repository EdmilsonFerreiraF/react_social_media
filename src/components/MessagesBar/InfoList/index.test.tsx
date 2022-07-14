/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { render, screen } from "components/CustomRender";
import { User } from "context/AuthContext";
import InfoList from ".";

expect.extend(toHaveNoViolations);

describe("InfoList", () => {
  test('Should show "info value"', async () => {
    const user: User = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false,
      city: "Salvador - BA",
      from: "São Paulo",
      relationship: 0,
    };

    render(<InfoList user={user} />);

    expect(screen.getAllByTestId(/info value/i)).toHaveLength(3);
  });

  test('Should show "info name"', async () => {
    const user: User = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false,
      city: "Salvador - BA",
      from: "São Paulo",
      relationship: 0,
    };

    render(<InfoList user={user} />);

    expect(screen.getAllByTestId(/info name/i)).toHaveLength(3);
  });

  test("Should show info city", async () => {
    const user: User = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false,
      city: "Salvador - BA",
      from: "São Paulo",
      relationship: 0,
    };

    render(<InfoList user={user} />);

    expect(screen.getByText(/city/i)).toBeInTheDocument();
  });

  test("Should show info from", async () => {
    const user: User = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false,
      city: "Salvador - BA",
      from: "São Paulo",
      relationship: 0,
    };

    render(<InfoList user={user} />);

    expect(screen.getByText(/from/i)).toBeInTheDocument();
  });

  test("Should show info value", async () => {
    const user: User = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false,
      city: "Salvador - BA",
      from: "São Paulo",
      relationship: 0,
    };

    render(<InfoList user={user} />);

    expect(screen.getByText(/relationship/i)).toBeInTheDocument();
  });

  test("Should show info salvador - ba", async () => {
    const user: User = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false,
      city: "Salvador - BA",
      from: "São Paulo",
      relationship: 0,
    };

    render(<InfoList user={user} />);

    expect(screen.getByText(/Salvador - BA/i)).toBeInTheDocument();
  });

  test("Should show info são paulo", async () => {
    const user: User = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false,
      city: "Salvador - BA",
      from: "São Paulo",
      relationship: 0,
    };

    render(<InfoList user={user} />);

    expect(screen.getByText(/São Paulo/i)).toBeInTheDocument();
  });

  test("Should show info single", async () => {
    const user: User = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false,
      city: "Salvador - BA",
      from: "São Paulo",
      relationship: 0,
    };

    render(<InfoList user={user} />);

    expect(screen.getByText(/single/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const user: User = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false,
      city: "Salvador - BA",
      from: "São Paulo",
      relationship: 0,
    };

    const { container } = render(<InfoList user={user} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
