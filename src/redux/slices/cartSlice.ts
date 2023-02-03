import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItem = {
	id: string;
	title: string;
	pizzaUrl: string;
	price: number;
	size: number;
	type: string;
	token: number;
	rating: number;
	count: number;
};

interface CartSliceState {
	totalPrice: number;
	items: CartItem[];
}

const initialState: CartSliceState = {
	totalPrice: 0,
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<CartItem>) {
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

		minusItem(state, action: PayloadAction<CartItem>) {
			const findItem = state.items.find(
				(obj) => obj.token === action.payload.token
			);

			if (findItem) {
				if (findItem.count - 1 === 0) {
					state.items = state.items.filter(
						(item) => item.token !== action.payload.token
					);
				} else {
					findItem.count--;
				}
			}

			state.totalPrice -= action.payload.price;
		},

		removeItem(
			state,
			action: PayloadAction<{
				token: number;
				price: number;
				count: number;
			}>
		) {
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

export const getCart = (state: RootState) => state.cart;

export const getCartItemByToken = (token: number) => (state: RootState) => {
	return state.cart.items.find((obj) => {
		return obj.token === token;
	});
};

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
