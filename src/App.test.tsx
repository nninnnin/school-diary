import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app header", () => {
  render(<App />);
  const linkElement = screen.getByText("알림장", { exact: true });
  expect(linkElement).toBeInTheDocument();
});
