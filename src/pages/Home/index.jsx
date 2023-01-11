import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Top from "../../components/Top";
import styles from "./index.module.styl";

function Home() {
	const [pizzas, setPizzas] = useState([]);

	useEffect(() => {
		fetch("https://63bd5257d660062388a18682.mockapi.io/items")
			.then((res) => res.json())
			.then((items) => setPizzas(items));
	}, []);

	const renderItems = () => {
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
