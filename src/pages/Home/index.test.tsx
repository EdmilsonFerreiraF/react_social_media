/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";

import { render, screen } from "components/CustomRender";
import { initializeApp } from "firebase/app";
import Home from ".";

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

describe("Home", () => {
  test("Should show MainAppBar when render", async () => {
    render(<Home />);

    expect(await screen.findByTestId(/mainappbar/i)).toBeInTheDocument();
  });

  test("Should show Sidebar when render", async () => {
    render(<Home />);

    expect(await screen.findByTestId(/sidebar/i)).toBeInTheDocument();
  });

  test("Should show Feed when render", async () => {
    render(<Home />);

    expect(await screen.findByTestId("feed")).toBeInTheDocument();
  });

  test("Should show Home MessagesBar when render", async () => {
    render(<Home />);

    expect(await screen.findByTestId(/homeMessagesBar/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const { container } = render(<Home />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
