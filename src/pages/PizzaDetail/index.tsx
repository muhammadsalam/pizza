import styles from "./.module.scss";

import { useNavigate, useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { categories } from "../../components/Category";
import { typeNames } from "../../components/Card";

type pizzaType = {
	id: number;
	token: number;
	pizzaUrl: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	category: number;
	rating: number;
};

const PizzaDetail: FC = () => {
	const [pizza, setPizza] = useState<pizzaType>();
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get(
					"https://63bd5257d660062388a18682.mockapi.io/items/" + id
				);

				setPizza(data);
			} catch (error) {
				alert("Ошибка при получении пиццы!");
				navigate("/");
			}
		})();
	}, []);

	if (!pizza) {
		return <>Загрузка...</>;
	}

	return (
		<div className={styles.pizza}>
			<img className={styles.pizza__img} src={"../" + pizza.pizzaUrl} />
			<div className={styles.pizza__info}>
				<div className={styles.pizza__top}>
					<h2 className={styles.pizza__title}>{pizza.title}</h2>
					<span className={styles.pizza__price}>
						от {pizza.price} ₽
					</span>
				</div>
				<p className={styles.pizza__description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ullam, incidunt pariatur? Soluta adipisci quae
					exercitationem quas eos quidem dolorum natus, temporibus
					accusamus atque repellendus, consectetur neque impedit
					tenetur qui repudiandae.
				</p>
				<div className={styles.details}>
					<div className={styles.details__item}>
						<b>Категория:</b>
						<div></div>
						<span>{categories[pizza.category].toLowerCase()}</span>
					</div>
					<div className={styles.details__item}>
						<b>Тесто:</b>
						<div></div>
						<span>
							{pizza.types
								.map((index) => typeNames[index])
								.join(", ")}
						</span>
					</div>
					<div className={styles.details__item}>
						<b>Размеры:</b>
						<div></div>
						<span>{pizza.sizes.join(", ")}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PizzaDetail;
