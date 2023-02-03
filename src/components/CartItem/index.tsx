import { FC } from "react";
import { useDispatch } from "react-redux";
import { CartItemProps } from "../../pages/Cart";
import {
	addItem,
	CartItem as CartItemType,
	minusItem,
	removeItem,
} from "../../redux/slices/cartSlice";

import styles from "./index.module.scss";

const CartItem: FC<CartItemProps> = ({
	token,
	price,
	title,
	count,
	pizzaUrl,
	type,
	size,
}) => {
	const dispatch = useDispatch();

	const handleItemPlus = () => {
		dispatch(addItem({ token, price } as CartItemType));
	};

	const handleItemMinus = () => {
		dispatch(minusItem({ token, price } as CartItemType));
	};

	const handleRemoveItem = () => {
		dispatch(removeItem({ token, price, count }));
	};

	return (
		<li className={styles.item}>
			<img
				className={styles.item__img}
				src={pizzaUrl}
				alt={`${title}. ${type}`}
			/>
			<div className={styles.info}>
				<h3 className={styles.info__title}>{title}</h3>
				<p className={styles.info__description}>
					{type} тесто, {size} см.
				</p>
			</div>
			<div className={styles.nav}>
				<button
					onClick={handleItemMinus}
					className={styles.nav__button}
				>
					<img
						src="img/icons/cart-minus.svg"
						role="icon"
						alt="decrease"
					/>
				</button>
				<span className={styles.nav__span}>{count}</span>
				<button onClick={handleItemPlus} className={styles.nav__button}>
					<img src="img/icons/cart-plus.svg" role="icon" alt="add" />
				</button>
			</div>
			<b className={styles.item__price}>{price * count} ₽</b>
			<button onClick={handleRemoveItem} className={styles.item__close}>
				<img src="img/icons/cart-close.svg" alt="close" />
				<span>Удалить</span>
			</button>
		</li>
	);
};

export default CartItem;
