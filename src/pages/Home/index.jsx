import { useState } from "react";
import styles from "./index.module.styl";
console.log(styles);

function Home() {
	return (
		<>
			<Top />
			<Content />
		</>
	);
}

function Top() {
	function Navigation() {
		return (
			<nav className={styles.navigation}>
				<button
					className={`${styles.navigation__item} ${styles["navigation__item-active"]}`}
				>
					Все
				</button>
				<button className={styles.navigation__item}>Мясные</button>
				<button className={styles.navigation__item}>
					Вегетарианская
				</button>
				<button className={styles.navigation__item}>Гриль</button>
				<button className={styles.navigation__item}>Острые</button>
				<button className={styles.navigation__item}>Закрытые</button>
			</nav>
		);
	}

	function Selector() {
		// Открытие и закрытие тулбара
		const [isSelectOpen, setIsSelectOpen] = useState(false);
		const handleSelectOpen = () => setIsSelectOpen(!isSelectOpen);
		return (
			<div className={styles.select}>
				<button
					onClick={handleSelectOpen}
					className={styles.select__button}
				>
					<img
						style={
							isSelectOpen ? { transform: "rotate(180deg" } : null
						}
						src="/img/icons/arrow.svg"
						alt="^"
					/>
					<b>Сортировка по:</b>
					<span>популярности</span>
				</button>
				<div
					className={`${styles.select__list} ${
						isSelectOpen ? styles["select__list-active"] : ""
					}`}
				>
					<button
						className={`${styles.select__item} ${styles["select__item-active"]}`}
					>
						популярности
					</button>
					<button className={styles.select__item}>цене</button>
					<button className={styles.select__item}>алфавиту</button>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.top}>
			<Navigation />
			<Selector />
		</div>
	);
}

function Content() {
	return (
		<div className={styles.content}>
			<h2 className={styles.content__title}>Все пиццы</h2>
			<div className={styles.pizzas}>
				<div className={styles.card}>
					<img
						src="/img/pizzas/pizza-1.png"
						alt="Чизбургер-пицца"
						className={styles.card__img}
					/>
					<span className={styles.card__title}>Чизбургер-пицца</span>
					<div className={styles.card__choice}>
						<ul className={styles.card__selector}>
							<li
								className={`${styles.choice__item} ${styles["choice__item-active"]}`}
							>
								тонкое
							</li>
							<li className={styles.choice__item}>
								традиционное
							</li>
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
						<span className={styles.card__price}>от 395 ₽</span>
						<button
							className={`${styles.card__button} ${styles["card__button-secondary"]}`}
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
							<span>2</span>
						</button>
					</div>
				</div>
				<div className={styles.card}>
					<img
						src="/img/pizzas/pizza-1.png"
						alt="Чизбургер-пицца"
						className={styles.card__img}
					/>
					<span className={styles.card__title}>Чизбургер-пицца</span>
					<div className={styles.card__choice}>
						<ul className={styles.card__selector}>
							<li
								className={`${styles.choice__item} ${styles["choice__item-active"]}`}
							>
								тонкое
							</li>
							<li className={styles.choice__item}>
								традиционное
							</li>
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
						<span className={styles.card__price}>от 395 ₽</span>
						<button
							className={`${styles.card__button} ${styles["card__button-secondary"]}`}
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
							<span>2</span>
						</button>
					</div>
				</div>
				<div className={styles.card}>
					<img
						src="/img/pizzas/pizza-1.png"
						alt="Чизбургер-пицца"
						className={styles.card__img}
					/>
					<span className={styles.card__title}>Чизбургер-пицца</span>
					<div className={styles.card__choice}>
						<ul className={styles.card__selector}>
							<li
								className={`${styles.choice__item} ${styles["choice__item-active"]}`}
							>
								тонкое
							</li>
							<li className={styles.choice__item}>
								традиционное
							</li>
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
						<span className={styles.card__price}>от 395 ₽</span>
						<button
							className={`${styles.card__button} ${styles["card__button-secondary"]}`}
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
							<span>2</span>
						</button>
					</div>
				</div>
				<div className={styles.card}>
					<img
						src="/img/pizzas/pizza-1.png"
						alt="Чизбургер-пицца"
						className={styles.card__img}
					/>
					<span className={styles.card__title}>Чизбургер-пицца</span>
					<div className={styles.card__choice}>
						<ul className={styles.card__selector}>
							<li
								className={`${styles.choice__item} ${styles["choice__item-active"]}`}
							>
								тонкое
							</li>
							<li className={styles.choice__item}>
								традиционное
							</li>
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
						<span className={styles.card__price}>от 395 ₽</span>
						<button
							className={`${styles.card__button} ${styles["card__button-secondary"]}`}
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
							<span>2</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
