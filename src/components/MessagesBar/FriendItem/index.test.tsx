/**
 * @jest-environment jsdom
 */

import * as React from "react"
import { axe, toHaveNoViolations } from 'jest-axe';
import '@testing-library/jest-dom'
import { initializeApp } from "firebase/app";
import dotenv from 'dotenv'

import {
  render,
  screen,
} from "components/CustomRender";
import FriendItem from '.';

dotenv.config()

expect.extend(toHaveNoViolations)

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

describe('FriendItem', () => {
  test('Should show friend profile image', async () => {
    const friend = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false
    }

    render(
      <ul>
      <FriendItem
        key={friend?.id}
        friend={friend} />
        </ul>
    )

    expect(screen.getByAltText(/Friend profile/i)).toBeInTheDocument()
  })

  test('Should show friend name', async () => {
    const friend = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false
    }

    render(
      <ul>
      <FriendItem
        key={friend?.id}
        friend={friend} />
        </ul>
    )

    expect(screen.getByTestId(/friend name/i)).toBeInTheDocument()
  })

  test('Should show username', async () => {
    const friend = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false
    }

    render(
      <ul>
      <FriendItem
        key={friend?.id}
        friend={friend} />
        </ul>
    )

    expect(screen.getByText(/user_username32/i)).toBeInTheDocument()
  })

  test('Should be an acessible component', async () => {
    const friend = {
      id: "1",
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
      username: "user_username32",
      email: "user_email@email.com",
      password: "user_password",
      isAdmin: false
    }

    const { container } = render(
      <ul>
      <FriendItem
        key={friend?.id}
        friend={friend} />
        </ul>
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})