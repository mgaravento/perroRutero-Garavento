import React, { useEffect, useState } from "react";
import "../../assets/css/temporary.css";
import { ItemList } from "./ItemList";
import { getProducts } from "../../utils/getProducts";
import { useParams } from "react-router-dom";
export const ItemListContainer = () => {
	const { cat } = useParams();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		getProducts()
			.then((res) => {
				if (cat) {
					const arrayFiltrado = res.filter((prod) => prod.category === cat);
					setData(arrayFiltrado);
				} else {
					setData(res);
				}
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setLoading(false);
			});
	}, [cat]);

	return (
		<>
			{loading ? <h2>Cargando productos...</h2> : <ItemList products={data} />}
		</>
	);
};
