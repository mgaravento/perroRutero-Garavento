import React from "react";
import "../../assets/css/temporary.css";
import { Item } from "./Item.js";

export const ItemList = ({ products = [] }) => {
	return (
		<div className="dFlex productsDiv width100 justifyCenter">
			{products.map((prod) => (
				<Item key={prod.id} {...prod} />
			))}
		</div>
	);
};
