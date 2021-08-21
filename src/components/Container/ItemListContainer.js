import React, { useEffect, useState } from "react";
import "../../assets/css/temporary.css";
import { ItemList } from "./ItemList";
import { getProducts } from "../../utils/getProducts";

export const ItemListContainer = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		getProducts()
			.then((res) => setData(res))
			.catch((err) => console.log(err))
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<>
			{loading ? <h2>Cargando productos...</h2> : <ItemList products={data} />}
		</>
	);
};
