/**
 * @jest-environment jsdom
 */

import React from "react"
import axios from 'axios';
import dotenv from 'dotenv'
import { axe, toHaveNoViolations } from 'jest-axe';
import { initializeApp } from "firebase/app";

import {
  render,
  screen,
  waitForElementToBeRemoved
} from "components/customRender";
import '@testing-library/jest-dom'
import Feed from '.';

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

describe('Header', () => {
  test('Should other user profile when user is not current user', async () => {
    const otherUserId = {
      _id: "6198494ec6ece6cbe6cdae4e",
      username: "user_username2",
      email: "user_email@email.com",
      profilePicture: "2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg",
      coverPicture: "",
      isAdmin: false,
      followers: [],
      followings: []
  }

    render(
      <Feed otherUserId={otherUserId} />
    )

    await waitForElementToBeRemoved(() => screen.queryByText(/No posts created yet/i));
    expect(screen.getAllByTestId("post")).toHaveLength(2);
    
    expect(axios.get).toHaveBeenCalledTimes(3);
  })

  test('Should show user posts when user is current user', async () => {
    render(
      <Feed />
    )
    
    expect(screen.getByTestId(/createPost/i)).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText(/No posts created yet/i));
    expect(screen.getAllByTestId("post")).toHaveLength(2);
    
    expect(axios.get).toHaveBeenCalledTimes(3);
  })

  test('Should show createPost when user is current user', async () => {
    render(
      <Feed />
    )
    
    await waitForElementToBeRemoved(() => screen.queryByText(/No posts created yet/i));
    expect(screen.getAllByTestId("post")).toHaveLength(2);
    
    expect(axios.get).toHaveBeenCalledTimes(3);
  })

  test('Should show No posts created yet when there aren\'t any posts', async () => {
    render(
      <Feed />
    )
    
    expect(screen.getByText(/No posts created yet/i)).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <Feed />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})