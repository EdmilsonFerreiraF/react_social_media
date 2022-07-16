/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { initializeApp } from "firebase/app";
import { axe, toHaveNoViolations } from "jest-axe";

import { render, screen } from "components/CustomRender";
import Sidebar from ".";

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

describe("Sidebar", () => {
  test("Should show NavList when render", async () => {
    render(<Sidebar />);

    expect(screen.getByTestId(/navList/i)).toBeInTheDocument();
  });

  test("Should show Show More when render", async () => {
    render(<Sidebar />);

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });

  test("Should show Show More divison when render", async () => {
    render(<Sidebar />);

    expect(screen.getByTestId(/showMoreDivision/i)).toBeInTheDocument();
  });

  test("Should show FriendList when render", async () => {
    render(<Sidebar />);

    expect(screen.getByTestId(/friendList/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const { container } = render(<Sidebar />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
