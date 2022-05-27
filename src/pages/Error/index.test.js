/**
 * @jest-environment jsdom
 */

import {
  Routes,
  Route
} from 'react-router-dom'
import * as React from "react"
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Error from '.';
import {
  render,
  screen,
  waitForElementToBeRemoved
} from "components/customRender";

import { axe, toHaveNoViolations } from 'jest-axe';
import { render as renderRTL } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from 'components/MainAppBar/Account/Profile';

expect.extend(toHaveNoViolations)

describe('Error', () => {

  test('Should show This page did not exists', async () => {
    render(
      <Error />
    );

    expect(screen.getByText(/This page did not exists/i)).toBeInTheDocument();
  });
  test('Should show Broken robot 404 error', async () => {
    render(
      <Error />
    );

    expect(screen.getByAltText(/Broken robot 404 error/i)).toBeInTheDocument();
  });
  test('Should back to home when click on this button', async () => {
    renderRTL(
      <MemoryRouter initialEntries={["/profile"]}>
      <Routes>
      <Route
        path="*"
        element={
            <Error />
        } />
      <Route
        path="/"
        element={
            <Profile />
        }
      />
      </Routes>
      </MemoryRouter>
    );

    userEvent.click(screen.getByText(/Back to home/i))

    // expect(screen.getByText(/Online friends/i)).toBeInTheDocument()
    // await waitForElementToBeRemoved(() => screen.queryByText(/Back to home/i), { timeout: 3000 })
    expect(await screen.findByAltText(/My profile/i)).toBeInTheDocument()

  });

  test('Should be an acessible component', async () => {
    const { container } = render(
      <Error />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
});