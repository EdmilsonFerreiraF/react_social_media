/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { initializeApp } from "firebase/app";
import { axe, toHaveNoViolations } from "jest-axe";

import { act, render, screen } from "components/CustomRender";
import TopBar from ".";
import { forwardRef, LegacyRef, ReactNode, Ref, useRef } from "react";

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
    const optionsMenuAnchorEl = useRef();
    const OptionsButton = forwardRef((props, ref) => (
      <button ref={ref as LegacyRef<HTMLButtonElement>} id="options-menu">
        {props.children}
      </button>
    ));

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
            optionsMenuAnchorEl={optionsMenuAnchorEl?.current?.target}
          />
          <OptionsButton ref={optionsMenuAnchorEl} />
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
    interface Props {
      children?: ReactNode;
      type: "submit" | "button";
    }
    type Ref = HTMLButtonElement;
    const optionsRef = useRef();
    const OptionsButton = forwardRef<Ref, Props>(
      (props, ref: Ref<HTMLButtonElement>) => (
        <button ref={ref} id="options-menu">
          {props.children}
        </button>
      )
    );
    const optionsAnchorCurrent = optionsRef?.current;
    const optionsAnchorCurrentTarget = optionsAnchorCurrent;

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
            optionsMenuAnchorEl={optionsAnchorCurrent}
          />
          <OptionsButton ref={optionsRef} />
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
    let optionsButtonTarget = (e: React.FormEvent<HTMLElement>) => {
      return e.target;
    };
    const OptionsButton = () => {
      return (
        <button onChange={optionsButtonTarget} id="options-menu">
          Options
        </button>
      );
    };
    const optionsMenuAnchorEl;

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
    const optionsMenuAnchorEl = () => (
      <button id="options-menu">Options</button>
    );

    await act(async () => {
      render(
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
    const optionsMenuAnchorEl = () => (
      <button id="options-menu">Options</button>
    );

    await act(async () => {
      render(
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
    const optionsMenuAnchorEl = () => (
      <button id="options-menu">Options</button>
    );

    const { container }: any = act(() => {
      render(
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
      );
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
