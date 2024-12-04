/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import ListOfLi from "./ListOfLi";
const names = ["john", "sam", "jasem", "tom"];
test("renders the correct number of list items", () => {
  render(<ListOfLi usernames={names} />);
  const listItems = screen.getAllByRole("listitem");
  console.log(listItems.length);
  console.log(names.length);
  expect(listItems.length).toBe(names.length);
});
