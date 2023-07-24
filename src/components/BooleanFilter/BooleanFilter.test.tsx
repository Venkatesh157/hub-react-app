import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BooleanFilter from "./BooleanFilter";

const mockOnChange = jest.fn();

const options: string[] = ["Option 1", "Option 2", "Option 3"];
const selectedItems: string[] = ["Option 1"];

describe("Boolean Filter", () => {
  test("renders BooleanFilter component with options", () => {
    render(
      <BooleanFilter
        filterName="Test Filter"
        options={options}
        onChange={mockOnChange}
        selectedItems={selectedItems}
      />
    );

    const filterLabel = screen.getByTestId("filterHeading");
    expect(filterLabel).toBeInTheDocument();

    options.forEach((option) => {
      const checkbox = screen.getByTestId(`Test Filter-${option}`);
      const label = screen.getByText(option); // Get label by text content
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveAttribute("type", "checkbox");
      expect(checkbox).toHaveProperty(
        "checked",
        selectedItems.includes(option)
      );
      expect(label).toBeInTheDocument();
      expect(label).toHaveAttribute("for", `Test Filter-${option}`); // Check the "for" attribute
    });
  });

  test("calls onChange when checkbox is clicked", () => {
    render(
      <BooleanFilter
        filterName="Test Filter"
        options={options}
        onChange={mockOnChange}
        selectedItems={selectedItems}
      />
    );

    const option2Checkbox = screen.getByTestId("Test Filter-Option 2");
    fireEvent.click(option2Checkbox);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("Option 2");
  });
});
