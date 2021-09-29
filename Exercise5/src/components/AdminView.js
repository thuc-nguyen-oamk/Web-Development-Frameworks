import axios from 'axios'
import React from 'react'
import FormAddNewProduct from './FormAddNewProduct';

export default function AdminView(props) {
  const handleDelete = (id, productNumber) => {
    if (window.confirm('Product number ' + productNumber + ' will be deleted. OK?')) {
      axios.delete('http://localhost:4000/products/' + id)
        .then(response => {
          if (response.status === 200) {
            props.getDataAndUpdateAppState();
          }
        })
    }
  }

  const showFormAddNewProduct = () => {
    document.querySelector('.modal').style.display = 'block';
  }

  const formatPriceGeneral = number => (Number(number) / 100).toFixed(2);

  return (
    <div>
      <h1>Products
        <span onClick={showFormAddNewProduct}>
          <i className="fas fa-plus"></i>
        </span>
      </h1>
      <table>
        <thead>
          <tr>
            <th rowSpan="2">ID</th>
            <th rowSpan="2">Best Seller?</th>
            <th rowSpan="2">Image</th>
            <th rowSpan="2">Product Name</th>
            <th rowSpan="2">Manufacturer</th>
            <th rowSpan="2">Category</th>
            <th rowSpan="2">Rating</th>
            <th rowSpan="2">Number of voters</th>
            <th rowSpan="2">Current Price</th>
            <th rowSpan="2">Original Price</th>
            <th rowSpan="2">Shipping Date</th>
            <th rowSpan="2">Shipping Fee</th>
            <th rowSpan="2">Amazon Certified</th>
            <th colSpan="2">More Buying Choices</th>
          </tr>
          <tr>
            <th rowSpan="2">Lowest Price</th>
            <th rowSpan="2">Total Offers</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => {
            return <tr key={index}>
              <td><div>{index + 1}</div></td>
              <td><div>{product.isBestSeller ? 'yes' : ''}</div></td>
              <td><div><img src={product.image ? "/images/" + product.image : "images/productplaceholder.jpg"} alt="product" /></div></td>
              <td><div>{product.name}</div></td>
              <td><div>{product.manufacturer}</div></td>
              <td><div>{product.category}</div></td>
              <td><div>{product.rating}</div></td>
              <td><div>{product.voter}</div></td>
              <td><div>{formatPriceGeneral(product.price)}</div></td>
              <td><div>{product.price0 ? formatPriceGeneral(product.price0) : null}</div></td>
              <td><div>{product.shipDate}</div></td>
              <td><div>{product.shipFee ? formatPriceGeneral(product.shipFee) : null}</div></td>
              <td><div>{product.cert}</div></td>
              <td><div>{product.morePricesLowest ? formatPriceGeneral(product.morePricesLowest) : null}</div></td>
              <td><div>{product.morePricesCount}</div></td>
              <td onClick={() => handleDelete(product.id, index + 1)}><i className="fas fa-trash"></i></td>
            </tr>
          })}
        </tbody>
      </table>
      <FormAddNewProduct getDataAndUpdateAppState={props.getDataAndUpdateAppState} />
    </div>
  )
}
