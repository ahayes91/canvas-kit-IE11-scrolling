import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Canvas Kit modal as prop on Modal.Target:", () => {
  it("shows no warning if Canvas Kit buttons are used directly", async () => {
    render(<App withWrapper={false} />);
    expect(screen.getByText("Hello CodeSandbox")).toBeInTheDocument();
    expect(screen.queryByText("Show modal")).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId("buttonId"));
    const modalBody = await screen.findByText("Show modal");
    expect(modalBody).toBeInTheDocument();
  });
  it("shows a warning if Canvas Kit buttons are used inside a wrapper", async () => {
    render(<App withWrapper />);
    expect(screen.getByText("Hello CodeSandbox")).toBeInTheDocument();
    expect(screen.queryByText("Show modal")).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId("buttonId"));
    const modalBody = await screen.findByText("Show modal");
    expect(modalBody).toBeInTheDocument();
  });
});
