import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { InfoBlock } from "./components";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const Cart = lazy(() => import(/* webpackChunkName: 'Cart' */ "./pages/Cart"));
const PizzaDetail = lazy(
	() => import(/* webpackChunkName: 'PizzaDetail' */ "./pages/PizzaDetail")
);

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="" element={<Home />} />
				<Route
					path="cart"
					element={
						<Suspense fallback={<div>Загрузка корзины..</div>}>
							<Cart />
						</Suspense>
					}
				/>
				<Route
					path="pizzas/:id"
					element={
						<Suspense
							fallback={<div>Загрузка компонента пиццы...</div>}
						>
							<PizzaDetail />
						</Suspense>
					}
				/>
				<Route
					path="*"
					element={
						<InfoBlock
							title="404. Страница не найдена."
							description=" К сожалению данная страница отсутствует в нашем интернет-магазине. Попросите с уважением"
						/>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
