import { useEffect, useState } from "react";

import styles from "./index.module.styl";

import Card from "../../components/Card";
import Skeleton from "../../components/Card/Skeleton";
import Category from "../../components/Category";
import Selector, { selectorNames } from "../../components/Selector";
import Pagination from "../../components/Pagination";

import { useDispatch, useSelector } from "react-redux";
import {
	setCategoryId,
	setCurrentPage,
	setFilters,
} from "../../redux/slices/filterSlice";
import axios from "axios";
import QueryString from "qs";
import { useNavigate } from "react-router";
import { useRef } from "react";

function Home() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isPizzasRendered = useRef(false);
	const isMounted = useRef(false);

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

	const fetchPizzas = () => {
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
	};

	useEffect(() => {
		if (window.location.search) {
			const queryParams = QueryString.parse(
				window.location.search.substring(1)
			);

			const sort = selectorNames.find(
				(obj) => obj.property === queryParams.sortProperty
			);

			dispatch(
				setFilters({
					...queryParams,
					sort,
				})
			);
			isPizzasRendered.current = true;
		}
	}, []);

	useEffect(() => {
		if (isMounted.current) {
			const queryStringParams = QueryString.stringify(
				{
					sortProperty: sort.property,
					categoryId,
					currentPage,
				},
				{ addQueryPrefix: true }
			);

			navigate(queryStringParams);
		}
		isMounted.current = true;
	}, [categoryId, sort, currentPage]);

	useEffect(() => {
		if (!isPizzasRendered.current) {
			fetchPizzas();
		}

		isPizzasRendered.current = false;
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
				<Pagination currentPage={currentPage} setPage={setPage} />
			</div>
		</>
	);
}

export default Home;
