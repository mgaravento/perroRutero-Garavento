import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/Container/ItemListContainer";
import { Footer } from "./components/Footer";

function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemListContainer />
			<Footer />
		</div>
	);
}

export default App;
