/**
 * @jest-environment jsdom
 */

import * as React from "react"

import {
  render,
  screen,
} from "components/customRender";
import '@testing-library/jest-dom'
import FollowingList from '.';
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

describe('FollowingList', () => {
  test('Should show error message when email is invalid', async () => {
    const friends = [
      {
        id: 1,
        profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        username: "user_username32",
      },
      {
        id: 2,
        profilePicture: "4e891f5b-96aa-4450-ba98-cf909beb9cf0.jpeg",
        username: "user_username",
      },
      {
        id: 3,
        profilePicture: "362e2e29-ed17-4a47-8129-131c2fc882f6.jpeg",
        username: "user_username2",
      },
    ]

    render(
      <FollowingList friends={friends} />
    )

    expect(screen.getAllByAltText(/Friend profile/i)).toHaveLength(3)
  })

  test('Should show error message when email is indvalid', async () => {
    const friends = [
      {
        id: 1,
        profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        username: "user_username32",
      },
      {
        id: 2,
        profilePicture: "4e891f5b-96aa-4450-ba98-cf909beb9cf0.jpeg",
        username: "user_username",
      },
      {
        id: 3,
        profilePicture: "362e2e29-ed17-4a47-8129-131c2fc882f6.jpeg",
        username: "user_username2",
      },
    ]

    render(
      <FollowingList friends={friends} />
    )

    expect(screen.getAllByTestId(/online friend name/i)).toHaveLength(3)
  })

  test('Should show friends profile image', async () => {
    const friends = [
      {
        id: 1,
        profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        username: "user_username32",
      },
      {
        id: 2,
        profilePicture: "4e891f5b-96aa-4450-ba98-cf909beb9cf0.jpeg",
        username: "user_username",
      },
      {
        id: 3,
        profilePicture: "362e2e29-ed17-4a47-8129-131c2fc882f6.jpeg",
        username: "user_username2",
      },
    ]

    render(
      <FollowingList friends={friends} />
    )

    expect(screen.getAllByAltText(/Friend profile/i)).toHaveLength(3)
  })

  test('Should be an acessible component', async () => {
    const friends = [
      {
        id: 1,
        profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        username: "user_username32",
      },
      {
        id: 2,
        profilePicture: "4e891f5b-96aa-4450-ba98-cf909beb9cf0.jpeg",
        username: "user_username",
      },
      {
        id: 3,
        profilePicture: "362e2e29-ed17-4a47-8129-131c2fc882f6.jpeg",
        username: "user_username2",
      },
    ]

    const { container } = render(
      <FollowingList friends={friends} />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})