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
} from "components/customRender";
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
      <FriendList friends={friends} />
    )

    expect(screen.getAllByAltText(/Friend profile/i)).toHaveLength(3)
  })

  test('Should show friends name', async () => {
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
      <FriendList friends={friends} />
    )

    expect(screen.getAllByTestId(/friend name/i)).toHaveLength(3)
  })

  test('Should show friends username', async () => {
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
      <FriendList friends={friends} />
    )

    expect(screen.getByText(/user_username32/i)).toBeInTheDocument()
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
      <FriendList friends={friends} />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})