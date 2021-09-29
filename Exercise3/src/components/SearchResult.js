import React, { useState } from 'react';
import ProductList from './ProductList';

const styles = {
  marginTop: "50px",
  fontWeight: "bold",
}

function SearchResult(props) {
  const [searchString, setSearchString] = useState("");

  const handleChange = (event) => {
    setSearchString(event.target.value);
  }

  return (
    <>
      <div style={styles}>
        Search for products: <input type="search" onChange={handleChange} value={searchString}></input>
      </div>
      <ProductList
        products={props.products.filter(product => {
          return product.name.toLowerCase().includes(searchString.toLocaleLowerCase());
        })}
      />
    </>
  )
}

export default SearchResult;