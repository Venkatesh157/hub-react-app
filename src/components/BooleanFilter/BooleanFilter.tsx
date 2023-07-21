import React from "react";
import { useDispatch } from "react-redux";
import { toggleStage, toggleState } from "../../middleware/store";

interface BooleanFilterProps {
  states: string[];
  stages: string[];
  selectedStates: string[];
  selectedStages: string[];
}

const BooleanFilter: React.FC<BooleanFilterProps> = ({
  states,
  stages,
  selectedStates,
  selectedStages,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <label>Filter by State:</label>
      {states &&
        states.map((state) => (
          <div key={state}>
            <input
              type="checkbox"
              checked={selectedStates.includes(state)}
              onChange={() => dispatch(toggleState(state))}
            />
            <label>{state}</label>
          </div>
        ))}
      <label>Filter by Stage:</label>
      {stages &&
        stages.map((stage) => (
          <div key={stage}>
            <input
              type="checkbox"
              checked={selectedStages.includes(stage)}
              onChange={() => dispatch(toggleStage(stage))}
            />
            <label>{stage}</label>
          </div>
        ))}
    </div>
  );
};

export default BooleanFilter;
