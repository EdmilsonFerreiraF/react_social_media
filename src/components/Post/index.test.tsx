/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { initializeApp } from "firebase/app";
import { axe, toHaveNoViolations } from "jest-axe";

import { act, render, screen } from "components/CustomRender";
import Post from ".";

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

type IPost = {
  _id: string;
  id: string;
  createdAt: Date;
  userId: string;
  description: string;
  image: string;
  likes: string[];
  comment: 5;
};

describe("Post", () => {
  test("Should show Post author profile", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    await act(async () => {
      render(<Post post={post} />);
    });

    expect(screen.getByAltText(/Post user profile/i)).toBeInTheDocument();
  });

  test("Should show Post author username", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    await act(async () => {
      render(<Post post={post} />);
    });

    expect(screen.getByTestId("post username")).toBeInTheDocument();
  });

  test("Should show Post date", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    await act(async () => {
      render(<Post post={post} />);
    });

    expect(screen.getByTestId("post date")).toBeInTheDocument();
  });

  test("Should show Post options", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    await act(async () => {
      render(<Post post={post} />);
    });

    expect(screen.getByTestId("post options")).toBeInTheDocument();
  });

  test("Should show Post content text", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    await act(async () => {
      render(<Post post={post} />);
    });

    expect(screen.getByTestId(/post content text/i)).toBeInTheDocument();
  });

  test("Should show read more button when showMore is false", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    await act(async () => {
      render(<Post post={post} />);
    });

    expect(screen.getByText(/... read more/i)).toBeInTheDocument();
  });

  test("Should show read less button when showMore is true", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    await act(async () => {
      render(<Post post={post} />);
    });

    userEvent.click(screen.getByText(/... read more/i));

    expect(screen.getByText(/read less/i)).toBeInTheDocument();
  });

  test("Should show Post content", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    await act(async () => {
      render(<Post post={post} />);
    });

    expect(screen.getByAltText(/Post content/i)).toBeInTheDocument();
  });

  test("Should show Post like reaction", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    await act(async () => {
      render(<Post post={post} />);
    });

    expect(screen.getByAltText(/Post like reaction/i)).toBeInTheDocument();
  });

  test("Should show Post heart reaction", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    await act(async () => {
      render(<Post post={post} />);
    });

    expect(screen.getByAltText(/Post heart reaction/i)).toBeInTheDocument();
  });

  test("Should show Post x people liked it", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    await act(async () => {
      render(<Post post={post} />);
    });

    expect(screen.getByText(/people liked it/i)).toBeInTheDocument();
  });

  test("Should show Post x comments", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    await act(async () => {
      render(<Post post={post} />);
    });

    expect(screen.getByText(/comments/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const post: IPost = {
      _id: "1",
      id: "1",
      createdAt: new Date(),
      userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
      description: "user  -post description",
      image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.webp",
      likes: ["bdb9322d-5868-4091-a305-d8cd9e4f62f5"],
      comment: 5,
    };

    const { container }: any = act(() => {
      render(<Post post={post} />);
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
