import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  setDisplayName,
  setSelectedType,
  toggleStage,
  toggleState,
} from "../../middleware/store";
import Filter from "./Filter";
import { getUniqueItems } from "../../utils/helper";

function FilterContainer() {
  const filters = useSelector((state: RootState) => state.filters);
  const data = useSelector((state: RootState) => state.hubs.data);
  const dispatch = useDispatch();

  const uniqueTypes = data && getUniqueItems(data, "type");
  const uniqueStates = data && getUniqueItems(data, "state");
  const uniqueStages = data && getUniqueItems(data, "stage");

  const handleStateChange = (option: any) => {
    dispatch(toggleState(option));
  };

  const handleStageChange = (option: any) => {
    dispatch(toggleStage(option));
  };

  const handleInputChange = (e: any) => {
    dispatch(setDisplayName(e.target.value));
  };

  const handleDropdownChange = (e: any) => {
    dispatch(setSelectedType(e.target.value));
  };
  return (
    <div>
      <Filter
        filters={filters}
        data={data}
        uniqueTypes={uniqueTypes}
        uniqueStates={uniqueStates}
        uniqueStages={uniqueStages}
        handleInputChange={handleInputChange}
        handleDropdownChange={handleDropdownChange}
        handleStateChange={handleStateChange}
        handleStageChange={handleStageChange}
      />
    </div>
  );
}

export default FilterContainer;
