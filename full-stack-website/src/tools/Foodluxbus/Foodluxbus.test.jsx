import React from "react";
import "@testing-library/jest-dom";
import { Foodluxbus } from "./Foodluxbus";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("creating test for foodluxbus tool", () => {
  test("testing if foodluxbus component renders correctly", () => {
    const { getByTestId } = render(<Foodluxbus />, { wrapper: MemoryRouter });
    const foodLuxBus = getByTestId("Foodluxbus");
    expect(foodLuxBus).toBeDefined();
    expect(foodLuxBus).toBeInTheDocument();
  });
});
