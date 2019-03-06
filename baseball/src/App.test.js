import React from "react";
import { render } from "react-testing-library";

import App from "./App";

describe("Test", () => {
  it("should run by default", () => {
    const nine = 9;
    expect(nine).toBe(9);
  });
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
