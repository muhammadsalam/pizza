import { useEffect } from "react";

import styles from "./index.module.styl";

import Card from "../../components/Card";
import Skeleton from "../../components/Card/Skeleton";
import Category from "../../components/Category";
import Selector, { selectorNames } from "../../components/Selector";
import Pagination from "../../components/Pagination";

import { useDispatch, useSelector } from "react-redux";
import {
	getFilters,
	setCategoryId,
	setCurrentPage,
	setFilters,
} from "../../redux/slices/filterSlice";
import QueryString from "qs";
import { useNavigate } from "react-router";
import { useRef } from "react";
import { fetchPizzas, getPizzasData } from "../../redux/slices/pizzasSlice";
import InfoBlock from "../../components/InfoBlock";

function Home() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isPizzasRendered = useRef(false);
	const isMounted = useRef(false);

	const { pizzas, status } = useSelector(getPizzasData);

	const { categoryId, sort, search, currentPage } = useSelector(getFilters);

	//? Категория
	const onClickCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	//? Страница пагинации
	const setPage = (number) => {
		dispatch(setCurrentPage(number));
	};

	const getPizzas = async () => {
		const category = categoryId > 0 ? `&category=${categoryId}` : "";
		const newSort = sort.property.replace("-", "");
		const order = sort.property.includes("-") ? "desc" : "asc";
		const title = search ? search : "";

		dispatch(
			fetchPizzas({
				category,
				newSort,
				order,
				title,
				currentPage,
			})
		);
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
			getPizzas();
		}

		isPizzasRendered.current = false;
	}, [categoryId, sort, search, currentPage]);

	const renderItems = () => {
		const pizzasItems = pizzas.map((item) => (
			<Card key={item.id} {...item} />
		));
		const skelletonsItems = [...Array(4)].map((_, id) => (
			<Skeleton className={styles.skeleton} key={id} />
		));

		if (status === "loading") return skelletonsItems;
		return pizzasItems;
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
			{status !== "error" ? (
				<div className={styles.content}>
					<h2 className={styles.content__title}>Все пиццы</h2>
					<div className={styles.pizzas}>{renderItems()}</div>
					<Pagination currentPage={currentPage} setPage={setPage} />
				</div>
			) : (
				<InfoBlock
					title="Ошибка, попробуйте чуть позже."
					button={false}
				/>
			)}
		</>
	);
}

export default Home;
