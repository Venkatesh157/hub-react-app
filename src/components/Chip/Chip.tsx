import React from "react";
import styles from "./Chip.module.css";

interface ChipProps {
  value: string;
}

function Chip({ value }: ChipProps) {
  return <div className={styles.container}>{value}</div>;
}

export default Chip;
