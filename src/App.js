import { useState } from "react";
import { Ruotes, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import InfoBlock from "./components/InfoBlock";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
	const [searchValue, setSearchValue] = useState("");

	return (
		<div className="Wrapper">
			<div className="Wrapper__inner">
				<Header
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>

				<main className="main">
					<ScrollToTop>
						<Routes>
							<Route
								path="/"
								element={
									<Home
										searchValue={searchValue}
										setSearchValue={setSearchValue}
									/>
								}
							/>
							<Route path="/cart" element={<Cart />} />
							<Route
								path="*"
								element={
									<InfoBlock
										title="404. Страница не найдена."
										description=" К сожалению данная страница отсутствует в нашем интернет-магазине. Попросите с уважением"
									/>
								}
							/>
						</Routes>
					</ScrollToTop>
				</main>
			</div>
		</div>
	);
}

export default App;
