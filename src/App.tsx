import { Route, Routes } from "react-router-dom";

import InfoBlock from "./components/InfoBlock/index.jsx";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PizzaDetail from "./pages/PizzaDetail";

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="" element={<Home />} />
				<Route path="cart" element={<Cart />} />
				<Route path="pizzas/:id" element={<PizzaDetail />} />
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
