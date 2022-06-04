/**
 * @jest-environment jsdom
 */

import * as React from "react"

import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe';
import dotenv from 'dotenv'
import { initializeApp } from "firebase/app";

import {
  render,
  screen,
  waitFor
} from "components/CustomRender";
import FriendList from '.';

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

describe('FriendList', () => {
  test('Should show friends profile image', async () => {
    render(
      <FriendList />
    )

    await waitFor(() => {
      expect(screen.queryAllByAltText(/Friend profile/i)).toHaveLength(3)
    })
  })

  test('Should show friends name', async () => {
    render(
      <FriendList />
    )

    await waitFor(() => {
      expect(screen.queryAllByTestId(/sidebarFriendName/i)).toHaveLength(3)
    })
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <FriendList />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})