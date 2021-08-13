import React from "react";
import "../../assets/css/temporary.css";
import { ProductCard } from "./ProductCard";

export const Products = () => {
	return (
		<div className="dFlex productsDiv width100 justifyCenter">
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
		</div>
	);
};
