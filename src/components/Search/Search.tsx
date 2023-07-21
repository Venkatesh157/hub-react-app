import React from "react";
import { setDisplayName } from "../../middleware/store";
import { useDispatch } from "react-redux";

interface SearchrProps {
  value: string;
}

function Search({ value }: SearchrProps) {
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="displayNameFilter">Display Name:</label>
      <input
        type="text"
        id="displayNameFilter"
        value={value}
        onChange={(e) => dispatch(setDisplayName(e.target.value))}
      />
    </div>
  );
}

export default Search;
