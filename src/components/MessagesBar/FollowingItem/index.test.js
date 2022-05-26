/**
 * @jest-environment jsdom
 */

import * as React from "react"

import {
  render,
  screen,
} from "components/customRender";
import '@testing-library/jest-dom'
import FollowingItem from '.';
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

describe('FollowingItem', () => {
  test('Should show friend profile image when render', async () => {
    const friend = {
      id: "3a32071d-00f5-480e-bc93-b321299109ee",
      profilePicture: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
      username: "user_username32",
    }

    render(
      <FollowingItem
        key={friend?.id}
        friend={friend} />
    )

    expect(screen.getByAltText(/Friend profile/i)).toBeInTheDocument()
  })

  test('Should show online friend name when render', async () => {
    const friend = {
      id: "3a32071d-00f5-480e-bc93-b321299109ee",
      profilePicture: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
      username: "user_username32",
    }

    render(
      <FollowingItem
        key={friend?.id}
        friend={friend} />
    )

    expect(screen.getByTestId(/online friend name/i)).toBeInTheDocument()
  })

  test('Should show username when render', async () => {

    const friend = {
      id: "3a32071d-00f5-480e-bc93-b321299109ee",
      profilePicture: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
      username: "user_username32",
    }

    render(
      <FollowingItem
        key={friend?.id}
        friend={friend} />
    )

    expect(screen.getByText(/user_username32/i)).toBeInTheDocument()
  })

  test('Should be an acessible component', async () => {
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

    const friend = {
      id: "3a32071d-00f5-480e-bc93-b321299109ee",
      profilePicture: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
      username: "user_username32",
    }

    const { container } = render(
      <FollowingItem
        key={friend?.id}
        friend={friend} />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})