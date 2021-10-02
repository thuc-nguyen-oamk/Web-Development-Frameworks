import axios from 'axios';
import React from 'react';
import styles from './FormAddNewProduct.module.css';

export default function FormAddNewProduct(props) {
  window.onclick = event => {
    if (event.target === document.querySelector('.modal')) {
      document.querySelector('.modal').style.display = 'none';
    }}

  const hideFormAddNewProduct = () => {
    document.querySelector('.modal').style.display = 'none';
  }

  const submitForm = (e) => {
    const name = document.querySelector('input[name="name"]').value;

    if (!name) {
      alert('Product Name is required');
      return;
    }

    document.querySelector('.modal').style.display = 'none';

    const formData = new FormData(document.querySelector('form.add-new'));
    let obj = {}
    formData.forEach( (value, key) => obj[key] = value);
    obj.isBestSeller = document.querySelector('input[name="isBestSeller"]').checked;

    axios.post('http://localhost:4000/products', obj)
      .then((response) => {
        if (response.status===200) props.getDataAndUpdateAppState();
      })
      .catch((error) => console.log(error))

    e.preventDefault();
  }

  const handlePreviewImage = () => {
    const img = document.querySelector('.preview img');
    const dropdown = document.querySelector('.preview select');
    img.src = dropdown.value ? "/images/" + dropdown.value : "/images/productplaceholder.jpg";
  }

  return (
    <div className="addNewProduct modal">
      <div className="modal-content">
      <span className="close" onClick={hideFormAddNewProduct}>&times;</span>
        <h2>Add New Product</h2>
        <div className="front face">
          <form className="add-new" onSubmit={() => false} >
            <fieldset><input placeholder="Product Name" type="text" name="name" required/></fieldset>
            <fieldset><input type="checkbox" id="bestseller" name="isBestSeller" /><label htmlFor="bestseller"><b>Bestseller</b></label></fieldset>
            <fieldset className="preview">
              <select name="image" onChange={handlePreviewImage}>
                <option value="">Select an image</option>
                <option value="product01.jpg">Image 1</option>
                <option value="product02.jpg">Image 2</option>
                <option value="product03.jpg">Image 3</option>
                <option value="product04.jpg">Image 4</option>
                <option value="product05.jpg">Image 5</option>
                <option value="product06.jpg">Image 6</option>
                <option value="product07.jpg">Image 7</option>
                <option value="product08.jpg">Image 8</option>
                <option value="product09.jpg">Image 9</option>
              </select>
              <img src="/images/productplaceholder.jpg"  alt="product" />
            </fieldset>
            <fieldset><input placeholder="Manufacturer" type="text" name="manufacturer" required/></fieldset>
            <fieldset><input placeholder="Category" type="text" name="category" required/></fieldset>
            <fieldset><input placeholder="Rating" type="number" name="rating" /></fieldset>
            <fieldset><input placeholder="Number of voters" type="number" name="voter" required/></fieldset>
            <fieldset><input placeholder="Current Price" type="number" name="price" /></fieldset>
            <fieldset><input placeholder="Original Price" type="number" name="price0" /></fieldset>
            <fieldset><input placeholder="Shipping Date" type="text" name="shipDate" /></fieldset>
            <fieldset><input placeholder="Shipping Fee" type="number" name="shipFee" /></fieldset>
            <fieldset><input placeholder="Amazon Certified" type="text" name="cert" /></fieldset>
            <label><i>More Buying Choices</i></label>
            <fieldset><input placeholder="Lowest Price" type="number" name="morePricesLowest" /></fieldset>
            <fieldset><input placeholder="Total Offers" type="number" name="morePricesCount" /></fieldset>
            <button className="button" onClick={submitForm}>Submit</button>
          </form>
        </div>
      </div>
    </div>

  )
}
