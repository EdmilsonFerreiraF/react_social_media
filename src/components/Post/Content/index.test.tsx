/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { initializeApp } from "firebase/app";
import { axe, toHaveNoViolations } from "jest-axe";

import { act, render, screen } from "components/CustomRender";
import Content from ".";

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

describe("Content", () => {
  test("Should show Content content text", async () => {
    const readMore = true;
    const handleReadMore = jest.fn();
    const postPicture = "post_picture";
    const noPostPicture = "no_post_picture";
    const description = "description";

    await act(async () => {
      render(
        <Content
          readMore={readMore}
          handleReadMore={handleReadMore}
          postPicture={postPicture}
          noPostPicture={noPostPicture}
          description={description}
        />
      );
    });

    expect(screen.getByTestId(/post content text/i)).toBeInTheDocument();
  });

  test("Should show read more button when showMore is false", async () => {
    const readMore = true;
    const handleReadMore = jest.fn();
    const postPicture = "post_picture";
    const noPostPicture = "no_post_picture";
    const description = "description";

    await act(async () => {
      render(
        <Content
          readMore={readMore}
          handleReadMore={handleReadMore}
          postPicture={postPicture}
          noPostPicture={noPostPicture}
          description={description}
        />
      );
    });

    expect(screen.getByText(/... read more/i)).toBeInTheDocument();
  });

  test("Should show read less button when showMore is true", async () => {
    const readMore = true;
    const handleReadMore = jest.fn();
    const postPicture = "post_picture";
    const noPostPicture = "no_post_picture";
    const description = "description";

    await act(async () => {
      render(
        <Content
          readMore={readMore}
          handleReadMore={handleReadMore}
          postPicture={postPicture}
          noPostPicture={noPostPicture}
          description={description}
        />
      );
    });

    userEvent.click(screen.getByText(/... read more/i));

    expect(screen.getByText(/read less/i)).toBeInTheDocument();
  });

  test("Should show Content content", async () => {
    const readMore = true;
    const handleReadMore = jest.fn();
    const postPicture = "post_picture";
    const noPostPicture = "no_post_picture";
    const description = "description";

    await act(async () => {
      render(
        <Content
          readMore={readMore}
          handleReadMore={handleReadMore}
          postPicture={postPicture}
          noPostPicture={noPostPicture}
          description={description}
        />
      );
    });

    expect(screen.getByAltText(/Content content/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const readMore = true;
    const handleReadMore = jest.fn();
    const postPicture = "post_picture";
    const noPostPicture = "no_post_picture";
    const description = "description";

    const { container }: any = act(() => {
      render(
        <Content
          readMore={readMore}
          handleReadMore={handleReadMore}
          postPicture={postPicture}
          noPostPicture={noPostPicture}
          description={description}
        />
      );
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
