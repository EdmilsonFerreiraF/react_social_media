/**
 * @jest-environment jsdom
 */
import * as React from "react"
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe';

import {
  render,
  screen
} from "components/customRender";
import Home from 'pages/Home';

expect.extend(toHaveNoViolations)

describe('Home', () => {
  test('Should show MainAppBar when render', async () => {
    render(
      <Home />
    )

    expect(await screen.findByTestId(/mainappbar/i)).toBeInTheDocument()
  })

  test('Should show Sidebar when render', async () => {
    render(
      <Home />
    )

    expect(await screen.findByTestId(/sidebar/i)).toBeInTheDocument()
  })

  test('Should show Feed when render', async () => {
    render(
      <Home />
    )

    expect(await screen.findByTestId('feed')).toBeInTheDocument()
  })

  test('Should show Home MessagesBar when render', async () => {
    render(
      <Home />
    )

    expect(await screen.findByTestId(/homeMessagesBar/i)).toBeInTheDocument()
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <Home />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})