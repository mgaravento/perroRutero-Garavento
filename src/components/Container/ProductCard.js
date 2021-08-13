import React from "react";
import "../../assets/css/temporary.css";
import producto1 from "../../assets/images/products/producto1.jpg";
//import producto2 from "../assets/images/products/producto2.jpg";
//import producto3 from "../assets/images/products/producto3.jpg";
//import "font-awesome/css/font-awesome.css";

export const ProductCard = () => {
	return (
		<div className="productCardDiv">
			<img src={producto1} alt="imagen de producto" className="imgSizeLg"></img>
			<p>Nombre del producto</p>
			<p>Precio</p>

			<div className="dFlex flexEnd">
				<i className="fa fa-heart paddingRigth15"></i>
				<button type="submit" className="buyButton">
					Comprar
				</button>
			</div>
		</div>
	);
};
