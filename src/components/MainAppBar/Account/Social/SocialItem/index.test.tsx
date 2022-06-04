/**
 * @jest-environment jsdom
 */

import * as React from "react"
import '@testing-library/jest-dom'
import { Person } from '@mui/icons-material';
import { axe, toHaveNoViolations } from 'jest-axe';

import {
  render,
  screen,
} from "components/CustomRender";
import SocialItem from '.';

expect.extend(toHaveNoViolations)

describe('SocialItem', () => {
  test('Should show person icon on profile button', async () => {
    render(
      <SocialItem badge={1}>
        <Person />
      </SocialItem>
    )

    expect(screen.getByTestId(/PersonIcon/i)).toBeInTheDocument();
  })

  test('Should show badge on profile button', async () => {
    render(
      <SocialItem badge={1}>
        <Person />
      </SocialItem>
    )

    expect(screen.getByText("1")).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <div role="menu" id="primary-search-account-menu">
        <SocialItem badge={1}>
          <Person />
        </SocialItem>
      </div>

    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})