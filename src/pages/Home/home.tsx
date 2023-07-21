import React, { useEffect } from "react";
import axios from "axios";
import { Hub } from "../../entity/hub";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setData } from "../../middleware/store";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.hubs.data);
  const filter = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    getData();
  });

  async function getData() {
    try {
      const response = await axios.get("/api/public/hubs");
      dispatch(setData(response.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const filteredData = data?.filter((item) => {
    if (filter.selectedType && item.type !== filter.selectedType) return false;

    if (
      filter.selectedDisplayName &&
      !item.displayName
        .toLowerCase()
        .includes(filter.selectedDisplayName.toLowerCase())
    )
      return false;
    if (
      filter.selectedStates.length > 0 &&
      !filter.selectedStates.includes(item.state)
    )
      return false;
    if (
      filter.selectedStages.length > 0 &&
      !filter.selectedStages.includes(item.stage)
    )
      return false;

    return true;
  });

  return (
    <div>
      <h1> Cleanhub Hubs</h1>
      <Filter />

      <div className={styles.card}>
        {filteredData &&
          filteredData.map((item: Hub) => (
            <div key={item.uuid}>
              <Card hub={item} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
