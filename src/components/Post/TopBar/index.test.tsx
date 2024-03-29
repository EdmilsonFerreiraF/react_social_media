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
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

expect.extend(toHaveNoViolations);

describe("TopBar", () => {
  test("Should show Post author profile", async () => {
    const profilePicture = "profile_picture";
    const noProfilePicture = "no_profile_picture";
    const username = "username";
    const createdAt = new Date();
    const postId = "post1";
    const handleMenuOpening = jest.fn();
    const isEditing = true;
    const handlePostEditing = jest.fn();
    const optionsMenuAnchorEl = document.getElementById(
      "options-menu"
    ) as Element;

    const OptionsButton = () => {
      return <button id="options-menu">Options</button>;
    };

    await act(async () => {
      render(
        <>
          <TopBar
            handleMenuOpening={handleMenuOpening}
            profilePicture={profilePicture}
            noProfilePicture={noProfilePicture}
            username={username}
            createdAt={createdAt}
            postId={postId}
            isEditing={isEditing}
            handlePostEditing={handlePostEditing}
            optionsMenuAnchorEl={optionsMenuAnchorEl}
          />
          <OptionsButton />
        </>
      );
    });

    expect(screen.getByAltText(/Post user profile/i)).toBeInTheDocument();
  });

  test("Should show Post author username", async () => {
    const profilePicture = "profile_picture";
    const noProfilePicture = "no_profile_picture";
    const username = "username";
    const createdAt = new Date();
    const postId = "post1";
    const handleMenuOpening = jest.fn();
    const isEditing = true;
    const handlePostEditing = jest.fn();
    const optionsMenuAnchorEl = document.getElementById(
      "options-menu"
    ) as Element;

    const OptionsButton = () => {
      return <button id="options-menu">Options</button>;
    };

    await act(async () => {
      render(
        <>
          <TopBar
            handleMenuOpening={handleMenuOpening}
            profilePicture={profilePicture}
            noProfilePicture={noProfilePicture}
            username={username}
            createdAt={createdAt}
            postId={postId}
            isEditing={isEditing}
            handlePostEditing={handlePostEditing}
            optionsMenuAnchorEl={optionsMenuAnchorEl}
          />
          <OptionsButton />
        </>
      );
    });

    expect(screen.getByTestId("post username")).toBeInTheDocument();
  });

  test("Should show Post date", async () => {
    const profilePicture = "profile_picture";
    const noProfilePicture = "no_profile_picture";
    const username = "username";
    const createdAt = new Date();
    const postId = "post1";
    const handleMenuOpening = jest.fn();
    const isEditing = true;
    const handlePostEditing = jest.fn();
    const optionsMenuAnchorEl = document.getElementById(
      "options-menu"
    ) as Element;

    const OptionsButton = () => {
      return <button id="options-menu">Options</button>;
    };

    await act(async () => {
      render(
        <>
          <TopBar
            handleMenuOpening={handleMenuOpening}
            profilePicture={profilePicture}
            noProfilePicture={noProfilePicture}
            username={username}
            createdAt={createdAt}
            postId={postId}
            isEditing={isEditing}
            handlePostEditing={handlePostEditing}
            optionsMenuAnchorEl={optionsMenuAnchorEl}
          />
          <OptionsButton />
        </>
      );
    });

    expect(screen.getByTestId("post date")).toBeInTheDocument();
  });

  test("Should show Post options", async () => {
    const profilePicture = "profile_picture";
    const noProfilePicture = "no_profile_picture";
    const username = "username";
    const createdAt = new Date();
    const postId = "post1";
    const handleMenuOpening = jest.fn();
    const isEditing = true;
    const handlePostEditing = jest.fn();
    const optionsMenuAnchorEl = document.getElementById(
      "options-menu"
    ) as Element;

    const OptionsButton = () => {
      return <button id="options-menu">Options</button>;
    };

    await act(async () => {
      render(
        <>
          <TopBar
            handleMenuOpening={handleMenuOpening}
            profilePicture={profilePicture}
            noProfilePicture={noProfilePicture}
            username={username}
            createdAt={createdAt}
            postId={postId}
            isEditing={isEditing}
            handlePostEditing={handlePostEditing}
            optionsMenuAnchorEl={optionsMenuAnchorEl}
          />
          <OptionsButton />
        </>
      );
    });

    expect(screen.getByTestId("post options")).toBeInTheDocument();
  });

  test("Should show Post content text", async () => {
    const profilePicture = "profile_picture";
    const noProfilePicture = "no_profile_picture";
    const username = "username";
    const createdAt = new Date();
    const postId = "post1";
    const handleMenuOpening = jest.fn();
    const isEditing = true;
    const handlePostEditing = jest.fn();
    const optionsMenuAnchorEl = document.getElementById(
      "options-menu"
    ) as Element;

    const OptionsButton = () => {
      return <button id="options-menu">Options</button>;
    };

    await act(async () => {
      render(
        <>
          <TopBar
            handleMenuOpening={handleMenuOpening}
            profilePicture={profilePicture}
            noProfilePicture={noProfilePicture}
            username={username}
            createdAt={createdAt}
            postId={postId}
            isEditing={isEditing}
            handlePostEditing={handlePostEditing}
            optionsMenuAnchorEl={optionsMenuAnchorEl}
          />
          <OptionsButton />
        </>
      );
    });

    expect(screen.getByTestId(/post content text/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const profilePicture = "profile_picture";
    const noProfilePicture = "no_profile_picture";
    const username = "username";
    const createdAt = new Date();
    const postId = "post1";
    const handleMenuOpening = jest.fn();
    const isEditing = true;
    const handlePostEditing = jest.fn();
    const optionsMenuAnchorEl = document.getElementById(
      "options-menu"
    ) as Element;

    const OptionsButton = () => {
      return <button id="options-menu">Options</button>;
    };

    const { container }: any = act(() => {
      render(
        <>
          <TopBar
            handleMenuOpening={handleMenuOpening}
            profilePicture={profilePicture}
            noProfilePicture={noProfilePicture}
            username={username}
            createdAt={createdAt}
            postId={postId}
            isEditing={isEditing}
            handlePostEditing={handlePostEditing}
            optionsMenuAnchorEl={optionsMenuAnchorEl}
          />
          <OptionsButton />
        </>
      );
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
