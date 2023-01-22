import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.styl";

import { setSort } from "../../redux/slices/filterSlice";

export const selectorNames = [
	{ name: "Популярности", property: "-rating" },
	{ name: "Популярности", property: "rating" },
	{ name: "Цене", property: "-price" },
	{ name: "Цене", property: "price" },
	{ name: "Алфавиту", property: "title" },
];

function Selector({ sort }) {
	//_ Открытие и закрытие тулбара
	const [isVisible, setIsVisible] = useState(false);
	const handleSelectOpen = () => setIsVisible(!isVisible);

	const dispatch = useDispatch();

	//_ Клик на элемент сортировки [популярности, цене, алфавиту]
	const onClickSort = (item) => {
		handleSelectOpen();
		dispatch(setSort(item));
	};

	return (
		<div className={styles.select}>
			<div className={styles.select__button}>
				<img
					style={isVisible ? { transform: "rotate(180deg" } : null}
					src="/img/icons/arrow.svg"
					alt="^"
				/>
				<b>Сортировка по:</b>
				<button onClick={handleSelectOpen}>{sort.name}</button>
			</div>
			<div
				className={`${styles.select__list} ${
					isVisible ? styles.active : ""
				}`}
			>
				{selectorNames.map((item) => (
					<button
						onClick={() => onClickSort(item)}
						className={
							sort.property === item.property
								? styles["button-active"]
								: ""
						}
						key={item.property}
					>
						{item.name}
						{item.property !== "title" && (
							<img
								style={
									item.property.includes("-")
										? { transform: "rotate(180deg" }
										: null
								}
								src="/img/icons/arrow.svg"
								alt="^"
							/>
						)}
					</button>
				))}
			</div>
		</div>
	);
}

export default Selector;
