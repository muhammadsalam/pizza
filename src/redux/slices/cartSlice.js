import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalPrice: 0,
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// addItem(state, action) {
		// 	state.items.push(action.payload);
		// 	state.totalPrice += action.payload.price;
		// },
		addItem(state, action) {
			const findedItem = state.items.find(
				(obj) => obj.token === action.payload.token
			);

			if (findedItem) {
				findedItem.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				});
			}

			state.totalPrice += +action.payload.price;
		},
		minusItem(state, action) {
			const findItem = state.items.find(
				(obj) => obj.token === action.payload.token
			);

			if (findItem.count - 1 === 0) {
				state.items = state.items.filter(
					(item) => item.token !== action.payload.token
				);
			} else {
				findItem.count--;
			}
			console.log(state.totalPrice, action.payload.price);
			state.totalPrice -= action.payload.price;
		},
		removeItem(state, action) {
			state.items = state.items.filter(
				(item) => item.token !== action.payload.token
			);
			state.totalPrice -= +action.payload.price * +action.payload.count;
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
