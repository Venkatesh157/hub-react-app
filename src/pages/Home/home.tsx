import React, { useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setData } from "../../middleware/store";
import FilterContainer from "../../components/Filter/FilterContainer";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.hubs.data);
  const filter = useSelector((state: RootState) => state.filters);

  async function getData() {
    try {
      const response = await axios.get("/api/public/hubs");
      dispatch(setData(response.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const getFilteredData = () => {
    if (!data) return [];

    return data.filter((item) => {
      const {
        selectedType,
        selectedDisplayName,
        selectedStates,
        selectedStages,
      } = filter;
      const typeMatch = !selectedType || item.type === selectedType;
      const displayNameMatch =
        !selectedDisplayName ||
        item.displayName
          .toLowerCase()
          .includes(selectedDisplayName.toLowerCase());
      const stateMatch =
        selectedStates.length === 0 || selectedStates.includes(item.state);
      const stageMatch =
        selectedStages.length === 0 || selectedStages.includes(item.stage);
      return typeMatch && displayNameMatch && stateMatch && stageMatch;
    });
  };

  const filteredData = getFilteredData();

  return (
    <div className={styles.container}>
      <h1>Cleanhub Hubs</h1>
      <FilterContainer />
      {data === null ? (
        <div className={styles.emptyPage}>
          <h1>Loading...</h1>
        </div>
      ) : filteredData.length === 0 ? (
        <div className={styles.emptyPage}>
          <h1>No hubs yet!</h1>
        </div>
      ) : (
        <div className={styles.card}>
          {filteredData.map((item) => (
            <div key={item.uuid}>
              <Card hub={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
