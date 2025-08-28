import { configureStore } from "@reduxjs/toolkit";
import journalReducer from "./journalSlice";
import eventReducer from "./eventSlice";
import planReducer from "./eventSlice";
import goalReducer from "./goalSlice";

const store = configureStore({
  reducer: {
    journal: journalReducer,
    event: eventReducer,
    plan: planReducer,
    goals: goalReducer,
    // Add more slices here as your app grows
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;