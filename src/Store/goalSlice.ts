import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  name: string;
  completed: boolean;
};

export type Goal = {
  id: string;
  name: string;
  years: number;
  tasks: Task[];
};

interface GoalState {
  goals: Goal[];
}

const initialState: GoalState = {
  goals: [],
};

const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action: PayloadAction<Omit<Goal, "id">>) => {
      const id = Date.now().toString();
      state.goals.push({ id, ...action.payload });
    },
    deleteGoal: (state, action: PayloadAction<string>) => {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload);
    },
    toggleTaskCompletion: (
      state,
      action: PayloadAction<{ goalId: string; taskIndex: number }>
    ) => {
      const { goalId, taskIndex } = action.payload;
      const goal = state.goals.find((g) => g.id === goalId);
      if (goal && goal.tasks[taskIndex]) {
        goal.tasks[taskIndex].completed = !goal.tasks[taskIndex].completed;
      }
    },
  },
});

export const { addGoal, deleteGoal, toggleTaskCompletion } = goalSlice.actions;
export default goalSlice.reducer;
