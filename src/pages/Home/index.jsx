import { useState } from "react";
import Card from "../../components/Card";
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
				<Card
					title={"Чизбургер-пицца"}
					pizzaUrl="/img/pizzas/pizza-1.png"
					price={"от 395 ₽"}
				/>
			</div>
		</div>
	);
}

export default Home;
