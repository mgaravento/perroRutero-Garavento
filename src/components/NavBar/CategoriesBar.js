import React from "react";

import "../../assets/css/temporary.css";
import "font-awesome/css/font-awesome.css";

export const CategoriesBar = ({ categories }) => {
	return (
		<div className="categoriesBar dFlex">
			<ul className="dFlex ulCategories">
				{categories.map((category, index) => (
					<li key={index} className="ligth">
						<a href=" ">{category} </a>
					</li>
				))}
			</ul>
		</div>
	);
};
