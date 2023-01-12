import InfoBlock from "../../components/InfoBlock";

function Cart() {
	return (
		<InfoBlock
			title="Корзина пустая"
			description={
				<>
					Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
					заказать пиццу, перейди на главную страницу.
				</>
			}
		>
			<img src="img/empty-cart.png" alt="в корзине ничего не найдено" />
		</InfoBlock>
	);
}

export default Cart;
