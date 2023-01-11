import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Skeleton from "../../components/Card/Skeleton";
import Top from "../../components/Top";
import styles from "./index.module.styl";

function Home() {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://63bd5257d660062388a18682.mockapi.io/items")
			.then((res) => res.json())
			.then((items) => setPizzas(items))
			.then(() => setIsLoading(false))
			.catch((error) => {
				alert("Ошибка \n " + error);
				console.dir(error);
				setIsLoading(false);
			});
	}, []);

	const renderItems = () => {
		if (isLoading)
			return [...Array(8)].map((_, index) => <Skeleton key={index} />);
		return pizzas.map((item) => <Card key={item.id} {...item} />);
	};

	function Content() {
		return (
			<div className={styles.content}>
				<h2 className={styles.content__title}>Все пиццы</h2>
				<div className={styles.pizzas}>{renderItems()}</div>
			</div>
		);
	}

	return (
		<>
			<Top />
			<Content />
		</>
	);
}

export default Home;
