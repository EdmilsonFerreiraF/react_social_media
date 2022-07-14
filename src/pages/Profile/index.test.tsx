/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";
import { useParams } from "react-router-dom";

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "components/CustomRender";
import Profile from ".";

dotenv.config();

expect.extend(toHaveNoViolations);

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

describe("Profile", () => {
  test("Should show MainAppBar when render", async () => {
    useParams();

    render(<Profile />);

    expect(screen.getByTestId(/mainappbar/i)).toBeInTheDocument();
  });

  test("Should show Sidebar when render", async () => {
    useParams();

    render(<Profile />);

    expect(screen.getByTestId(/sidebar/i)).toBeInTheDocument();
  });

  test("Should show Feed when render", async () => {
    useParams();

    render(<Profile />);

    expect(screen.getByTestId(/user profile username/i)).toBeInTheDocument();
  });

  test("Should show CreatePost when render", async () => {
    useParams();

    render(<Profile />);

    expect(screen.getByTestId(/createPost/i)).toBeInTheDocument();
  });

  test("Should show Post when render", async () => {
    useParams();

    render(<Profile />);

    await waitForElementToBeRemoved(() =>
      screen.queryByText(/No posts created yet/i)
    );
    expect(screen.getAllByTestId(/post/i)).toHaveLength(16);
  });

  test("Should show Profile MessagesBar when render", async () => {
    useParams();

    render(<Profile />);

    expect(screen.getByTestId(/profileMessagesBar/i)).toBeInTheDocument();
  });

  test("Should show user Cover Image when render", async () => {
    useParams();

    render(<Profile />);

    expect(screen.getByAltText(/User cover/i)).toBeInTheDocument();
  });

  test("Should show user profile image when render", async () => {
    useParams();

    render(<Profile />);

    expect(screen.getByAltText("User profile")).toBeInTheDocument();
  });

  test("Should show user profile username when render", async () => {
    useParams();

    render(<Profile />);

    expect(screen.getByTestId(/user profile username/i)).toBeInTheDocument();
  });

  test("Should show user profile description when render", async () => {
    useParams();

    render(<Profile />);

    expect(screen.getByTestId(/user profile description/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const { container } = render(<Profile />);

    await waitForElementToBeRemoved(() =>
      screen.queryByText(/No posts created yet/i)
    );
    expect(screen.getAllByTestId("post")).toHaveLength(2);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
