/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BooleanFilter from "./BooleanFilter";
import { getHubStage, getHubState } from "../../utils/helper";

describe("BooleanFilter component", () => {
  const filterName = "State";
  const options = ["Option 1", "Option 2", "Option 3"];
  const selectedItems = ["Option 2"]; // Assuming Option 2 is selected initially

  const handleChange = jest.fn(); // Mock the onChange function

  beforeEach(() => {
    render(
      <BooleanFilter
        filterName={filterName}
        options={options}
        onChange={handleChange}
        selectedItems={selectedItems}
      />
    );
  });

  it("renders the correct filter heading", () => {
    const filterHeadingElement = screen.getByTestId("filterHeading");
    expect(filterHeadingElement).toHaveTextContent(`Filter by ${filterName}:`);
  });

  it("renders the correct number of options", () => {
    const optionElements = screen.queryAllByTestId((id) =>
      id.startsWith("State-Option")
    );
    expect(optionElements).toHaveLength(options.length);
  });

  it("calls onChange when an option is selected", () => {
    const optionCheckbox = screen.getByTestId("State-Option 1");
    fireEvent.click(optionCheckbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("Option 1");
  });

  it("renders the correct checked state for options", () => {
    const optionCheckbox = screen.getByTestId("State-Option 2");
    expect(optionCheckbox).toBeChecked();
  });
});
