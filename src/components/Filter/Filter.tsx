import { ChangeEvent } from "react";
import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";

import styles from "./Filter.module.css";
import BooleanFilter from "../BooleanFilter/BooleanFilter";
import { RootState } from "../../middleware/store";

interface FilterProps {
  filters: RootState["filters"];
  data: RootState["hubs"]["data"];
  uniqueTypes: string[] | null;
  uniqueStates: string[] | null;
  uniqueStages: string[] | null;
  handleStateChange: (option: string) => void;
  handleStageChange: (option: string) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDropdownChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Filter({
  filters,
  uniqueTypes,
  uniqueStates,
  uniqueStages,
  handleInputChange,
  handleDropdownChange,
  handleStateChange,
  handleStageChange,
}: FilterProps) {
  return (
    <>
      <h5>Filters:</h5>
      <div
        className={styles.container}
        data-testid="filter-component"
        data-filters={JSON.stringify(filters)}
      >
        <Search
          value={filters.selectedDisplayName}
          onChange={handleInputChange}
        />
        {uniqueTypes && (
          <Dropdown
            options={uniqueTypes}
            selectedType={filters.selectedType}
            onChange={handleDropdownChange}
          />
        )}
        <div className={styles.booleanFilterContainer}>
          {uniqueStates && (
            <BooleanFilter
              selectedItems={filters.selectedStates}
              options={uniqueStates}
              onChange={handleStateChange}
              filterName="State"
            />
          )}
          {uniqueStages && (
            <BooleanFilter
              selectedItems={filters.selectedStages}
              options={uniqueStages}
              onChange={handleStageChange}
              filterName="Stage"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Filter;
