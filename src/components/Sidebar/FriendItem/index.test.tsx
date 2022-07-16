/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { initializeApp } from "firebase/app";
import { axe, toHaveNoViolations } from "jest-axe";

import { act, render, screen } from "components/CustomRender";
import { User } from "context/AuthContext";
import FriendItem from ".";

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

initializeApp(firebaseConfig);

describe("FriendItem", () => {
  test("Should show friend profile image", async () => {
    const friend: User = {
      id: "1",
      email: "user_email@email.com",
      password: "user_password",
      coverPicture: "",
      isAdmin: false,
      following: [],
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
    };

    await act(async () => {
      render(
        <ul>
          <FriendItem key={friend?.id} friend={friend} />
        </ul>
      );
    });

    expect(screen.getByAltText(/Friend profile/i)).toBeInTheDocument();
  });

  test("Should show friend name", async () => {
    const friend: User = {
      id: "1",
      email: "user_email@email.com",
      password: "user_password",
      coverPicture: "",
      isAdmin: false,
      following: [],
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
    };

    await act(async () => {
      render(
        <ul>
          <FriendItem key={friend?.id} friend={friend} />
        </ul>
      );
    });

    expect(screen.getByTestId(/sidebarFriendName/i)).toBeInTheDocument();
  });

  test("Should show username", async () => {
    const friend: User = {
      id: "1",
      email: "user_email@email.com",
      password: "user_password",
      coverPicture: "",
      isAdmin: false,
      following: [],
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
    };

    await act(async () => {
      render(
        <ul>
          <FriendItem key={friend?.id} friend={friend} />
        </ul>
      );
    });

    expect(screen.getByText(/user_username32/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const friend: User = {
      id: "1",
      email: "user_email@email.com",
      password: "user_password",
      coverPicture: "",
      isAdmin: false,
      following: [],
      profilePicture: "bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      username: "user_username32",
    };

    const { container }: any = act(() => {
      render(
        <ul>
          <FriendItem key={friend?.id} friend={friend} />
        </ul>
      );
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
