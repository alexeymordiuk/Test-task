import { createAsyncThunk } from "@reduxjs/toolkit";
import { Cards } from "./fetch.interface";
import axios from "axios";


export const fetchCards = createAsyncThunk<Cards[], Record<string, string>>(
    "cards/fetchCardsStatus",
    async () => {
      const { data } = await axios.get<Cards[]>(
      `${process.env.REACT_APP_DATA_URL}`
      );
      return data;
    }
  );
