import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncreament = createAsyncThunk("counter/fetchByIdStatus", async (value) => {
    const response = await axios.put("/counter/increament", { value });
    return response.data;
});
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increament: (state) => {
            state.value += 1;
        },
        decreament: (state) => {
            state.value -= 1;
        },
        increamentByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: {
        [fetchIncreament.fulfilled]: (state, action) => {
            state.value = action.payload.value;
        },
    },
});

export const { increament, decreament, increamentByAmount } = counterSlice.actions;

export default counterSlice.reducer;
