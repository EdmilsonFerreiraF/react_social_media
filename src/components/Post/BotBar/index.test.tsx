/**
 * @jest-environment jsdom
 */
import * as React from "react"
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'
import dotenv from 'dotenv'
import { initializeApp } from "firebase/app"

import {
  act,
  render,
  screen,
} from "components/CustomRender"
import BotBar from "."

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

expect.extend(toHaveNoViolations)

describe('BotBar', () => {
  test('Should show BotBar like reaction', async () => {
    const likes = 5
    const comment = 5
    const userId = "3a32071d-00f5-480e-bc93-b321299109ee"
    const postId = "1"

    await act(async () => {
      render(
        <BotBar
          userId={userId}
          postId={postId}
          likes={likes}
          comments={comment} />
      )
    })

    expect(
      screen.getByAltText(/BotBar like reaction/i)
    ).toBeInTheDocument()
  })

  test('Should show BotBar heart reaction', async () => {
    const likes = 5
    const comment = 5
    const userId = "3a32071d-00f5-480e-bc93-b321299109ee"
    const postId = "1"

    await act(async () => {
      render(
        <BotBar
          userId={userId}
          postId={postId}
          likes={likes}
          comments={comment} />
      )
    })

    expect(
      screen.getByAltText(/BotBar heart reaction/i)
    ).toBeInTheDocument()
  })

  test('Should show BotBar x people liked it', async () => {
    const likes = 5
    const comment = 5
    const userId = "3a32071d-00f5-480e-bc93-b321299109ee"
    const postId = "1"

    await act(async () => {
      render(
        <BotBar
          userId={userId}
          postId={postId}
          likes={likes}
          comments={comment} />
      )
    })

    expect(
      screen.getByText(/people liked it/i)
    ).toBeInTheDocument()
  })

  test('Should show BotBar x comments', async () => {
    const likes = 5
    const comment = 5
    const userId = "3a32071d-00f5-480e-bc93-b321299109ee"
    const postId = "1"

    await act(async () => {
      render(
        <BotBar
          userId={userId}
          postId={postId}
          likes={likes}
          comments={comment} />
      )
    })

    expect(screen.getByText(/comments/i)).toBeInTheDocument()
  })

  test('Should be an acessible component', async () => {
    const likes = 5
    const comment = 5
    const userId = "3a32071d-00f5-480e-bc93-b321299109ee"
    const postId = "1"

    const { container }: any = act(() => {
      render(
        <BotBar
          userId={userId}
          postId={postId}
          likes={likes}
          comments={comment} />
      )
    })

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})