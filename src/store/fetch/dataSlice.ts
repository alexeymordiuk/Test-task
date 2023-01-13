import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Cards } from "./fetch.interface";
import { fetchCards } from "./fetchData";


  export enum Status {
    LOADING = 'loading',
    SUCCES = 'success',
    ERROR = 'error'
  }

  interface DataSliceState {
    items: Cards[];
    status: Status;
  }

  const initialState: DataSliceState = {
    items: [],
    status: Status.LOADING,
  };

  export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Cards[]>) {
        state.items = action.payload;
      },
    },
    extraReducers : (builder) => {
      builder.addCase(fetchCards.pending,(state, action) => {
        state.status = Status.LOADING;
        state.items = [];
      });
      builder.addCase(fetchCards.fulfilled,(state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCES;
      });
      builder.addCase(fetchCards.rejected,(state, action) => {
        state.status = Status.ERROR;
        state.items = [];
      });
    }
  });

export const selectCardsData = (state: RootState) => state.data;

export const { setItems } = dataSlice.actions;

export default dataSlice.reducer;
