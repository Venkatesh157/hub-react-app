import React, { ChangeEvent } from "react";
import styles from "./Search.module.css";

interface SearchrProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Search({ value, onChange }: SearchrProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="displayNameFilter">Display Name:</label>
      <input
        type="text"
        id="displayNameFilter"
        value={value}
        onChange={(e) => onChange(e)}
        data-testid="displayNameFilter-input"
      />
    </div>
  );
}

export default Search;
