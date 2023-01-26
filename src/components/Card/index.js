import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCartItemByToken } from "../../redux/slices/cartSlice";
import styles from "./index.module.styl";

function Card({ id, title, pizzaUrl, price, sizes, types, token }) {
	const dispatch = useDispatch();

	const typeNames = ["тонкое", "традиционное"];

	const cartItem = useSelector(getCartItemByToken(token));

	const amount = cartItem ? cartItem.count : 0;

	const handleAddItem = () => {
		const item = {
			id,
			title,
			pizzaUrl,
			price,
			size: sizes[activeSize],
			type: typeNames[activeType],
			token,
		};

		dispatch(addItem(item));
	};

	const [activeType, setActiveType] = useState(0);
	const handleActiveType = (type) => setActiveType(type);

	const [activeSize, setActiveSize] = useState(0);
	const handleActiveSize = (size) => setActiveSize(size);

	return (
		<div className={styles.card}>
			<img src={pizzaUrl} alt={title} className={styles.card__img} />
			<span className={styles.card__title}>{title}</span>
			<div className={styles.card__choice}>
				<ul className={styles.card__selector}>
					{types.map((item, index) => (
						<li
							key={index}
							onClick={() => handleActiveType(index)}
							className={
								+activeType === +index ? styles.active : ""
							}
						>
							{typeNames[item]}
						</li>
					))}
				</ul>
				<ul className={styles.card__selector}>
					{sizes.map((item, index) => (
						<li
							key={index}
							onClick={() => handleActiveSize(index)}
							className={
								+activeSize === +index ? styles.active : ""
							}
						>
							{item} см.
						</li>
					))}
				</ul>
			</div>
			<div className={styles.card__bottom}>
				<span className={styles.card__price}>{price}</span>
				<button
					className={`${styles.card__button} ${
						amount ? styles["card__button-secondary"] : ""
					}`}
					onClick={handleAddItem}
				>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="inherit"
						/>
					</svg>
					Добавить
					{!!amount && <span>{amount}</span>}
				</button>
			</div>
		</div>
	);
}

export default Card;
