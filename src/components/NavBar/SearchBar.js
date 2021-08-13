import React from "react";

import "../../assets/css/temporary.css";
import "font-awesome/css/font-awesome.css";

export const SearchBar = () => {
	return (
		<div className="dFlex width30 justifyCenter searchDiv">
			<input
				type="search"
				className="searchInput"
				placeholder="Busca productos"
			></input>
			<i class="fa fa-search"></i>
		</div>
	);
};
