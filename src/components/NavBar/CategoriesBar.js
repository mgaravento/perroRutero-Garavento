import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/temporary.css";
import "font-awesome/css/font-awesome.css";

export const CategoriesBar = () => {
	return (
		<div className="categoriesBar dFlex">
			<ul className="dFlex ulCategories">
				<li className="ligth">
					<Link to="/category/paseo" className="categories">
						PASEO
					</Link>
				</li>
				<li className="ligth">
					<Link to="/category/transporte" className="categories">
						TRANSPORTE
					</Link>
				</li>
				<li className="ligth">
					<Link to="/category/ropa" className="categories">
						ROPA
					</Link>
				</li>
				<li className="ligth">
					<Link to="/category/juguetes" className="categories">
						JUGUETES
					</Link>
				</li>
				<li className="ligth">
					<Link to="/category/higiene" className="categories">
						HIGIENE
					</Link>
				</li>
				<li className="ligth">
					<Link to="/category/alimentos" className="categories">
						ALIMENTOS
					</Link>
				</li>
			</ul>
		</div>
	);
};
