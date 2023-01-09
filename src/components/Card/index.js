import { useState } from "react";
import styles from "./index.module.styl";

function Card({ title, pizzaUrl, price }) {
	const [amount, setAmount] = useState(0);

	const handleAmountPlus = () => setAmount(amount + 1);

	return (
		<div className={styles.card}>
			<img src={pizzaUrl} alt={title} className={styles.card__img} />
			<span className={styles.card__title}>{title}</span>
			<div className={styles.card__choice}>
				<ul className={styles.card__selector}>
					<li
						className={`${styles.choice__item} ${styles["choice__item-active"]}`}
					>
						тонкое
					</li>
					<li className={styles.choice__item}>традиционное</li>
				</ul>
				<ul className={styles.card__selector}>
					<li
						className={`${styles.choice__item} ${styles["choice__item-active"]}`}
					>
						26 см.
					</li>
					<li className={styles.choice__item}>30 см.</li>
					<li className={styles.choice__item}>40 см.</li>
				</ul>
			</div>
			<div className={styles.card__bottom}>
				<span className={styles.card__price}>{price}</span>
				<button
					className={`${styles.card__button} ${
						amount ? styles["card__button-secondary"] : ""
					}`}
					onClick={handleAmountPlus}
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
					{amount ? <span>{amount}</span> : null}
				</button>
			</div>
		</div>
	);
}

export default Card;
