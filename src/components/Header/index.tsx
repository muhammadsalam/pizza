import { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getCart } from "../../redux/slices/cartSlice";
import { setFilters } from "../../redux/slices/filterSlice";
import { useAppDispatch } from "../../redux/store";
import { Search } from "../"; // components folder
import styles from "./Header.module.scss";

export const Header: FC = () => {
	const { items, totalPrice } = useSelector(getCart);

	const itemsLength = items.reduce(
		(sum: number, item: { count: number }) => sum + item.count,
		0
	);

	const isMounted = useRef(false);
	useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify({ totalPrice, items });
			localStorage.setItem("cart", json);
		}

		isMounted.current = true;
	}, [items]);

	const { pathname } = useLocation();

	const dispatch = useAppDispatch();
	const handleLogoClick = () => {
		dispatch(
			setFilters({
				categoryId: 0,
				sort: {
					name: "Популярности",
					property: "rating",
				},
				currentPage: 1,
				search: "",
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
				{pathname !== "/cart" && (
					<>
						<Search />
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
					</>
				)}
			</header>
			<hr className={styles.line} />
		</>
	);
};
