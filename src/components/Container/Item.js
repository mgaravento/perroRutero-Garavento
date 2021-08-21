import React from "react";
import "../../assets/css/temporary.css";
//import "font-awesome/css/font-awesome.css";

export const Item = ({ ...prod }) => {
	return (
		<div className="productCardDiv">
			<img src={prod.img} alt="imagen de producto" className="imgSizeLg"></img>
			<p>{prod.name}</p>
			<p>{prod.price}</p>
			<p>{prod.description}</p>

			<div className="dFlex flexEnd">
				<i className="fa fa-heart paddingRigth15"></i>
				<button type="submit" className="buyButton">
					Comprar
				</button>
			</div>
		</div>
	);
};
