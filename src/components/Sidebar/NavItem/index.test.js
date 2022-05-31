/**
 * @jest-environment jsdom
 */

import * as React from "react"
import { Feed } from "@mui/icons-material";
import { axe, toHaveNoViolations } from 'jest-axe'
import '@testing-library/jest-dom'

import {
  render,
  screen
} from "components/customRender";
import NavItem from '.';

expect.extend(toHaveNoViolations)

describe('NavItem', () => {
  test('Should have a title', async () => {
    render(
      <ul>
        <NavItem
          className="typeItemInput"
          title="Feed"
        />
      </ul>
    )

    expect(screen.getByText(/Feed/i)).toBeInTheDocument();
  })

  test('Should have an icon', async () => {
    render(
      <ul>
        <NavItem
          className="typeItemInput"
          title="Feed"
        >
          <Feed />
        </NavItem >
      </ul>
    )

    expect(screen.getByTestId(/FeedIcon/i)).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <ul>
        <NavItem
          className="typeItemInput"
          title="Feed"
        >
          <Feed />
        </NavItem >
      </ul>
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})