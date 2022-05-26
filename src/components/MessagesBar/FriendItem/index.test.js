/**
 * @jest-environment jsdom
 */

import * as React from "react"

import {
  render,
  screen,
} from "components/customRender";
import '@testing-library/jest-dom'
import FriendItem from '.';
import { axe, toHaveNoViolations } from 'jest-axe';
import { initializeApp } from "firebase/app";
import dotenv from 'dotenv'

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

describe('FriendItem', () => {
  test('Should show friend profile image', async () => {
    const friend = {
      id: 1,
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
      username: "user_username32",
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
      id: 1,
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
      username: "user_username32",
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
      id: 1,
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
      username: "user_username32",
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
      id: 1,
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
      username: "user_username32",
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