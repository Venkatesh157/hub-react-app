import React from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  options: string[];
  selectedType: string;
  onChange: any;
}

function Dropdown({ options, selectedType, onChange }: DropdownProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="displayNameFilter">Select by Collection Company:</label>
      <select
        value={selectedType}
        onChange={(e) => onChange(e)}
        data-testid="typeFilter-select"
      >
        <option value="">All</option>
        {options &&
          options.map((item, index) => {
            return (
              <>
                {item && (
                  <option
                    value={item}
                    key={`${item}-${index}`}
                    data-testid={`typeFilter-${item}`}
                  >
                    {item}
                  </option>
                )}
              </>
            );
          })}
      </select>
    </div>
  );
}

export default Dropdown;
