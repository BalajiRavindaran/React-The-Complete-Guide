import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World! as text ", () => {
    // Arrange
    render(<Greeting />);

    //Act
    // ... Nothing

    //Assert
    const textElement = screen.getByText("Hello World", { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  test("renders unchanged paragraph text if the button was NOT clicked", () => {
    render(<Greeting />);
    const unchangedText = screen.getByText("It is so nice to see you", {
      exact: false,
    });
    expect(unchangedText).toBeInTheDocument();
  });

  test("renders changed paragraph text if the button was clicked", () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const changedText = screen.getByText("Text changed", { exact: false });
    expect(changedText).toBeInTheDocument();
  });

  test("should not render unchanged paragraph text if the button is clicked", () => {
    render(<Greeting />);
    const button = screen.getByRole("button");
    userEvent.click(button);

    const unchangedText = screen.queryByText("It is so nice to see you", {
      exact: false,
    });
    expect(unchangedText).toBeNull();
  });
});
