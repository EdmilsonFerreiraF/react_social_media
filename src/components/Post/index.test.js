/**
 * @jest-environment jsdom
 */
import * as React from "react"

import {
  render,
  screen,
} from "components/customRender";
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe';
import Post from ".";
import dotenv from 'dotenv'
import { initializeApp } from "firebase/app";
import userEvent from "@testing-library/user-event";

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

expect.extend(toHaveNoViolations)

describe('Post', () => {
  test('Should show Post author profile', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    render(
      <Post post={post} />
    )

    expect(screen.getByAltText(/Post user profile/i)).toBeInTheDocument()
  })

  test('Should show Post author username', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    render(
      <Post post={post} />
    )

    expect(screen.getByTestId("post username")).toBeInTheDocument()
  })

  test('Should show Post date', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    render(
      <Post post={post} />
    )

    expect(screen.getByTestId("post date")).toBeInTheDocument()
  })

  test('Should show Post options', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    render(
      <Post post={post} />
    )

    expect(screen.getByTestId("post options")).toBeInTheDocument()
  })

  test('Should show Post content text', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    render(
      <Post post={post} />
    )

    expect(screen.getByTestId(/post content text/i)).toBeInTheDocument()
  })

  test('Should show read more button when showMore is false', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    render(
      <Post post={post} />
    )

    expect(screen.getByText(/... read more/i)).toBeInTheDocument()
  })

  test('Should show read less button when showMore is true', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    render(
      <Post post={post} />
    )

    userEvent.click(screen.getByText(/... read more/i))

    expect(screen.getByText(/read less/i)).toBeInTheDocument()
  })

  test('Should show Post content', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    render(
      <Post post={post} />
    )

    expect(screen.getByAltText(/Post content/i)).toBeInTheDocument();
  })

  test('Should show Post like reaction', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    render(
      <Post post={post} />
    )

    expect(screen.getByAltText(/Post like reaction/i)).toBeInTheDocument();
  })

  test('Should show Post heart reaction', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    render(
      <Post post={post} />
    )

    expect(screen.getByAltText(/Post heart reaction/i)).toBeInTheDocument();
  })

  test('Should show Post x people liked it', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    render(
      <Post post={post} />
    )

    expect(screen.getByText(/people liked it/i)).toBeInTheDocument();
  })

  test('Should show Post x comments', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    render(
      <Post post={post} />
    )

    expect(screen.getByText(/comments/i)).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const post =    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    }
    
    const { container } = render(
      <Post post={post} />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})