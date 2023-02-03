import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type PizzaType = {
	id: string;
	title: string;
	pizzaUrl: string;
	price: number;
	sizes: number[];
	types: number[];
	token: number;
	rating: number;
};

enum Status {
	LOADING = "loading",
	SUCCESS = "success",
	ERROR = "error",
}

interface PizzaSlliceState {
	pizzas: PizzaType[];
	status: Status;
}

const initialState: PizzaSlliceState = {
	pizzas: [],
	status: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk<
	PizzaType[],
	Record<string, string>
>("pizzas/fetchPizzasStatus", async (params) => {
	const { category, newSort, order, title, currentPage } = params;

	const { data } = await axios.get<PizzaType[]>(
		`https://63bd5257d660062388a18682.mockapi.io/items?page=${currentPage}&limit=4${category}&title=${title}&sortBy=${newSort}&order=${order}`
	);

	return data;
});

const pizzasSlice = createSlice({
	name: "pizzas",
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<PizzaType[]>) {
			state.pizzas = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPizzas.pending, (state) => {
			state.status = Status.LOADING;
			state.pizzas = [];
		});

		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.status = Status.SUCCESS;
			state.pizzas = action.payload;
		});

		builder.addCase(fetchPizzas.rejected, (state) => {
			state.status = Status.ERROR;
			state.pizzas = [];
		});
	},
});

export const getPizzasData = (state: RootState) => state.pizzas;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
