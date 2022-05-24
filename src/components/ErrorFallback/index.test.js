/**
 * @jest-environment jsdom
 */

import App from 'App';

import * as React from "react"

import userEvent from '@testing-library/user-event';

import {
  render,
  screen,
  waitForElementToBeRemoved
} from "components/customRender";
// import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from 'pages/Home';
import axios from 'axios';
import ErrorFallback from '.';
import { axe, toHaveNoViolations } from 'jest-axe';
import '@testing-library/jest-dom'
expect.extend(toHaveNoViolations)

describe('Header', () => {
  test('Should have something went wrong message', async () => {
    const error = {
      message: "Request failed with status code 400"
    }

    const resetErrorBoundary = jest.fn()
    render(
      <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
    )

    expect(screen.getByText(/Something went wrong:/i)).toBeInTheDocument();
  })
  test('Should have error bot image', async () => {
    const error = {
      message: "Request failed with status code 400"
    }

    const resetErrorBoundary = jest.fn()
    render(
      <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
    )

    expect(screen.getByAltText(/Broken robot error/i)).toBeInTheDocument();
  })
  test('Should have error message', async () => {
    const error = {
      message: "Request failed with status code 400"
    }

    const resetErrorBoundary = jest.fn()
    render(
      <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
    )

    expect(screen.getByTestId(/error message/i)).toBeInTheDocument();
  })
  test('Should have try again button', async () => {
    const error = {
      message: "Request failed with status code 400"
    }

    const resetErrorBoundary = jest.fn()
    render(
      <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
    )

    expect(screen.getByText(/Try again/i)).toBeInTheDocument();
  })
 
  test('Should be an acessible component', async () => {
    const error = {
      message: "Request failed with status code 400"
    }

    const resetErrorBoundary = jest.fn()
    const { container } = render(
      <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})