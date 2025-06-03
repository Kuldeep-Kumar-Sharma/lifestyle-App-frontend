import { configureStore } from "@reduxjs/toolkit";
import journalReducer from "./journalSlice";
import eventReducer from "./eventSlice";

const store = configureStore({
  reducer: {
    journal: journalReducer,
    event: eventReducer,
    // Add more slices here as your app grows
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;