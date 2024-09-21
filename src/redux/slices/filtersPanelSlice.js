import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFilters: [],   
  selectedMakes: {},    
  selectedModels: {},    
  selectedTrims: {},
  selectedBodyStyles: [],
  matches: 359,
};

const filtersPanelSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      if (!state.selectedFilters.includes(action.payload)) {
        state.selectedFilters.push(action.payload);
      }
    },
    removeFilter: (state, action) => {
      state.selectedFilters = state.selectedFilters.filter(
        (f) => f !== action.payload
      );
    },
    addMake: (state, action) => {
      state.selectedMakes[action.payload.filters] = action.payload.make;
    },
    removeMake: (state, action) => {
      delete state.selectedMakes[action.payload.filters];
    },
    addModel: (state, action) => {
      state.selectedModels[action.payload.make] = action.payload.models;
    },
    removeModel: (state, action) => {
      delete state.selectedModels[action.payload.make];
    },
    addTrim: (state, action) => {
      state.selectedTrims[action.payload.model] = action.payload.trims;
    },
    removeTrim: (state, action) => {
      delete state.selectedTrims[action.payload.model];
    },
    addBodyStyle: (state, action) => {
      if (!state.selectedBodyStyles.includes(action.payload)) {
        state.selectedBodyStyles.push(action.payload);
      }
    },
    removeBodyStyle: (state, action) => { 
      state.selectedBodyStyles = state.selectedBodyStyles.filter(
        (style) => style !== action.payload
      );
    },
    clearFilters: (state) => {
      state.selectedFilters = [];
      state.selectedMakes = {};
      state.selectedModels = {};
      state.selectedTrims = {};
      state.selectedBodyStyles = [];
    },
    updateMatches: (state, action) => {
      state.matches = action.payload;
    },
  },
});

export const {
  addFilter,
  removeFilter,
  addMake,
  removeMake,
  addModel,
  removeModel,
  addTrim,
  removeTrim,
  addBodyStyle,
  removeBodyStyle,
  clearFilters,
  updateMatches,
} = filtersPanelSlice.actions;

export default filtersPanelSlice.reducer;
