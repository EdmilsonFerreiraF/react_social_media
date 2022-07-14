/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { act, render, screen } from "components/CustomRender";
import { User } from "context/AuthContext";
import FollowingList from ".";

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

describe("FollowingList", () => {
  test("Should show error message when email is invalid", async () => {
    const friends: User[] = [
      {
        id: "1",
        profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
        username: "user_username32",
        email: "user_email@email.com",
        password: "user_password",
        isAdmin: false,
      },
      {
        id: "2",
        profilePicture: "4e891f5b-96aa-4450-ba98-cf909beb9cf0.webp",
        username: "user_username",
        email: "user_email@email.com",
        password: "user_password",
        isAdmin: false,
      },
      {
        id: "3",
        profilePicture: "362e2e29-ed17-4a47-8129-131c2fc882f6.webp",
        username: "user_username2",
        email: "user_email@email.com",
        password: "user_password",
        isAdmin: false,
      },
    ];

    await act(async () => {
      render(<FollowingList friends={friends} />);
    });

    expect(screen.getAllByAltText(/Friend profile/i)).toHaveLength(3);
  });

  test("Should show error message when email is indvalid", async () => {
    const friends: User[] = [
      {
        id: "1",
        profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
        username: "user_username32",
        email: "user_email@email.com",
        password: "user_password",
        isAdmin: false,
      },
      {
        id: "2",
        profilePicture: "4e891f5b-96aa-4450-ba98-cf909beb9cf0.webp",
        username: "user_username",
        email: "user_email@email.com",
        password: "user_password",
        isAdmin: false,
      },
      {
        id: "3",
        profilePicture: "362e2e29-ed17-4a47-8129-131c2fc882f6.webp",
        username: "user_username2",
        email: "user_email@email.com",
        password: "user_password",
        isAdmin: false,
      },
    ];

    await act(async () => {
      render(<FollowingList friends={friends} />);
    });

    expect(screen.getAllByTestId(/online friend name/i)).toHaveLength(3);
  });

  test("Should show friends profile image", async () => {
    const friends: User[] = [
      {
        id: "1",
        profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
        username: "user_username32",
        email: "user_email@email.com",
        password: "user_password",
        isAdmin: false,
      },
      {
        id: "2",
        profilePicture: "4e891f5b-96aa-4450-ba98-cf909beb9cf0.webp",
        username: "user_username",
        email: "user_email@email.com",
        password: "user_password",
        isAdmin: false,
      },
      {
        id: "3",
        profilePicture: "362e2e29-ed17-4a47-8129-131c2fc882f6.webp",
        username: "user_username2",
        email: "user_email@email.com",
        password: "user_password",
        isAdmin: false,
      },
    ];

    await act(async () => {
      render(<FollowingList friends={friends} />);
    });

    expect(screen.getAllByAltText(/Friend profile/i)).toHaveLength(3);
  });

  test("Should be an acessible component", async () => {
    const friends: User[] = [
      {
        id: "1",
        profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
        username: "user_username32",
        email: "user_email@email.com",
        password: "user_password",
        isAdmin: false,
      },
      {
        id: "2",
        profilePicture: "4e891f5b-96aa-4450-ba98-cf909beb9cf0.webp",
        username: "user_username",
        email: "user_email@email.com",
        password: "user_password",
        isAdmin: false,
      },
      {
        id: "3",
        profilePicture: "362e2e29-ed17-4a47-8129-131c2fc882f6.webp",
        username: "user_username2",
        email: "user_email@email.com",
        password: "user_password",
        isAdmin: false,
      },
    ];

    const { container }: any = await act(async () => {
      render(<FollowingList friends={friends} />);
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
