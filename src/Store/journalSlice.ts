import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JournalEntry } from "@model/JournalEntry";

interface JournalState {
  entries: JournalEntry[];
}

const initialState: JournalState = {
  entries: [],
};

const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<JournalEntry>) => {
      state.entries.unshift(action.payload);
    },
    // Add more reducers as needed
  },
});

export const { addEntry } = journalSlice.actions;
export default journalSlice.reducer;
