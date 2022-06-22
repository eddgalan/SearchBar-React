import { useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import Results from "./result";

export default function SearchBar({ items, onSelected }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
  }

  function handleResults(items) {
    setResults(items);
  }

	function handleItemSelected() {

	}

  return (
		<div>
			{results && <div>{results.length} results</div>}
			<input type="text" onChange={ handleChange } value={ query } />
			<Results
        items={items}
        query={query}
        onItemSelected={ handleItemSelected }
        onResultCalculated={handleResults}
      />
		</div>
  );
}