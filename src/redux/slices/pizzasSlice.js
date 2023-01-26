import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
	"pizzas/fetchPizzasStatus",
	async (params) => {
		const { category, newSort, order, title, currentPage } = params;

		const { data } = await axios.get(
			`https://63bd5257d660062388a18682.mockapi.io/items?page=${currentPage}&limit=4${category}&title=${title}&sortBy=${newSort}&order=${order}`
		);

		return data;
	}
);

const initialState = {
	pizzas: [],
	status: "loading",
};

const pizzasSlice = createSlice({
	name: "pizzas",
	initialState,
	reducers: {
		setItems(state, action) {
			state.pizzas = action.payload;
		},
	},
	extraReducers: {
		[fetchPizzas.pending]: (state) => {
			state.status = "loading";
			state.pizzas = [];
		},
		[fetchPizzas.fulfilled]: (state, action) => {
			state.status = "success";
			state.pizzas = action.payload;
		},
		[fetchPizzas.rejected]: (state) => {
			state.status = "error";
			state.pizzas = [];
		},
	},
});

export const getPizzasData = (state) => state.pizzas;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
