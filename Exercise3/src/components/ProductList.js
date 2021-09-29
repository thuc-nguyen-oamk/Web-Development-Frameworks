import React from 'react';
import Product from './Product';
import styles from './ProductList.module.css'

export default function ProductList(props) {
  return (
    <div className={styles.productList}>
      <div className={styles.grid}>
        {props.products.map((item, index) => <Product {...item} key={index} />)}
      </div>
    </div>
  )
}
