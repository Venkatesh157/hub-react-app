import React from "react";
import { Hub } from "../../entity/hub";
import styles from "./Card.module.css";

import ProgressBar from "@ramonak/react-progress-bar";
import Chip from "../Chip/Chip";

interface CardProps {
  hub: Hub;
}

function Card({ hub }: CardProps) {
  const {
    logo,
    displayName,
    portfolioAssignedQuantityPercentage,
    unassignedQuantityPercentage,
    cardDescription,
    slug,
    category,
    stage,
    state,
  } = hub;

  if (!hub) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {logo?.directLink && (
          <img
            src={hub.logo.directLink}
            alt={hub.logo.fileName}
            width={50}
            height={50}
          />
        )}
        <h2>{displayName}</h2>
        {category === "PORTFOLIO" && <Chip value={category} />}
      </div>
      <p className={styles.description}>{cardDescription}</p>
      {portfolioAssignedQuantityPercentage && (
        <>
          <p>Assigned Percentage</p>
          <ProgressBar completed={portfolioAssignedQuantityPercentage} />
        </>
      )}
      <p>UnAssigned Percentage</p>
      <ProgressBar completed={unassignedQuantityPercentage} />

      <h5>Others</h5>
      <div className={styles.others}>
        <Chip value={stage} />
        <Chip value={state} />
      </div>

      <button
        onClick={() => {
          window.location.href = ` https://test.cleanhub.com/hub/${slug}`;
        }}
      >
        Read More
      </button>
    </div>
  );
}

export default Card;
