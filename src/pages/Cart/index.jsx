import { Link } from "react-router-dom";

import CartItem from "../../components/CartItem";
import InfoBlock from "../../components/InfoBlock";

import styles from "./index.module.styl";

function Cart() {
	return (
		// <InfoBlock
		// 	title="Корзина пустая"
		// 	description="
		// 			Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
		// 			заказать пиццу, перейди на главную страницу."
		// >
		// 	<img src="img/empty-cart.png" alt="в корзине ничего не найдено" />
		// </InfoBlock>
		<div className={styles.cart}>
			<div className={styles.top}>
				<h2 className={styles.top__title}>
					<img src="img/icons/cart-icon.svg" alt=">" role="icon" />
					Корзина
				</h2>
				<button className={styles.top__button}>
					<img src="img/icons/trash-icon.svg" alt="][" role="icon" />
					Очистить корзину
				</button>
			</div>
			<ul className={styles.cart__list}>
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
			</ul>
			<div className={styles.bottom}>
				<div className={styles.bottom__details}>
					<span>
						Всего пицц: <b>3 шт.</b>
					</span>
					<span>
						Сумма заказа:{" "}
						<b className={styles.bottom__price}>900 ₽</b>
					</span>
				</div>
				<div className={styles.bottom__buttons}>
					<Link to="/" className={styles.bottom__return}>
						<svg
							width="8"
							height="14"
							viewBox="0 0 8 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7 13L1 6.93015L6.86175 1"
								stroke="#D3D3D3"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						Вернуться назад
					</Link>
					<button className={styles.bottom__order}>
						Оплатить сейчас
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;
