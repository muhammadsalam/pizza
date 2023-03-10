import styles from "./index.module.scss";

import { FC, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import QueryString from "qs";

import {
	FilterSliceState,
	getFilters,
	setCategoryId,
	setCurrentPage,
	setFilters,
} from "../../redux/slices/filterSlice";

import { fetchPizzas, getPizzasData } from "../../redux/slices/pizzasSlice";
import { useAppDispatch } from "../../redux/store";

import {
	Card,
	Skeleton,
	Category,
	Selector,
	selectorNames,
	Pagination,
	InfoBlock,
} from "../../components";

const Home: FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const isPizzasRendered = useRef(false);
	const isMounted = useRef(false);

	const { pizzas, status } = useSelector(getPizzasData);

	const { categoryId, sort, search, currentPage } = useSelector(getFilters);

	//? Категория
	const onClickCategory = useCallback((id: number) => {
		dispatch(setCategoryId(id));
	}, []);

	//? Страница пагинации
	const setPage = (pageIndex: number) => {
		dispatch(setCurrentPage(pageIndex));
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
				currentPage: "" + currentPage,
			})
		);
	};

	useEffect(() => {
		if (window.location.search) {
			const queryParams = QueryString.parse(
				window.location.search.substring(1)
			) as unknown as FilterSliceState & { sortProperty?: string };

			const sort = selectorNames.find(
				(obj) => obj.property === queryParams.sortProperty
			);

			if (sort) {
				delete queryParams.sortProperty;
				queryParams.sort = sort;
			}

			dispatch(setFilters(queryParams));
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
		const pizzasItems = pizzas.map((item: any) => (
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
};

export default Home;
