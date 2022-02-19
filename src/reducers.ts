import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bid, Pairs } from "./types";

const initialStateQuery: Bid[] = [];
const initialStatePairs: Pairs = {};

export const bidSlice = createSlice({
  name: "bid",
  initialState: initialStateQuery,
  reducers: {
    addBid: {
      reducer: (state, action: PayloadAction<Bid>) => {
        state.push(action.payload);
        return state;
      },
      prepare: (value) => ({
        payload: { ...value },
      }),
    },
  },
});

export const pairSlice = createSlice({
  name: "pair",
  initialState: initialStatePairs,
  reducers: {
    updatePairs: {
      reducer: (state, action: PayloadAction<Pairs>) => ({
        ...state,
        ...action.payload,
      }),
      prepare: (value) => ({
        payload: { ...value },
      }),
    },
    updateCurrentPair: {
      reducer: (state, action: PayloadAction<Pairs>) => ({
        ...state,
        ...action.payload,
      }),
      prepare: (value) => ({
        payload: { ...value },
      }),
    },
  },
});

const { actions } = bidSlice;
export const { addBid } = actions;

const pairActions = pairSlice.actions;
export const { updatePairs, updateCurrentPair } = pairActions;
