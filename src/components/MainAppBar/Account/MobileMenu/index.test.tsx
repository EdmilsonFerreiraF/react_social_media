/**
 * @jest-environment jsdom
 */

import * as React from "react"
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe';

import {
  act,
  render,
  screen
} from "components/CustomRender";
import MobileMenu from '.';

expect.extend(toHaveNoViolations)

describe('MobileMenu', () => {
  test('Should show NavigationMobileMenu', async () => {
    const mobileMoreAnchorEl = document.createElement("div");
    const mobileMenuId = "1"
    const isMobileMenuOpen = true
    const handleMobileMenuClose = jest.fn()
    const handleMenuClose = jest.fn()
    const handleProfileClick = jest.fn()

    await act(async () => {
      render(
        <MobileMenu
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          mobileMenuId={mobileMenuId}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
          handleMenuClose={handleMenuClose}
          handleProfileClick={handleProfileClick} />
      )
    })

    expect(screen.getByTestId(/navigation mobile menu/i)).toBeInTheDocument()
  })

  test('Should show Profile menu item', async () => {
    const mobileMoreAnchorEl = document.createElement("div");
    const mobileMenuId = "1"
    const isMobileMenuOpen = true
    const handleMobileMenuClose = jest.fn()
    const handleMenuClose = jest.fn()
    const handleProfileClick = jest.fn()

    await act(async () => {
      render(
        <MobileMenu
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          mobileMenuId={mobileMenuId}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
          handleMenuClose={handleMenuClose}
          handleProfileClick={handleProfileClick} />
      )
    })

    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
  })

  test('Should show Messages menu item', async () => {
    const mobileMoreAnchorEl = document.createElement("div");
    const mobileMenuId = "1"
    const isMobileMenuOpen = true
    const handleMobileMenuClose = jest.fn()
    const handleMenuClose = jest.fn()
    const handleProfileClick = jest.fn()

    await act(async () => {
      render(
        <MobileMenu
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          mobileMenuId={mobileMenuId}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
          handleMenuClose={handleMenuClose}
          handleProfileClick={handleProfileClick} />
      )
    })

    expect(screen.getByText(/Messages/i)).toBeInTheDocument()
  })

  test('Should show desktop menu on desktop', async () => {
    const mobileMoreAnchorEl = document.createElement("div");
    const mobileMenuId = "1"
    const isMobileMenuOpen = true
    const handleMobileMenuClose = jest.fn()
    const handleMenuClose = jest.fn()
    const handleProfileClick = jest.fn()

    await act(async () => {
      render(
        <MobileMenu
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          mobileMenuId={mobileMenuId}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
          handleMenuClose={handleMenuClose}
          handleProfileClick={handleProfileClick} />
      )
    })

    expect(screen.getByText(/Notifications/i)).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const mobileMoreAnchorEl = document.createElement("div");
    const mobileMenuId = "1"
    const isMobileMenuOpen = true
    const handleMobileMenuClose = jest.fn()
    const handleMenuClose = jest.fn()
    const handleProfileClick = jest.fn()

    const { container } =
      render(
        <MobileMenu
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          mobileMenuId={mobileMenuId}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
          handleMenuClose={handleMenuClose}
          handleProfileClick={handleProfileClick} />
      )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})