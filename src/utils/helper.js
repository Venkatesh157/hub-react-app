export function getUniqueItems(data, key) {
  if (!data) return [];

  return data.reduce((uniqueItems, item) => {
    if (!uniqueItems.includes(item[key])) {
      uniqueItems.push(item[key]);
    }
    return uniqueItems;
  }, []);
}

export const getHubStage = (stage) => {
  if (stage === "FULLY_ONBOARDED") {
    return "Fully Onboarded";
  } else if (stage === "PILOT") {
    return "Pilot";
  } else {
    return "";
  }
};

export const getHubState = (state) => {
  if (state === "ACTIVE") {
    return "Active";
  } else if (state === "DEMO") {
    return "Demo";
  } else {
    return "";
  }
};
