import { useState, useMemo, useEffect } from "react";
import MarkedItem from "./marked-item";
import styled from "styled-components";

export default function Result({ items, onSelected, query, onResultCalculated }) {
	const [result, setResult] = useState([]);
	const filteredItems = useMemo( () => findMatch(items, query), [items, query] );

	useEffect(() => { 
		onResultCalculated(result);
	}, [result]);

	function findMatch(items, query) {
		const res = items.filter((i) => {
			return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
		});
		setResult(res);
		return res;
	}

	return(
		<div>
			{ query !== "" ? filteredItems.map((item) => (
				<MarkedItem key={ item.id } item={ item } query={ query } onClick={ onSelected } />
			)) : ""}
		</div>
	);
}