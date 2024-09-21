// store/inventorySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const sortFilterOptionsSlice = createSlice({
  name: 'sortFilterOptions',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = sortFilterOptionsSlice.actions;
export default sortFilterOptionsSlice.reducer;
