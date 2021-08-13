import React from "react";
import "../../assets/css/temporary.css";
import "font-awesome/css/font-awesome.css";

export const IconsBar = () => {
	return (
		<div className="dFlex width30">
			<ul className="dFlex ulIcons">
				<li>
					<i class="fa fa-user-circle"></i>
				</li>
				<li>
					<i className="fa fa-heart"></i>
				</li>
				<li>
					<i class="fa fa-shopping-cart"></i>
				</li>
			</ul>
		</div>
	);
};
