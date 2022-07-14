/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { act, render, screen } from "components/CustomRender";
import TabletMenu from ".";

expect.extend(toHaveNoViolations);

describe("TabletMenu", () => {
  test("Should show AccountDesktopMenu", async () => {
    const anchorEl = document.createElement("div");
    const tabletMenuId = "1";
    const isMenuOpen = true;
    const handleMenuOpening = jest.fn();
    const handleProfileClick = jest.fn();

    await act(async () => {
      render(
        <TabletMenu
          anchorEl={anchorEl}
          tabletMenuId={tabletMenuId}
          isMenuOpen={isMenuOpen}
          handleMenuOpening={handleMenuOpening}
          handleProfileClick={handleProfileClick}
        />
      );
    });

    expect(screen.getByTestId(/accountdesktopmenu/i)).toBeInTheDocument();
  });

  test("Should show NavigationMenu", async () => {
    const anchorEl = document.createElement("div");
    const tabletMenuId = "1";
    const isMenuOpen = true;
    const handleMenuOpening = jest.fn();
    const handleProfileClick = jest.fn();

    await act(async () => {
      render(
        <TabletMenu
          anchorEl={anchorEl}
          tabletMenuId={tabletMenuId}
          isMenuOpen={isMenuOpen}
          handleMenuOpening={handleMenuOpening}
          handleProfileClick={handleProfileClick}
        />
      );
    });

    expect(screen.getByTestId(/navigation menu/i)).toBeInTheDocument();
  });

  test("Should show Social", async () => {
    const anchorEl = document.createElement("div");
    const tabletMenuId = "1";
    const isMenuOpen = true;
    const handleMenuOpening = jest.fn();
    const handleProfileClick = jest.fn();

    await act(async () => {
      render(
        <TabletMenu
          anchorEl={anchorEl}
          tabletMenuId={tabletMenuId}
          isMenuOpen={isMenuOpen}
          handleMenuOpening={handleMenuOpening}
          handleProfileClick={handleProfileClick}
        />
      );
    });

    expect(screen.getByTestId("social")).toBeInTheDocument();
  });

  test("Should show desktop menu on desktop", async () => {
    const anchorEl = document.createElement("div");
    const tabletMenuId = "1";
    const isMenuOpen = true;
    const handleMenuOpening = jest.fn();
    const handleProfileClick = jest.fn();

    await act(async () => {
      render(
        <TabletMenu
          anchorEl={anchorEl}
          tabletMenuId={tabletMenuId}
          isMenuOpen={isMenuOpen}
          handleMenuOpening={handleMenuOpening}
          handleProfileClick={handleProfileClick}
        />
      );
    });

    expect(screen.getByAltText(/My Profile/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const anchorEl = document.createElement("div");
    const tabletMenuId = "1";
    const isMenuOpen = true;
    const handleMenuOpening = jest.fn();
    const handleProfileClick = jest.fn();

    const { container } = render(
      <TabletMenu
        anchorEl={anchorEl}
        tabletMenuId={tabletMenuId}
        isMenuOpen={isMenuOpen}
        handleMenuOpening={handleMenuOpening}
        handleProfileClick={handleProfileClick}
      />
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
