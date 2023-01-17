import styles from "./index.module.styl";

function Category({ categoryIndex, onClickCategory }) {
	const getClass = (userIndex) =>
		categoryIndex === userIndex ? styles.active : "";

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

	return <nav className={styles.category}>{listRender()}</nav>;
}

export default Category;
