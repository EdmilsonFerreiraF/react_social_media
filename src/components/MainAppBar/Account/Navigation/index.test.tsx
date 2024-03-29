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
import Navigation from ".";
import Profile from "../Profile";

expect.extend(toHaveNoViolations);

describe("Navigation", () => {
  test("Should show homepage link when screen is large", async () => {
    render(<Navigation />);

    expect(screen.getByTestId(/homepageLink/i)).toBeInTheDocument();
  });

  test("Should show timeline link when screen is large", async () => {
    render(<Navigation />);

    expect(screen.getByTestId(/timelineLink/i)).toBeInTheDocument();
  });

  test("Should show navigation menu item when screen is large", async () => {
    const handleMenuOpening = jest.fn();

    render(<Navigation isMobile handleMenuOpening={handleMenuOpening} />);

    expect(screen.getAllByTestId(/navigationMenuItem/i)).toHaveLength(2);
  });

  test("Should show navigation icon button when isMobile is true", async () => {
    const handleMenuOpening = jest.fn();

    render(<Navigation isMobile handleMenuOpening={handleMenuOpening} />);

    expect(screen.getAllByTestId(/navigationIconButton/i)).toHaveLength(2);
  });

  test("Should show home icon when isMobile is true", async () => {
    const handleMenuOpening = jest.fn();

    render(<Navigation isMobile handleMenuOpening={handleMenuOpening} />);

    expect(screen.getByTestId(/HomeIcon/i)).toBeInTheDocument();
  });

  test("Should show mobile timeline link when isMobile is true", async () => {
    const handleMenuOpening = jest.fn();

    render(<Navigation isMobile handleMenuOpening={handleMenuOpening} />);

    expect(screen.getByTestId(/mobileTimelineLink/i)).toBeInTheDocument();
  });

  test("Should go to homepage page when it is clicked", async () => {
    renderRTL(
      <MemoryRouter initialEntries={["/profile/*"]}>
        <Routes>
          <Route path="/profile/*" element={<Navigation />} />
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
          <Route path="/" element={<Navigation />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </MemoryRouter>
    );

    userEvent.click(screen.getByTestId(/timelineLink/i));

    expect(screen.getByAltText(/My profile/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const handleMenuOpening = jest.fn();

    const { container } = render(
      <div role="menu" id="primary-search-account-menu">
        <Navigation isMobile handleMenuOpening={handleMenuOpening} />
      </div>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
