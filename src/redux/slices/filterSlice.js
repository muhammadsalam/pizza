import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
		setCategoryId(state, actions) {
			/*
				_ actions хранит в себе объект со свойствами payload и type.
				_ в payload хранится то, что отправили через dispatch(setCategoryId(...)),
				_ а в type: 'filter/setCategoryId"
			*/
			state.categoryId = actions.payload;
		},
		setSort(state, actions) {
			state.sort = actions.payload;
		},
		setSearch(state, actions) {
			state.search = actions.payload;
		},
		setCurrentPage(state, actions) {
			state.currentPage = actions.payload;
		},
		setFilters(state, actions) {
			state.categoryId = Number(actions.payload.categoryId);
			state.currentPage = Number(actions.payload.currentPage);
			state.sort = actions.payload.sort;
		},
	},
});

export const getFilters = (state) => state.filter;

export const { setCategoryId, setSort, setSearch, setCurrentPage, setFilters } =
	filterSlice.actions;

export default filterSlice.reducer;
