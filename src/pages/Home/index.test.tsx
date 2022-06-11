/**
 * @jest-environment jsdom
 */
import * as React from "react"
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe';

import {
  render,
  screen
} from "components/CustomRender";
import Home from '.';
import dotenv from 'dotenv'
import { initializeApp } from "firebase/app";

dotenv.config()

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

initializeApp(firebaseConfig);

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