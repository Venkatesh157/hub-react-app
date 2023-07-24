import React from "react";
import { Hub } from "../../entity/hub";
import styles from "./Card.module.css";

import ProgressBar from "@ramonak/react-progress-bar";
import Chip from "../Chip/Chip";
import { getHubStage, getHubState } from "../../utils/helper";

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

  const redirectToHub = () => {
    window.location.href = `https://test.cleanhub.com/hub/${slug}`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {logo?.directLink && (
          <img
            src={hub.logo.directLink}
            alt={hub.logo.fileName}
            width={50}
            height={50}
            className={styles.logo}
          />
        )}
        <h2>{displayName}</h2>
        {category === "PORTFOLIO" && <Chip value={category} />}
      </div>
      <p className={styles.description}>{cardDescription}</p>
      {portfolioAssignedQuantityPercentage && (
        <div className={styles.progressBarWrapper}>
          <p className={styles.progressBarLabel}>Assigned Percentage</p>
          <ProgressBar completed={portfolioAssignedQuantityPercentage} />
        </div>
      )}
      <div className={styles.progressBarWrapper}>
        <p className={styles.progressBarLabel}>UnAssigned Percentage</p>
        <ProgressBar completed={unassignedQuantityPercentage} />
      </div>

      <p>Others:</p>
      <div className={styles.others}>
        <Chip value={getHubStage(stage)} />
        <Chip value={getHubState(state)} />
      </div>

      <button onClick={redirectToHub} className={styles.readMoreButton}>
        Read More
      </button>
    </div>
  );
}

export default Card;
