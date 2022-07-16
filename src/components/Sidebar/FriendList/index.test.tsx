/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { initializeApp } from "firebase/app";
import { axe, toHaveNoViolations } from "jest-axe";

import { act, render, screen, waitFor } from "components/CustomRender";
import FriendList from ".";

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

describe("FriendList", () => {
  test("Should show friends profile image", async () => {
    await act(async () => {
      render(<FriendList />);
    });

    await waitFor(() => {
      expect(screen.queryAllByAltText(/Friend profile/i)).toHaveLength(3);
    });
  });

  test("Should show friends name", async () => {
    await act(async () => {
      render(<FriendList />);
    });

    await waitFor(() => {
      expect(screen.queryAllByTestId(/sidebarFriendName/i)).toHaveLength(3);
    });
  });

  test("Should be an acessible component", async () => {
    const { container }: any = act(() => {
      render(<FriendList />);
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
