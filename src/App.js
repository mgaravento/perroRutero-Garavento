import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/Container/ItemListContainer";
import { Footer } from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />

				<Switch>
					<Route exact path="/">
						<ItemListContainer />
					</Route>
					<Route exact path="/category/:cat">
						<ItemListContainer />
					</Route>

					<Route exact path="/detail/:id">
						<ItemDetailContainer></ItemDetailContainer>
					</Route>
					<Route exact path="/profile">
						<h3>Mi perfil</h3>
					</Route>
					<Route path="*">
						<h1>ruta no existe</h1>
					</Route>
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
