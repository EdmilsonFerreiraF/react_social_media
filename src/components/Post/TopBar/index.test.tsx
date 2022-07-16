/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { initializeApp } from "firebase/app";
import { axe, toHaveNoViolations } from "jest-axe";

import { act, render, screen } from "components/CustomRender";
import TopBar from ".";

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

expect.extend(toHaveNoViolations);

describe("TopBar", () => {
  test("Should show Post author profile", async () => {
    const profilePicture = "profile_picture";
    const noProfilePicture = "no_profile_picture";
    const username = "username";
    const createdAt = new Date();

    await act(async () => {
      render(
        <TopBar
          profilePicture={profilePicture}
          noProfilePicture={noProfilePicture}
          username={username}
          createdAt={createdAt}
        />
      );
    });

    expect(screen.getByAltText(/Post user profile/i)).toBeInTheDocument();
  });

  test("Should show Post author username", async () => {
    const profilePicture = "profile_picture";
    const noProfilePicture = "no_profile_picture";
    const username = "username";
    const createdAt = new Date();

    await act(async () => {
      render(
        <TopBar
          profilePicture={profilePicture}
          noProfilePicture={noProfilePicture}
          username={username}
          createdAt={createdAt}
        />
      );
    });

    expect(screen.getByTestId("post username")).toBeInTheDocument();
  });

  test("Should show Post date", async () => {
    const profilePicture = "profile_picture";
    const noProfilePicture = "no_profile_picture";
    const username = "username";
    const createdAt = new Date();

    await act(async () => {
      render(
        <TopBar
          profilePicture={profilePicture}
          noProfilePicture={noProfilePicture}
          username={username}
          createdAt={createdAt}
        />
      );
    });

    expect(screen.getByTestId("post date")).toBeInTheDocument();
  });

  test("Should show Post options", async () => {
    const profilePicture = "profile_picture";
    const noProfilePicture = "no_profile_picture";
    const username = "username";
    const createdAt = new Date();

    await act(async () => {
      render(
        <TopBar
          profilePicture={profilePicture}
          noProfilePicture={noProfilePicture}
          username={username}
          createdAt={createdAt}
        />
      );
    });

    expect(screen.getByTestId("post options")).toBeInTheDocument();
  });

  test("Should show Post content text", async () => {
    const profilePicture = "profile_picture";
    const noProfilePicture = "no_profile_picture";
    const username = "username";
    const createdAt = new Date();

    await act(async () => {
      render(
        <TopBar
          profilePicture={profilePicture}
          noProfilePicture={noProfilePicture}
          username={username}
          createdAt={createdAt}
        />
      );
    });

    expect(screen.getByTestId(/post content text/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const profilePicture = "profile_picture";
    const noProfilePicture = "no_profile_picture";
    const username = "username";
    const createdAt = new Date();

    const { container }: any = act(() => {
      render(
        <TopBar
          profilePicture={profilePicture}
          noProfilePicture={noProfilePicture}
          username={username}
          createdAt={createdAt}
        />
      );
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
