import { FC, memo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./index.module.scss";

import { setSort, SortType } from "../../redux/slices/filterSlice";
import useOnClickOutside from "../../hooks/useClickOutside";

export const selectorNames: SortType[] = [
	{ name: "Популярности", property: "-rating" },
	{ name: "Популярности", property: "rating" },
	{ name: "Цене", property: "-price" },
	{ name: "Цене", property: "price" },
	{ name: "Алфавиту", property: "title" },
];

export const Selector: FC<{ sort: SortType }> = memo(({ sort }) => {
	//_ Открытие и закрытие тулбара
	const [isVisible, setIsVisible] = useState(false);
	const handleSelectOpen = () => {
		setIsVisible(!isVisible);
	};

	const dispatch = useDispatch();

	//_ Клик на элемент сортировки [популярности, цене, алфавиту]
	const onClickSort = (item: SortType) => {
		handleSelectOpen();
		dispatch(setSort(item));
	};

	//_ Скрытие попапа при клике вне компонента
	const selectorRef = useRef<HTMLDivElement>(null);
	useOnClickOutside(selectorRef, setIsVisible);

	return (
		<div ref={selectorRef} className={styles.select}>
			<div className={styles.select__button}>
				<img
					style={
						isVisible ? { transform: "rotate(180deg" } : undefined
					}
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
										: undefined
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
});
