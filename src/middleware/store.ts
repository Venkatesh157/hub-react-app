import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Hub } from "../entity/hub";

export interface RootState {
  hubs: HubState;
  filters: FiltersState;
}

export interface FiltersState {
  selectedType: string;
  selectedStates: string[];
  selectedStages: string[];
  selectedDisplayName: string;
}

export interface HubState {
  data: Hub[];
}

const initialFiltersState: FiltersState = {
  selectedType: "",
  selectedDisplayName: "",
  selectedStates: [],
  selectedStages: [],
};

const initialState: HubState = {
  data: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFiltersState,
  reducers: {
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },

    setDisplayName: (state, action) => {
      state.selectedDisplayName = action.payload;
    },
    toggleState: (state, action) => {
      const index = state.selectedStates.indexOf(action.payload);
      if (index === -1) {
        state.selectedStates.push(action.payload);
      } else {
        state.selectedStates.splice(index, 1);
      }
    },
    toggleStage: (state, action) => {
      const index = state.selectedStages.indexOf(action.payload);
      if (index === -1) {
        state.selectedStages.push(action.payload);
      } else {
        state.selectedStages.splice(index, 1);
      }
    },
  },
});

const hubSlice = createSlice({
  name: "hubs",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    hubs: hubSlice.reducer,
  },
});

export const { setSelectedType, setDisplayName, toggleState, toggleStage } =
  filtersSlice.actions;

export const { setData } = hubSlice.actions;

export default store;
