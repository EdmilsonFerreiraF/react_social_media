/**
 * @jest-environment jsdom
 */

import * as React from "react"

import '@testing-library/jest-dom'
import dotenv from 'dotenv'
import { initializeApp } from "firebase/app"
import { axe, toHaveNoViolations } from 'jest-axe'

import {
  act,
  render,
  screen,
  waitFor
} from "components/CustomRender"
import FriendList from '.'

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

initializeApp(firebaseConfig)

describe('FriendList', () => {
  test('Should show friends profile image', async () => {
    await act(async () => {
      render(
        <FriendList />
      )
    })

    await waitFor(() => {
      expect(screen.queryAllByAltText(/Friend profile/i)).toHaveLength(3)
    })
  })

  test('Should show friends name', async () => {
    await act(async () => {
      render(
        <FriendList />
      )
    })

    await waitFor(() => {
      expect(screen.queryAllByTestId(/sidebarFriendName/i)).toHaveLength(3)
    })
  })

  test('Should be an acessible component', async () => {
    const { container }: any = act(() => {
      render(
        <FriendList />
      )
    })

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})