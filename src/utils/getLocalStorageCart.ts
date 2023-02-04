export const getLocalStorageCart = () => {
	const data = localStorage.getItem("cart");

	return data
		? JSON.parse(data)
		: {
				totalPrice: 0,
				items: [],
		  };
};
