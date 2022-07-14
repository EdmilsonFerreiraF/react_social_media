/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";

import { render, screen } from "components/CustomRender";
import InfoItem from ".";

expect.extend(toHaveNoViolations);

describe("InfoItem", () => {
  test('Should show "info value"', async () => {
    const user: { city: string } = {
      city: "Salvador - BA",
    };

    render(<InfoItem title="City" text={user?.city} />);

    expect(screen.getByTestId(/info value/i)).toBeInTheDocument();
  });

  test('Should show "info name"', async () => {
    const user: { city: string } = {
      city: "Salvador - BA",
    };

    render(<InfoItem title="City" text={user?.city} />);

    expect(screen.getByTestId(/info name/i)).toBeInTheDocument();
  });

  test("Should show info title", async () => {
    const user: { city: string } = {
      city: "Salvador - BA",
    };

    render(<InfoItem title="City" text={user?.city} />);

    expect(screen.getByText(/city/i)).toBeInTheDocument();
  });

  test("Should show info value", async () => {
    const user: { city: string } = {
      city: "Salvador - BA",
    };

    render(<InfoItem title="City" text={user?.city} />);

    expect(screen.getByText(/salvador - ba/i)).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const user: { city: string } = {
      city: "Salvador - BA",
    };
    const { container } = render(<InfoItem title="City" text={user?.city} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
