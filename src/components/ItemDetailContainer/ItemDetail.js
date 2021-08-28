import { React } from "react";
import "../../assets/css/temporary.css";

export const ItemDetail = (product) => {
	return (
		<div className="dFlex borderDetail flexColumn width70">
			<p className="productName margin30">{product.name}</p>{" "}
			<div className="dFlex">
				<div className="dFlex flexColumn width70">
					<img
						src={product.img}
						alt={product.name}
						className="width50 margin10 ml30"
					></img>
					<p className="margin10 ml30 productDetail">
						Detalles: {product.description}
					</p>
				</div>
				<div className="dFlex flexColumn width30 justifyB">
					<p className="margin10 ml30 productDetail">{product.price}</p>
					<div className="dFlex flowColumn">
						<button type="submit" className="buyButton margin10 ">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
