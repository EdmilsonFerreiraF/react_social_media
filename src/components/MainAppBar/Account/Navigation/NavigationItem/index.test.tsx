/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { render, screen } from "components/CustomRender";
import NavigationItem from ".";

expect.extend(toHaveNoViolations);

describe("NavigationItem", () => {
  test("Should show title text", async () => {
    render(<NavigationItem dataTestId="homepageLink" title="Homepage" />);

    expect(screen.getByTestId(/homepageLink/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const { container } = render(
      <NavigationItem dataTestId="homepageLink" title="Homepage" />
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
