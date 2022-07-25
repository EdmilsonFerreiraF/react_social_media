/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { render, screen } from "components/CustomRender";
import MobileNavigation from ".";

expect.extend(toHaveNoViolations);

describe("MobileNavigation", () => {
  test("Should show navigation mobile menu", async () => {
    const handleMenuOpening = jest.fn();

    render(<MobileNavigation handleMenuOpening={handleMenuOpening} />);

    expect(screen.getByTestId(/navigation mobile menu/i)).toBeInTheDocument();
  });

  test("Should show navigationMenuItem", async () => {
    const handleMenuOpening = jest.fn();

    render(<MobileNavigation handleMenuOpening={handleMenuOpening} />);

    expect(screen.getAllByTestId(/navigationMenuItem/i)).toHaveLength(2);
  });

  test("Should show navigationIconButton", async () => {
    const handleMenuOpening = jest.fn();

    render(<MobileNavigation handleMenuOpening={handleMenuOpening} />);

    expect(screen.getAllByTestId(/navigationIconButton/i)).toHaveLength(2);
  });

  test("Should show mobileHomepageLink", async () => {
    const handleMenuOpening = jest.fn();

    render(<MobileNavigation handleMenuOpening={handleMenuOpening} />);

    expect(screen.getAllByTestId(/mobileHomepageLink/i)).toHaveLength(2);
  });

  test("Should show mobileTimelineLink", async () => {
    const handleMenuOpening = jest.fn();

    render(<MobileNavigation handleMenuOpening={handleMenuOpening} />);

    expect(screen.getAllByTestId(/mobileTimelineLink/i)).toHaveLength(2);
  });

  test("Should be an acessible component", async () => {
    const handleMenuOpening = jest.fn();

    const { container } = render(
      <div role="menu" id="primary-search-account-menu">
        <MobileNavigation handleMenuOpening={handleMenuOpening} />
      </div>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
