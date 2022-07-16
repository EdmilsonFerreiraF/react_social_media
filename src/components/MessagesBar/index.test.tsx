/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";

import { act, render, screen } from "components/CustomRender";
import { User } from "context/AuthContext";
import MessagesBar from ".";

const firebase = require("firebase/app");

expect.extend(toHaveNoViolations);

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

expect.extend(toHaveNoViolations);

describe("MessagesBar", () => {
  test("Should MessagesBar on for Home page", async () => {
    await act(async () => {
      render(<MessagesBar />);
    });

    expect(screen.getByTestId(/homeMessagesBar/i)).toBeInTheDocument();
  });

  test("Should MessagesBar on for Profile page", async () => {
    const user: User = {
      id: "6198494ec6ece6cbe6cdae4e",
      username: "user_username33",
      email: "user_email@email.com",
      password: "user_password",
      profilePicture: "2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.webp",
      coverPicture: "",
      isAdmin: false,
      following: [],
    };

    render(<MessagesBar user={user} />);

    expect(screen.getByTestId(/profileMessagesBar/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const { container }: any = await act(async () => {
      render(<MessagesBar />) as any;
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
