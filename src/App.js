import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
	return (
		<div className="Wrapper">
			<div className="Wrapper__inner">
				<Header/>

				<main className="main">
					<Home />
				</main>
			</div>
		</div>
	);
}

export default App;
