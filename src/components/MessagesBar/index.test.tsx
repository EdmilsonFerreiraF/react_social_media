/**
 * @jest-environment jsdom
 */
import * as React from "react"
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe';

import {
  render,
  screen,
} from "components/CustomRender";
import MessagesBar from ".";
import dotenv from 'dotenv'

const firebase = require('firebase/app')

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

firebase.initializeApp(firebaseConfig)

expect.extend(toHaveNoViolations)

describe('MessagesBar', () => {
  test('Should MessagesBar on for Home page', async () => {
    render(
      <MessagesBar />
    )

    expect(screen.getByTestId(/homeMessagesBar/i)).toBeInTheDocument()
  })

  test('Should MessagesBar on for Profile page', async () => {
    const user = {
      _id: "6198494ec6ece6cbe6cdae4e",
      id: "6198494ec6ece6cbe6cdae4e",
      username: "user_username33",
      email: "user_email@email.com",
      password: "user_password",
      profilePicture: "2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg",
      coverPicture: "",
      isAdmin: false,
      followings: []
    }

    render(
      <MessagesBar user={user} />
    )

    expect(screen.getByTestId(/profileMessagesBar/i)).toBeInTheDocument()
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <MessagesBar />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})