// src/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sortFilterOptionsReducer from "@/redux/slices/sortFilterOptionsSlice";
import filtersPanelReducer from "@/redux/slices/filtersPanelSlice";

const rootReducer = combineReducers({
  sortFilterOptions: sortFilterOptionsReducer,
  filters: filtersPanelReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
