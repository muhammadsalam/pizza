import { useContext, useEffect, useState } from "react";

import styles from "./index.module.styl";

import Card from "../../components/Card";
import Skeleton from "../../components/Card/Skeleton";
import Category from "../../components/Category";
import Selector from "../../components/Selector";
import Pagination from "../../components/Pagination";
import { searchContext } from "../../App";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";
import axios from "axios";

function Home() {
	const dispatch = useDispatch();

	const { searchValue } = useContext(searchContext);

	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { categoryId, sort } = useSelector((state) => state.filter);

	// Категория
	const onClickCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setIsLoading(true);

		const category = categoryId > 0 ? `&category=${categoryId}` : "";
		const newSort = sort.property.replace("-", "");
		const order = sort.property.includes("-") ? "desc" : "asc";
		const title = searchValue ? searchValue : "";

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
	}, [categoryId, sort, searchValue, currentPage]);

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
