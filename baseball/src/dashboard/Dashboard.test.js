import React from "react";
import { render, fireEvent, getByDisplayValue } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

const mockCallBack = jest.fn();

describe("<Dashboard/>", () => {
  it("should check if strike button was clicked", () => {
    // const { getByTestId } = render(<Dashboard onClick={mockCallBack} />);
    // const strikeButton = getByTestId("strike");
    // fireEvent.click(strikeButton);

    // expect(mockCallBack).toHaveBeenCalled();

    const { getByText } = render(<Dashboard strike={mockCallBack} />);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should check if ball button was clicked", () => {
    const { getByTestId } = render(<Dashboard ball={mockCallBack} />);
    const ballButton = getByTestId("ball");
    fireEvent.click(ballButton);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should check if foul button was clicked", () => {
    const { getByTestId } = render(<Dashboard foul={mockCallBack} />);
    const foulButton = getByTestId("foul");
    fireEvent.click(foulButton);

    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should check if hit button was clicked", () => {
    const { getByTestId } = render(<Dashboard hit={mockCallBack} />);
    const hitButton = getByTestId("hit");
    fireEvent.click(hitButton);

    expect(mockCallBack).toHaveBeenCalled();
  });
});
