import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type SortTypeProperty =
	| "rating"
	| "-rating"
	| "price"
	| "-price"
	| "title";

export type SortType = {
	name: string;
	property: SortTypeProperty;
};

export interface FilterSliceState {
	categoryId: number;
	sort: SortType;
	currentPage: number;
	search: string;
}

const initialState: FilterSliceState = {
	categoryId: 0,
	sort: {
		name: "Популярности",
		property: "rating",
	},
	search: "",
	currentPage: 1,
};

const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setCategoryId(state, actions: PayloadAction<number>) {
			/*
				_ actions хранит в себе объект со свойствами payload и type.
				_ в payload хранится то, что отправили через dispatch(setCategoryId(...)),
				_ а в type: 'filter/setCategoryId"
			*/
			state.categoryId = actions.payload;
		},
		setSort(state, actions: PayloadAction<SortType>) {
			state.sort = actions.payload;
		},
		setSearch(state, actions: PayloadAction<string>) {
			state.search = actions.payload;
		},
		setCurrentPage(state, actions: PayloadAction<number>) {
			state.currentPage = actions.payload;
		},
		setFilters(state, actions: PayloadAction<FilterSliceState>) {
			state.categoryId = Number(actions.payload.categoryId);
			state.currentPage = Number(actions.payload.currentPage);
			state.sort = actions.payload.sort;
		},
	},
});

export const getFilters = (state: RootState) => state.filter;

export const { setCategoryId, setSort, setSearch, setCurrentPage, setFilters } =
	filterSlice.actions;

export default filterSlice.reducer;
