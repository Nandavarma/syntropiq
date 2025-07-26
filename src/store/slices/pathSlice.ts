import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Path } from "@/lib/data";
interface PathState {
  paths: Path[];
}
const initialState: PathState = {
  paths: [],
};
const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    setPath: (state, action: PayloadAction<Path[]>) => {
      state.paths = action.payload;
    },
  },
});

export const { setPath } = pathSlice.actions;
export default pathSlice.reducer;
