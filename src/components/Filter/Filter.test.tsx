import React from "react";
import { render, screen } from "@testing-library/react";
import Filter from "./Filter";

describe("Filter", () => {
  const mockFilters = {
    selectedDisplayName: "",
    selectedType: "",
    selectedStates: [],
    selectedStages: [],
  };
  const mockUniqueTypes = ["Type1", "Type2"];
  const mockUniqueStates = ["Active", "Inactive"];
  const mockUniqueStages = ["Initial", "Final"];

  test("renders Filter component with correct props", () => {
    render(
      <Filter
        filters={mockFilters}
        data={[]}
        uniqueTypes={mockUniqueTypes}
        uniqueStates={mockUniqueStates}
        uniqueStages={mockUniqueStages}
        handleStateChange={jest.fn()}
        handleStageChange={jest.fn()}
        handleInputChange={jest.fn()}
        handleDropdownChange={jest.fn()}
      />
    );

    expect(screen.getByTestId("filter-component")).toBeInTheDocument();

    const filterComponent = screen.getByTestId("filter-component");
    expect(filterComponent.getAttribute("data-filters")).toEqual(
      JSON.stringify(mockFilters)
    );
  });
});
