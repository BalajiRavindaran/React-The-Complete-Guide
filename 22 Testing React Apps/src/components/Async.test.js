import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("should ", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "t1", title: "Test" }],
    });
    render(<Async />);

    const listElements = await screen.findAllByRole("listitem");
    expect(listElements).not.toHaveLength(0);
  });
});
