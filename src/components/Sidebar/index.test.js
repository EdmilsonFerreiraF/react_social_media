/**
 * @jest-environment jsdom
 */

import * as React from "react"
import '@testing-library/jest-dom'
import dotenv from 'dotenv'
import { initializeApp } from "firebase/app";
import { axe, toHaveNoViolations } from 'jest-axe';

import {
  render,
  screen
} from "components/customRender";
import Sidebar from '.';

dotenv.config()

expect.extend(toHaveNoViolations)

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID
};

initializeApp(firebaseConfig);

describe('Sidebar', () => {
  test('Should show NavList when render', async () => {
    render(
      <Sidebar />
    )

    expect(screen.getByTestId(/navList/i)).toBeInTheDocument()
  })

  test('Should show Show More when render', async () => {
    render(
      <Sidebar />
    )

    expect(screen.getByText(/Show more/i)).toBeInTheDocument()
  })

  test('Should show FriendList when render', async () => {
    render(
      <Sidebar />
    )

    expect(screen.getByTestId(/friendList/i)).toBeInTheDocument()
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <Sidebar />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})