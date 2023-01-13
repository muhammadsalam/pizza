import styles from "./index.module.styl";

const CartItem = () => {
	return (
		<li className={styles.item}>
			<img
				className={styles.item__img}
				src="img/pizzas/pizza-1.png"
				alt=""
			/>
			<div className={styles.info}>
				<h3 className={styles.info__title}>Сырный цыпленок</h3>
				<p className={styles.info__description}>тонкое тесто, 26 см.</p>
			</div>
			<div className={styles.nav}>
				<button className={styles.nav__button}>
					<img
						src="img/icons/cart-minus.svg"
						role="icon"
						alt="decrease"
					/>
				</button>
				<span className={styles.nav__span}>2</span>
				<button className={styles.nav__button}>
					<img src="img/icons/cart-plus.svg" role="icon" alt="add" />
				</button>
			</div>
			<b className={styles.item__price}>770 ₽</b>
			<button className={styles.item__close}>
				<img src="img/icons/cart-close.svg" alt="close" />
				<span>Удалить</span>
			</button>
		</li>
	);
};

export default CartItem;
