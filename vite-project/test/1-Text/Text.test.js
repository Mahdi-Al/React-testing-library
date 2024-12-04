/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import Text from "./Text";

describe("Text Component", () => {
  test('should renders "Welcome To APS"', () => {
    render(<Text />);

    const pElement = screen.getByText(/Welcome To APS/i);
    expect(pElement).toBeInTheDocument();
  });

  test("renders the heading with the provided `headingText` prop", () => {
    const headingText = "Custom Heading";

    render(<Text headingText={headingText} />);
    const headingElement = screen.getByRole("heading", { name: headingText });
    expect(headingElement).toBeInTheDocument();
  });
});
