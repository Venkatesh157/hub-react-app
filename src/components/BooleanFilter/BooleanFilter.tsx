import React from "react";
import { getHubStage, getHubState } from "../../utils/helper";

interface BooleanFilterProps {
  filterName: string;
  options: string[];
  onChange: (option: string) => void;
  selectedItems: string[];
}

function BooleanFilter({
  filterName,
  options,
  onChange,
  selectedItems,
}: BooleanFilterProps) {
  return (
    <div role="group" aria-labelledby="filterHeading">
      <span data-testid="filterHeading">Filter by {filterName}:</span>
      {options &&
        options.map((option) => (
          <div key={option}>
            <input
              type="checkbox"
              checked={selectedItems.includes(option)}
              onChange={() => onChange(option)}
              data-testid={`${filterName}-${option}`}
            />
            <label
              htmlFor={`${filterName}-${option}`}
              data-testid="filter-label"
            >
              {filterName === "State"
                ? getHubState(option)
                : getHubStage(option)}
            </label>
          </div>
        ))}
    </div>
  );
}

export default BooleanFilter;
