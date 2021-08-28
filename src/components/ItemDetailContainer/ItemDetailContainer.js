import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../utils/getProducts";
import { ItemDetail } from "./ItemDetail";
import "../../assets/css/temporary.css";

export const ItemDetailContainer = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);

	const [item, setItem] = useState(null);
	useEffect(() => {
		setLoading(true);
		getProducts()
			.then((res) => {
				setItem(res.find((prod) => prod.id === parseInt(id)));
			})
			.finally(() => {
				setLoading(false);
			});
	}, [id]);

	return (
		<div className="dFlex productsDiv">
			{loading ? <h2>Cargando producto</h2> : <ItemDetail {...item} />}
		</div>
	);
};
