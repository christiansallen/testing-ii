import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("<Display/>", () => {
  it("Strikes should render in the component", () => {
    const { getByText } = render(<Display />);

    expect(getByText(/strikes/i)).toBeInTheDocument();
  });
  it("Balls should render in the component", () => {
    const { getByText } = render(<Display />);
    expect(getByText(/balls/i)).toBeInTheDocument();
  });
  it("Strikes and Balls should always be less than 3 and 4 respectively", () => {
    const { getByTestId } = render(<Display balls={50} strikes={2} />);
    const balls = Number(getByTestId("balls").textContent);
    const strikes = Number(getByTestId("strikes").textContent);
    expect(balls).toBeLessThan(4);
    expect(strikes).toBeLessThan(3);
  });
});
