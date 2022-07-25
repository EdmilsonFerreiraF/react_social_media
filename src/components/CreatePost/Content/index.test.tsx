/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";

import { render, screen } from "components/CustomRender";
import Content from ".";

expect.extend(toHaveNoViolations);

describe("Content", () => {
  test("Should have user profile image", async () => {
    const inputChangeHandler = jest.fn();

    render(<Content inputChangeHandler={inputChangeHandler} />);

    expect(screen.getByAltText(/CreatePost user profile/i)).toBeInTheDocument();
  });

  test("Should have description field", async () => {
    const inputChangeHandler = jest.fn();

    render(<Content inputChangeHandler={inputChangeHandler} />);

    expect(
      screen.getByPlaceholderText(/What's in your mind/i)
    ).toBeInTheDocument();
  });

  test("Should be an acessible component", async () => {
    const inputChangeHandler = jest.fn();

    const { container } = render(
      <Content inputChangeHandler={inputChangeHandler} />
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
