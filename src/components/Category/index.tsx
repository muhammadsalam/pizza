import { FC } from "react";
import styles from "./index.module.scss";

export const categories = [
	"Все",
	"Мясные",
	"Вегетарианская",
	"Гриль",
	"Острые",
	"Закрытые",
];

type CategoryProps = {
	categoryId: number;
	onClickCategory: (index: number) => void;
};

const Category: FC<CategoryProps> = ({ categoryId, onClickCategory }) => {
	const getClass = (userIndex: number) =>
		categoryId === userIndex ? styles.active : "";

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

	return <nav className={styles.category}>{listRender()}</nav>;
};

export default Category;
