/**
 * @jest-environment jsdom
 */

import * as React from "react"
import '@testing-library/jest-dom'
import dotenv from 'dotenv'
import { initializeApp } from "firebase/app"
import { axe, toHaveNoViolations } from 'jest-axe'

import {
  render,
  screen
} from "components/CustomRender"
import Sidebar from '.'

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

  test('Should show Show More divison when render', async () => {
    render(
      <Sidebar />
    )

    expect(screen.getByTestId(/showMoreDivision/i)).toBeInTheDocument()
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

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})