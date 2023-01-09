import { useState } from "react";
import styles from "./index.module.styl";

function Top() {
	function Navigation() {
		const [index, setIndex] = useState(0);

		const getClass = (userIndex) =>
			index === userIndex ? styles.active : "";

		const onClickCategory = (index) => {
			setIndex(index);
		};

		const categories = [
			"Все",
			"Мясные",
			"Вегетарианская",
			"Гриль",
			"Острые",
			"Закрытые",
		];

		const listRender = () => {
			return categories.map((name, index) => {
				return (
					<button
						key={index}
						onClick={() => onClickCategory(index)}
						className={getClass(index)}
					>
						{name}
					</button>
				);
			});
		};

		return <nav className={styles.navigation}>{listRender()}</nav>;
	}

	function Selector() {
		// Открытие и закрытие тулбара
		const [isSelectOpen, setIsSelectOpen] = useState(false);
		const handleSelectOpen = () => setIsSelectOpen(!isSelectOpen);

		const selectorNames = ["популярности", "цене", "алфавиту"];
		const [selectorId, setSelectorId] = useState(0);
		const handleSelectorId = (id) => {
			setIsSelectOpen(!isSelectOpen);
			setSelectorId(id);
		};

		return (
			<div className={styles.select}>
				<div className={styles.select__button}>
					<img
						style={
							isSelectOpen ? { transform: "rotate(180deg" } : null
						}
						src="/img/icons/arrow.svg"
						alt="^"
					/>
					<b>Сортировка по:</b>
					<button onClick={handleSelectOpen}>
						{selectorNames[selectorId]}
					</button>
				</div>
				<div
					className={`${styles.select__list} ${
						isSelectOpen ? styles.active : ""
					}`}
				>
					{selectorNames.map((item, index) => (
						<button
							onClick={() => handleSelectorId(index)}
							className={
								selectorId === index
									? styles["button-active"]
									: ""
							}
							key={index}
						>
							{item}
						</button>
					))}
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

export default Top;
