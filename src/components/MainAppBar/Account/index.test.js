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
import Account from '.';

expect.extend(toHaveNoViolations)

describe('Account', () => {
  test('Should show fixed menu part on mobile', async () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 150,
    });

    window.dispatchEvent(new Event('resize'));
    render(
      <Account />
    )
    expect(window.innerWidth).toBe(150);
    expect(screen.getAllByTestId(/accountmenubox/i)).toHaveLength(2)
  })

  test('Should show mobile menu part on mobile', async () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 150,
    });

    window.dispatchEvent(new Event('resize'));
    render(
      <Account />
    )
    expect(window.innerWidth).toBe(150);
    
    expect(screen.getByTestId(/accountmobilemenu/i)).toBeInTheDocument();
  })

  test('Should show fixed menu part on desktop', async () => {
    render(
      <Account />
    )

    expect(screen.getAllByTestId(/accountmenubox/i)).toHaveLength(2)
  })

  test('Should show desktop menu on desktop', async () => {
    render(
      <Account />
    )

    expect(screen.getByTestId(/accountdesktopmenu/i)).toBeInTheDocument();
  })

  test('Should be an acessible component', async () => {
    const { container } = render(
      <div role="menu">

        <Account />
        </div>
    )

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
})