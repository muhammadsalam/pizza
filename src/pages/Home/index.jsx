import Card from "../../components/Card";
import Top from "../../components/Top";
import styles from "./index.module.styl";
import pizzas from "../../data/pizzas.json";

function Home() {
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
