import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getCart } from "../../redux/slices/cartSlice";
import { setFilters } from "../../redux/slices/filterSlice";
import Search from "../Search";
import styles from "./Header.module.styl";

function Header() {
	const { items, totalPrice } = useSelector(getCart);
	const itemsLength = items.reduce((sum, item) => sum + item.count, 0);

	const { pathname } = useLocation();

	const dispatch = useDispatch();
	const handleLogoClick = () => {
		dispatch(
			setFilters({
				categoryId: 0,
				sort: {
					name: "Популярности",
					property: "rating",
				},
				currentPage: 1,
			})
		);
	};

	return (
		<>
			<header className={styles.header}>
				<Link to="/" onClick={handleLogoClick} className={styles.logo}>
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
				{pathname !== "/cart" && (
					<Link to="/cart" className={styles.button}>
						<span className={styles.button__span}>
							{totalPrice} ₽
						</span>
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
				)}
			</header>
			<hr className={styles.line} />
		</>
	);
}

export default Header;
