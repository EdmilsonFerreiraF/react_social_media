/**
 * @jest-environment jsdom
 */

import * as React from "react"
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'

import {
  render,
  screen
} from "components/customRender";
import NavList from ".";

expect.extend(toHaveNoViolations)

describe('NavList', () => {
  test('Should have Feed NavItem', async () => {
    render(
      <NavList />
    )

    expect(screen.getByText(/Feed/i)).toBeInTheDocument();
    expect(screen.getByTestId(/FeedIcon/i)).toBeInTheDocument();
  })
  
  test('Should have Chats NavItem', async () => {
    render(
      <NavList />
    )

    expect(screen.getByText(/Chats/i)).toBeInTheDocument();
    expect(screen.getByTestId(/ChatIcon/i)).toBeInTheDocument();
  })

  test('Should have Videos NavItem', async () => {
    render(
      <NavList />
    )

    expect(screen.getByText(/Videos/i)).toBeInTheDocument();
    expect(screen.getByTestId(/PlayCircleFilledOutlinedIcon/i)).toBeInTheDocument();
  })

  test('Should have Groups NavItem', async () => {
    render(
      <NavList />
    )

    expect(screen.getByText(/Groups/i)).toBeInTheDocument();
    expect(screen.getByTestId(/GroupIcon/i)).toBeInTheDocument();
  })

  test('Should have Bookmarks NavItem', async () => {
    render(
      <NavList />
    )

    expect(screen.getByText(/Bookmarks/i)).toBeInTheDocument();
    expect(screen.getByTestId(/BookmarkIcon/i)).toBeInTheDocument();
  })

  test('Should have Questions NavItem', async () => {
    render(
      <NavList />
    )

    expect(screen.getByText(/Questions/i)).toBeInTheDocument();
    expect(screen.getByTestId(/HelpOutlineIcon/i)).toBeInTheDocument();
  })

  test('Should have Jobs NavItem', async () => {
    render(
      <NavList />
    )

    expect(screen.getByText(/Jobs/i)).toBeInTheDocument();
    expect(screen.getByTestId(/WorkOutlineIcon/i)).toBeInTheDocument();
  })

  test('Should have Events NavItem', async () => {
    render(
      <NavList />
    )

    expect(screen.getByText(/Events/i)).toBeInTheDocument();
    expect(screen.getByTestId(/EventIcon/i)).toBeInTheDocument();
  })

  test('Should have Courses NavItem', async () => {
    render(
      <NavList />
    )

    expect(screen.getByText(/Courses/i)).toBeInTheDocument();
    expect(screen.getByTestId(/SchoolIcon/i)).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <NavList />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})