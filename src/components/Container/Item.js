import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/temporary.css";
//import "font-awesome/css/font-awesome.css";

export const Item = ({ ...prod }) => {
	return (
		<div className="productCardDiv">
			<img src={prod.img} alt="imagen de producto" className="imgSizeLg"></img>
			<p>{prod.name}</p>
			<p>{prod.price}</p>

			<div className="dFlex flexEnd">
				<Link to={`/detail/${prod.id}`}>
					<button type="submit" className="buyButton">
						Detalles
					</button>
				</Link>
			</div>
		</div>
	);
};
