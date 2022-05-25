/**
 * @jest-environment jsdom
 */

import App from 'App';

import * as React from "react"
import '@testing-library/jest-dom'

import {
  render,
  screen,
} from "components/customRender";
import NavigationItem from '.';

describe('NavigationItem', () => {
  test('Should show title text', async () => {
    render(
      <NavigationItem title="Homepage" href="/" />
    )

    expect(screen.getByTestId(/link/i).hasAttribute("href")).toBeTruthy();
  })
  test('Should have href attribute', async () => {
    render(
      <NavigationItem title="Homepage" href="/" />
    )

    expect(screen.getByText(/Homepage/i)).toBeInTheDocument();
  })
})