/**
 * @jest-environment jsdom
 */

import React from "react"
import axios from 'axios'
import dotenv from 'dotenv'
import { axe, toHaveNoViolations } from 'jest-axe'

import {
  act,
  render,
  screen,
  waitForElementToBeRemoved
} from "components/CustomRender"
import '@testing-library/jest-dom'
import Feed from '.'

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
}

firebase.initializeApp(firebaseConfig)

describe('Feed', () => {
  test('Should other user profile when user is not current user', async () => {
    const otherUserId = "6198494ec6ece6cbe6cdae4e"

    act(() => {
      render(
        <Feed otherUserId={otherUserId} />
      )
    })

    await waitForElementToBeRemoved(() => screen.queryByText(/No posts created yet/i), { timeout: 5000 })
    expect(screen.getAllByTestId("post")).toHaveLength(2)

    expect(axios.get).toHaveBeenCalledTimes(3)
  })

  test('Should show user posts when user is current user', async () => {
    act(() => {
      render(
        <Feed />
      )
    })

    expect(screen.getByTestId(/createPost/i)).toBeInTheDocument()

    await waitForElementToBeRemoved(() => screen.queryByText(/No posts created yet/i), { timeout: 5000 })
    expect(screen.getAllByTestId("post")).toHaveLength(2)

    expect(axios.get).toHaveBeenCalledTimes(3)
  })

  test('Should show createPost when user is current user', async () => {
    act(() => {
      render(
        <Feed />
      )
    })

    await waitForElementToBeRemoved(() => screen.queryByText(/No posts created yet/i), { timeout: 5000 })
    expect(screen.getAllByTestId("post")).toHaveLength(2)

    expect(axios.get).toHaveBeenCalledTimes(3)
  })

  test('Should show No posts created yet when there aren\'t any posts', async () => {
    act(() => {
      render(
        <Feed />
      )
    })

    expect(screen.getByText(/No posts created yet/i)).toBeInTheDocument()
  })

  test('Should be an acessible component', async () => {
    const { container } =
      render(
        <Feed />
      )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})