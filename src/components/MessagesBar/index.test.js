/**
 * @jest-environment jsdom
 */
import * as React from "react"
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe';

import {
  render,
  screen,
} from "components/customRender";
import MessagesBar from ".";

expect.extend(toHaveNoViolations)

describe('MessagesBar', () => {
  test('Should MessagesBar on for Home page', async () => {
    render(
      <MessagesBar />
    )

    expect(screen.getByTestId(/homeMessagesBar/i)).toBeInTheDocument()
  })

  test('Should MessagesBar on for Profile page', async () => {
    const user = {
      _id: "6198494ec6ece6cbe6cdae4e",
      username: "user_username33",
      email: "user_email@email.com",
      profilePicture: "2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg",
      coverPicture: "",
      isAdmin: false,
      followers: [],
      followings: []
    }

    render(
      <MessagesBar user={user} />
    )

    expect(screen.getByTestId(/profileMessagesBar/i)).toBeInTheDocument()
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <MessagesBar />
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})