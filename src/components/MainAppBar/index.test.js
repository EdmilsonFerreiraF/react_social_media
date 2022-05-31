/**
 * @jest-environment jsdom
 */

import * as React from "react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { render as renderRTL } from '@testing-library/react';
import '@testing-library/jest-dom'

import {
  render,
  screen,
  waitFor
} from "components/customRender";
import Login from "pages/Login";
import MainAppBar from '.';

expect.extend(toHaveNoViolations)

describe('MainAppBar', () => {
  test('Should show logo when render', async () => {
    render(
      <MainAppBar />
    )

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  })

  test('Should show account when render', async () => {
    render(
      <MainAppBar />
    )

    expect(screen.getByTestId('account')).toBeInTheDocument();
  })

  test('Should show searchbar when render', async () => {
    render(
      <MainAppBar />
    )

    expect(screen.getByTestId(/searchbar/i)).toBeInTheDocument();
  })

  test('Should go to profile page when profile on mobile menu is clicked', async () => {
    renderRTL(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainAppBar />
            } />
          <Route
            path="/profile/*"
            element={
              <Login />
            }
          />
        </Routes>
      </MemoryRouter>
    )

    userEvent.click(screen.getAllByAltText(/My profile/i)[0]);

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    })
  })

  test('Should go to profile page when it is clicked', async () => {
    renderRTL(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainAppBar />
            } />
          <Route
            path="/profile/*"
            element={
              <Login />
            }
          />
        </Routes>
      </MemoryRouter>
    )

    userEvent.click(screen.getAllByAltText(/My profile/i)[1]);

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    })
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <MainAppBar />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})