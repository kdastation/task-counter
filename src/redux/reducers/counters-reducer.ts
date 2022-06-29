import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ICounter } from "../../types/models/counter";
import { CounterService } from "../../services/counter-service";

interface initialStateCounters {
  counters: ICounter[];
  totalCountCounters: number;
}

const initialStateCounters: initialStateCounters = {
  counters: [],
  totalCountCounters: 0,
};

export const countersReducer = createSlice({
  initialState: initialStateCounters,
  name: "counters",
  reducers: {
    addCounter(state) {
      state.totalCountCounters += 1;
      const newCounter = CounterService.createCounter(
        state.counters,
        state.totalCountCounters
      );
      state.counters.push(newCounter);
    },
    increment(state, action: PayloadAction<number>) {
      const idCounter = action.payload;
      state.counters = CounterService.incrementOrDecrementCountCounter(
        state.counters,
        idCounter,
        "increment"
      );
    },
    decrement(state, action: PayloadAction<number>) {
      const idCounter = action.payload;
      state.counters = CounterService.incrementOrDecrementCountCounter(
        state.counters,
        idCounter,
        "decrement"
      );
    },
    removeCounter(state, action: PayloadAction<number>) {
      const idCounter = action.payload;
      state.counters = CounterService.removeCounter(state.counters, idCounter);
      state.totalCountCounters -= 1;
    },
  },
});

export const { addCounter, increment, decrement, removeCounter } =
  countersReducer.actions;
