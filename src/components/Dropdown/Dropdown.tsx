import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedType } from "../../middleware/store";

interface DropdownProps {
  options: string[];
  selectedType: string;
}

function Dropdown({ options, selectedType }: DropdownProps) {
  const dispatch = useDispatch();

  return (
    <select
      id="typeFilter"
      value={selectedType}
      onChange={(e) => dispatch(setSelectedType(e.target.value))}
    >
      <option value="">All</option>
      {options &&
        options.map((item) => {
          return (
            <>
              {item && (
                <option value={item} key={item}>
                  {item}
                </option>
              )}
            </>
          );
        })}
    </select>
  );
}

export default Dropdown;
