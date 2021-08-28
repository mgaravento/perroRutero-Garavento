import React from "react";
import "../../assets/css/temporary.css";
import "font-awesome/css/font-awesome.css";
import { CategoriesBar } from "./CategoriesBar";
import { SearchBar } from "./SearchBar";
import { Logo } from "../Logo";
import { IconsBar } from "./IconsBar";

export const NavBar = () => {
	return (
		<header className="dFlex flexColumn">
			<div className=" dFlex divHeader">
				<SearchBar></SearchBar>
				<Logo></Logo>
				<IconsBar></IconsBar>
			</div>
			<CategoriesBar
				categories={[
					"Transporte",
					"Paseo",
					"Juguetes",
					"Higiene",
					"Alimento",
					"Ropa",
				]}
			/>
		</header>
	);
};
