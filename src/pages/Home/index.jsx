import { useEffect, useState } from "react";

import styles from "./index.module.styl";

import Card from "../../components/Card";
import Skeleton from "../../components/Card/Skeleton";
import Category from "../../components/Category";
import Selector from "../../components/Selector";
import Pagination from "../../components/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../../redux/slices/filterSlice";
import axios from "axios";

function Home() {
	const dispatch = useDispatch();

	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { categoryId, sort, search, currentPage } = useSelector(
		(state) => state.filter
	);

	//? Категория
	const onClickCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	//? Страница пагинации
	const setPage = (number) => {
		dispatch(setCurrentPage(number));
	};

	useEffect(() => {
		setIsLoading(true);

		const category = categoryId > 0 ? `&category=${categoryId}` : "";
		const newSort = sort.property.replace("-", "");
		const order = sort.property.includes("-") ? "desc" : "asc";
		const title = search ? search : "";

		axios
			.get(
				`https://63bd5257d660062388a18682.mockapi.io/items?page=${currentPage}&limit=4${category}&title=${title}&sortBy=${newSort}&order=${order}`
			)
			.then((response) => {
				setPizzas(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				alert("Ошибка \n " + error);
				console.dir(error);
				setIsLoading(false);
			});
	}, [categoryId, sort, search, currentPage]);

	const renderItems = () => {
		const pizItems = pizzas.map((item) => <Card key={item.id} {...item} />);
		const skelItems = [...Array(4)].map((_, id) => (
			<Skeleton className={styles.skeleton} key={id} />
		));

		if (isLoading) return skelItems;
		return pizItems;
	};

	return (
		<>
			<div className={styles.top}>
				<Category
					onClickCategory={onClickCategory}
					categoryId={categoryId}
				/>
				<Selector sort={sort} />
			</div>
			<div className={styles.content}>
				<h2 className={styles.content__title}>Все пиццы</h2>
				<div className={styles.pizzas}>{renderItems()}</div>
				<Pagination setPage={setPage} />
			</div>
		</>
	);
}

export default Home;
