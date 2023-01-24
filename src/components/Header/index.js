import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../Search";
import styles from "./Header.module.styl";

function Header() {
	const { items, totalPrice } = useSelector((state) => state.cart);
	const itemsLength = items.reduce((sum, item) => sum + item.count, 0);

	return (
		<>
			<header className={styles.header}>
				<Link to="/" className={styles.logo}>
					<img
						className={styles.logo__img}
						src="/img/logo.png"
						alt="REACT PIZZA LOGO"
					/>
					<div className={styles.logo__text}>
						<h1>react pizza</h1>
						<p>самая вкусная пицца во вселенной</p>
					</div>
				</Link>
				<Search />
				<Link to="/cart" className={styles.button}>
					<span className={styles.button__span}>{totalPrice} ₽</span>
					<hr className={styles.button__line} />
					<div>
						<img
							className={styles.button__img}
							src="/img/icons/cart.svg"
							role="icon"
							alt=""
						/>
						<span className={styles.button__span}>
							{itemsLength}
						</span>
					</div>
				</Link>
			</header>
			<hr className={styles.line} />
		</>
	);
}

export default Header;
