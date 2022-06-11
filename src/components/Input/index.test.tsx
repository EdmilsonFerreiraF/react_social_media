/**
 * @jest-environment jsdom
 */

import * as React from "react"
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

import {
  render,
  screen,
  waitFor
} from "components/CustomRender";
import Input from '.';
import { useForm } from "hooks/useForm";

expect.extend(toHaveNoViolations)

describe('Input', () => {
  test('Should change email value when type', async () => {
    const Container = () => {
      const { form, onChange } = useForm({
        email: ''
      })

      const handleInputChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement

        const name: string = target.name;
        const value: string = target.value;

        onChange(value, name)
      }

      return (
        <Input
          className=""
          name="email"
          type="email"
          placeholder="email"
          required
          value={form.email}
          invalid={false}
          handleInputChange={handleInputChange}
        />
      )
    }

    render(
      <Container />
    )

    userEvent.type(screen.getByPlaceholderText(/Email/i), 'user@email.com')
    expect(screen.getByPlaceholderText(/Email/i)).toHaveValue('user@email.com')
  })

  test('Should change password value when type', async () => {
    const Container = () => {
      const { form, onChange } = useForm({
        password: ''
      })

      const handleInputChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement

        const name: string = target.name;
        const value: string = target.value;

        onChange(value, name)
      }

      return (
        <Input
          className=""
          name="password"
          type="password"
          placeholder="Password"
          required
          value={form.password}
          invalid={false}
          handleInputChange={handleInputChange}
        />
      )
    }

    render(
      <Container />
    )

    userEvent.type(screen.getByPlaceholderText(/Password/i), 'user_password')

    await waitFor(() => expect(screen.getByPlaceholderText(/Password/i)).toHaveValue('user_password'))
  })

  test('Should be an acessible component', async () => {
    const form = {
      name: "",
      password: ""
    }

    const handleInputChange = jest.fn();

    const { container } = render(
      <Input
        className=""
        name="password"
        type="password"
        placeholder="Password"
        required
        value={form.password}
        handleInputChange={handleInputChange}
        invalid={false}
      />)

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  })
})