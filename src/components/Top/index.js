import { useState } from "react";
import styles from "./index.module.styl";

function Top({ categoryIndex, onClickCategory, sortType, setSortType }) {
	function Selector() {
		// Открытие и закрытие тулбара
		const [isSelectOpen, setIsSelectOpen] = useState(false);
		const handleSelectOpen = () => setIsSelectOpen(!isSelectOpen);

		const selectorNames = ["популярности", "цене", "алфавиту"];
		const handleSortType = (id) => {
			setIsSelectOpen((bool) => !bool);
			setSortType(id);
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
						{selectorNames[sortType]}
					</button>
				</div>
				<div
					className={`${styles.select__list} ${
						isSelectOpen ? styles.active : ""
					}`}
				>
					{selectorNames.map((item, index) => (
						<button
							onClick={() => handleSortType(index)}
							className={
								sortType === index
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
