import { render, screen } from "@testing-library/react";
import React from "React";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  expect(false).toEqual(true);
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
