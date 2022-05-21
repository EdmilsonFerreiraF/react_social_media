/**
 * @jest-environment jsdom
 */

import * as React from "react"

import {
  render,
  screen,
} from "components/customRender";
import '@testing-library/jest-dom'
import TypeItem from '.';

describe('Header', () => {
  test('Should show error message when email is invalid', async () => {
    const onChangeHandler = jest.fn();

    render(
      <TypeItem
        className="typeItemInput"
        title="Photo or Video"
        inputType="file"
        inputAccept="image/*"
        onChange={onChangeHandler}
      />
    )

    expect(screen.getByText(/Photo or Video/i)).toBeInTheDocument();
  })
})