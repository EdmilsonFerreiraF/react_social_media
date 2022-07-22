/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { render, screen, waitFor } from "components/CustomRender";
import { useForm } from "hooks/useForm";
import Input from ".";

expect.extend(toHaveNoViolations);

describe("Input", () => {
  test("Should change email value when type", async () => {
    const Container = () => {
      const { form, onChange } = useForm({
        email: "",
      });

      const handleInputChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;

        const name: string = target.name;
        const value: string = target.value;

        onChange(value, name);
      };

      const inputProps = {
        name: "email",
        type: "email",
        placeholder: "Email",
        value: form.email,
        invalid: false,
        handleInputChange: handleInputChange,
      };

      return <Input {...inputProps} />;
    };

    render(<Container />);

    userEvent.type(screen.getByPlaceholderText(/Email/i), "user@email.com");
    expect(screen.getByPlaceholderText(/Email/i)).toHaveValue("user@email.com");
  });

  test("Should change password value when type", async () => {
    const Container = () => {
      const { form, onChange } = useForm({
        password: "",
      });

      const handleInputChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;

        const name: string = target.name;
        const value: string = target.value;

        onChange(value, name);
      };

      const inputProps = {
        name: "password",
        type: "password",
        placeholder: "Password",
        value: form.password,
        invalid: false,
        handleInputChange: handleInputChange,
      };

      return <Input {...inputProps} />;
    };

    render(<Container />);

    userEvent.type(screen.getByPlaceholderText(/Password/i), "user_password");

    await waitFor(() =>
      expect(screen.getByPlaceholderText(/Password/i)).toHaveValue(
        "user_password"
      )
    );
  });

  test("Should be an acessible component", async () => {
    const form = {
      name: "",
      password: "",
    };

    const handleInputChange = jest.fn();

    const inputProps = {
      name: "password",
        type: "password",
        placeholder: "Password",
        value: form.password,
        handleInputChange: handleInputChange,
        invalid: false,
    }

    const { container } = render(
      <Input
        {...inputProps}
      />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
