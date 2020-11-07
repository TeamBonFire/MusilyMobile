import { createSlice } from "@reduxjs/toolkit";

interface HomeState {
  group_cnt: number;
}

const initialState: HomeState = {
  group_cnt: 0,
};

const slice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addGroup: (state): void => {
      state.group_cnt + 1;
    },
  },
});

export const { addGroup } = slice.actions;
export default slice.reducer;
