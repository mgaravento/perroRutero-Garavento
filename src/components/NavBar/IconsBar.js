import React from "react";
import "../../assets/css/temporary.css";
import "font-awesome/css/font-awesome.css";
import { Link } from "react-router-dom";

export const IconsBar = () => {
	return (
		<div className="dFlex width30">
			<ul className="dFlex ulIcons">
				<Link to={"/profile"}>
					<li>
						<i class="fa fa-user-circle"></i>
					</li>
				</Link>
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
