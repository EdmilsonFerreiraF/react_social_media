/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render as renderRTL } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { render, screen } from "components/CustomRender";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TabletNavigation from ".";
import Profile from "../../Profile";

expect.extend(toHaveNoViolations);

describe("TabletNavigation", () => {
  test("Should show navigation menu", async () => {
    render(<TabletNavigation />);

    expect(screen.getByTestId(/navigation menu/i)).toBeInTheDocument();
  });

  test("Should go to homepage page when it is clicked", async () => {
    renderRTL(
      <MemoryRouter initialEntries={["/profile/*"]}>
        <Routes>
          <Route path="/profile/*" element={<TabletNavigation />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </MemoryRouter>
    );

    userEvent.click(screen.getByTestId(/homepageLink/i));

    expect(screen.getByAltText(/My profile/i)).toBeInTheDocument();
  });

  test("Should go to timeline page when it is clicked", async () => {
    renderRTL(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<TabletNavigation />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </MemoryRouter>
    );

    userEvent.click(screen.getByTestId(/timelineLink/i));

    expect(screen.getByAltText(/My profile/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const { container } = render(
      <div role="menu" id="primary-search-account-menu">
        <TabletNavigation />
      </div>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
