import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  suggestions: [];
}

const initialState: InitialState = {
  suggestions: [],
};

export const organizationsReducer = createSlice({
  name: "organizations",
  initialState,
  reducers: {
    organizations: (state, { payload }) => {
      state.suggestions = payload;
    },
  },
});

export const { organizations } = organizationsReducer.actions;

export default organizationsReducer.reducer;
