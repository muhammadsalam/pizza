import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
	return (
		<div className="Wrapper">
			<div className="Wrapper__inner">
				<Header />
				<main className="main">
					<ScrollToTop>
						<Outlet />
					</ScrollToTop>
				</main>
			</div>
		</div>
	);
}

export default MainLayout;
