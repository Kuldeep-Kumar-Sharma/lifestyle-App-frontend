import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event } from "@model/Event";

interface EventState {
  events: Event[];
}

const initialState: EventState = {
  events: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.unshift(action.payload);
    },
    // Add more reducers as needed
  },
});

export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer;
