/**
 * @jest-environment jsdom
 */

import * as React from "react"
import { useParams } from "react-router-dom";
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe';
import dotenv from 'dotenv'
import { initializeApp } from "firebase/app";
import {jest} from '@jest/globals';

import {
  render,
  screen,
  waitForElementToBeRemoved
}
  from "components/CustomRender";
import Profile from ".";

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

describe('Profile', () => {
  test('Should show MainAppBar when render', async () => {
    // useParams.mockReturnValue({ username: "user_username2" })

    render(
      <Profile />
    );

    expect(screen.getByTestId(/mainappbar/i)).toBeInTheDocument()
  });

  test('Should show Sidebar when render', async () => {
    // useParams.mockReturnValue({ username: "user_username2" })

    render(
      <Profile />
    );

    expect(screen.getByTestId(/sidebar/i)).toBeInTheDocument()
  });

  test('Should show Feed when render', async () => {
    // useParams.mockReturnValue({ username: "user_username2" })

    render(
      <Profile />
    );

    expect(screen.getByTestId(/user profile username/i)).toBeInTheDocument()
  });

  test('Should show CreatePost when render', async () => {
    // useParams.mockReturnValue({ username: "user_username2" })

    render(
      <Profile />
    );

    expect(screen.getByTestId(/createPost/i)).toBeInTheDocument()
  });

  test('Should show Post when render', async () => {
    // useParams.mockReturnValue({ username: "user_username2" })

    render(
      <Profile />
    );

    await waitForElementToBeRemoved(() => screen.queryByText(/No posts created yet/i));
    expect(screen.getAllByTestId(/post/i)).toHaveLength(17)
  });

  test('Should show Profile MessagesBar when render', async () => {
    // useParams.mockReturnValue({ username: "user_username2" })

    render(
      <Profile />
    );

    expect(screen.getByTestId(/profileMessagesBar/i)).toBeInTheDocument()
  });

  test('Should show user Cover Image when render', async () => {
    // useParams.mockReturnValue({ username: "user_username2" })

    render(
      <Profile />
    );

    expect(screen.getByAltText(/User cover/i)).toBeInTheDocument()
  });

  test('Should show user profile image when render', async () => {
    // useParams.mockReturnValue({ username: "user_username2" })

    render(
      <Profile />
    );

    expect(screen.getByAltText('User profile')).toBeInTheDocument()
  });

  test('Should show user profile username when render', async () => {
    // useParams.mockReturnValue({ username: "user_username2" })

    render(
      <Profile />
    );

    expect(screen.getByTestId(/user profile username/i)).toBeInTheDocument()
  });

  test('Should show user profile description when render', async () => {
    // useParams.mockReturnValue({ username: "user_username2" })

    render(
      <Profile />
    );

    expect(screen.getByTestId(/user profile description/i)).toBeInTheDocument()
  });

  test('Should be an acessible component', async () => {
    const { container } = render(
      <Profile />
    )
    
    await waitForElementToBeRemoved(() => screen.queryByText(/No posts created yet/i));
    expect(screen.getAllByTestId("post")).toHaveLength(2);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  })
});