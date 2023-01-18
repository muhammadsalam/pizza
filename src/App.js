import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import InfoBlock from "./components/InfoBlock";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

export const searchContext = createContext();

function App() {
	const [searchValue, setSearchValue] = useState("");

	return (
		<div className="Wrapper">
			<div className="Wrapper__inner">
				<searchContext.Provider value={{ searchValue, setSearchValue }}>
					<Header />

					<main className="main">
						<ScrollToTop>
							<Routes>
								<Route path="/" element={<Home />} />
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
				</searchContext.Provider>
			</div>
		</div>
	);
}

export default App;
