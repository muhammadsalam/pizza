import { useEffect, useState } from "react";

import styles from "./index.module.styl";

import Card from "../../components/Card";
import Skeleton from "../../components/Card/Skeleton";
import Category from "../../components/Category";
import Selector from "../../components/Selector";
import Pagination from "../../components/Pagination";

function Home({ searchValue, setSearchValue }) {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// Категория
	const [categoryIndex, setCategoryIndex] = useState(0);
	const onClickCategory = (index) => {
		setCategoryIndex(index);
	};

	// Сортировка
	const [sortType, setSortType] = useState({
		name: "Популярности",
		property: "rating",
	});
	const onClickSort = (index) => {
		setSortType(index);
	};

	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setIsLoading(true);

		const category = categoryIndex > 0 ? `&category=${categoryIndex}` : "";
		const sort = sortType.property.replace("-", "");
		const order = sortType.property.includes("-") ? "desc" : "asc";
		const title = searchValue ? searchValue : "";

		fetch(
			`https://63bd5257d660062388a18682.mockapi.io/items?page=${currentPage}&limit=4${category}&title=${title}&sortBy=${sort}&order=${order}`
		)
			.then((res) => res.json())
			.then((items) => setPizzas(items))
			.then(() => setIsLoading(false))
			.catch((error) => {
				alert("Ошибка \n " + error);
				console.dir(error);
				setIsLoading(false);
			});
	}, [categoryIndex, sortType, searchValue, currentPage]);

	const renderItems = () => {
		const pizItems = pizzas.map((item) => <Card key={item.id} {...item} />);
		const skelItems = [...Array(4)].map((_, index) => (
			<Skeleton className={styles.skeleton} key={index} />
		));

		if (isLoading) return skelItems;
		return pizItems;
	};

	return (
		<>
			<div className={styles.top}>
				<Category
					onClickCategory={onClickCategory}
					categoryIndex={categoryIndex}
				/>
				<Selector sort={sortType} onChangeSort={onClickSort} />
			</div>
			<div className={styles.content}>
				<h2 className={styles.content__title}>Все пиццы</h2>
				<div className={styles.pizzas}>
					{/* <Skeleton /> */}
					{renderItems()}
				</div>
				<Pagination setCurrentPage={setCurrentPage} />
			</div>
		</>
	);
}

export default Home;
