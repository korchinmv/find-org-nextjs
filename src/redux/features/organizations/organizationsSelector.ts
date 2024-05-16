import { RootState } from "@/redux/store";

export const organizationsSelector = (state: RootState) =>
  state.organizationsReducer;
