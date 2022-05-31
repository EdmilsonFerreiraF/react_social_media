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
} from "components/customRender";
import Input from '.';

expect.extend(toHaveNoViolations)

describe('Input', () => {
  test('Should change email value when type', async () => {
    const form = {}

    const handleInputChange = jest.fn();

    render(
      <Input
        className=""
        name="email"
        type="email"
        placeholder="Email"
        required
        value={form.email}
        invalid={false}
        handleInputChange={handleInputChange}
        errorIndex="error1"
      />
    )

    userEvent.type(screen.getByPlaceholderText(/Email/i), 'user@email.com')
    expect(screen.getByPlaceholderText(/Email/i)).toHaveValue('user@email.com')
  })

  test('Should change password value when type', async () => {
    const form = {}

    const handleInputChange = jest.fn();

    render(
      <Input
        className=""
        name="password"
        type="password"
        placeholder="Password"
        required
        value={form.password}
        invalid={false}
        handleInputChange={handleInputChange}
        errorIndex="error2"
      />
    )

    userEvent.type(screen.getByPlaceholderText(/Password/i), 'user_password')
    expect(screen.getByPlaceholderText(/Password/i)).toHaveValue('user_password')
  })

  test('Should be an acessible component', async () => {
    const form = {
      name: "",
      password: ""
    }
    
    const handleInputChange = jest.fn( );

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
        errorIndex="error2"
      />)

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  })
})