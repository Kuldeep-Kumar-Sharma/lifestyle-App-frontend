import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DayPlan } from "@model/DayPlan";

interface PlanState {
  plans: DayPlan[];
}

const initialState: PlanState = {
  plans: [],
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    addDayPlan: (state, action: PayloadAction<DayPlan>) => {
      state.plans.unshift(action.payload);
    },
    // You can add more reducers like updateDayPlan, removeDayPlan, etc.
  },
});

export const { addDayPlan } = planSlice.actions;
export default planSlice.reducer;
