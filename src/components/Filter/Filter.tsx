import React from "react";
import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";
import { RootState } from "../../middleware/store";
import { useSelector } from "react-redux";
import BooleanFilter from "../BooleanFilter/BooleanFilter";
import { Hub } from "../../entity/hub";

function Filter() {
  const filters = useSelector((state: RootState) => state.filters);
  const data = useSelector((state: RootState) => state.hubs.data);

  const type =
    data &&
    data.reduce((types: string[], item: Hub) => {
      if (!types.includes(item.type)) {
        types.push(item.type);
      }
      return types;
    }, [] as string[]);

  const uniqueStates =
    data &&
    data.reduce((states: string[], item: Hub) => {
      if (!states.includes(item.state)) {
        states.push(item.state);
      }
      return states;
    }, [] as string[]);

  const uniqueStages =
    data &&
    data.reduce((stages: string[], item: Hub) => {
      if (!stages.includes(item.stage)) {
        stages.push(item.stage);
      }
      return stages;
    }, [] as string[]);

  return (
    <div>
      <h5>Filters:</h5>
      <Search
        value={filters.selectedDisplayName}
        // onChange={(value) => dispatch(setDisplayName(value))}
      />

      <Dropdown options={type} selectedType={filters.selectedType} />
      <BooleanFilter
        states={uniqueStates}
        stages={uniqueStages}
        selectedStates={filters.selectedStates}
        selectedStages={filters.selectedStages}
      />
    </div>
  );
}

export default Filter;
