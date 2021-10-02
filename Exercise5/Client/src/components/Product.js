import React from 'react';
import styles from './Product.module.css';

export default function Product(props) {
    const getRatingStars = rating => {
        if (rating > 4.75) {
            return <><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></>
        } else if (rating > 4.25) {
            return <><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></>
        } else if (rating > 3.75) {
            return <><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></>
        } else if (rating > 3.25) {
            return <><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></>
        } else if (rating > 2.75) {
            return <><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></>
        } else if (rating > 2.25) {
            return <><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></>
        } else if (rating > 1.75) {
            return <><i className="fas fa-star"></i><i className="fas fa-star"></i></>
        } else if (rating > 1.25) {
            return <><i className="fas fa-star"></i><i className="fas fa-star-half"></i></>
        } else if (rating > 0.75) {
            return <><i className="fas fa-star"></i></>
        } else if (rating > 0.25) {
            return <><i className="fas fa-star-half"></i></>
        } else {
            return <><i className="far fa-star"></i></>
        }
    }

    const formatPrice = (price) => {
        if (!price) return '';

        const intPrice = parseInt(price);
        const dollars = Math.floor(intPrice / 100);
        const cents = intPrice % 100 || '';
        return (
            <div className={styles.flex}>
                <span className={styles.cents}>$</span><span>{dollars}</span><span className={styles.cents}>{cents}</span>
            </div>
        )
    }

    const formatPrice0 = (price0) => {
        return (price0 && price0 !== props.price) ? <div className={styles.price0}>${parseInt(price0) / 100}</div> : null;
    }

    const formatCurrencyGeneral = number => (Number(number) / 100).toFixed(2);

    return (
        <div className={styles.product}>
            <div className={styles.imageContainer}>
                <img src={props.image ? "/images/" + props.image : "images/productplaceholder.jpg"} alt="product" />
            </div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.manufacturer}>
                {props.category ? "[" + props.category + "]" : null}
                {props.manufacturer ? "by " + props.manufacturer : null}
            </div>
            <div className={styles.flex}>
                {getRatingStars(props.rating)}
                <i className="fas fa-angle-down"></i>
                <div className={styles.voter}>
                    {props.voter ? parseInt(props.voter).toLocaleString() : null}
                </div>
            </div>
            <div className={styles.flex}>
                <div className={styles.flex}>
                    {formatPrice(props.price)}
                </div>
                {formatPrice0(props.price0)}
            </div>
            {props.shipDate ? <div className={styles.gray}>
                <span>Get it as soon as </span>
                <span className={styles.bold}>{props.shipDate}</span>
            </div>
                : null
            }
            {props.shipFee ? <div className={styles.gray}>${formatCurrencyGeneral(props.shipFee)} shipping</div> : null}

            {props.morePricesLowest ? <div>
                <div className={styles.gray}>More Buying Choices</div>
                <div>
                    <span>${props.morePricesLowest / 100}</span>
                    <span className={styles.blue}> ({props.morePricesCount} used & new offers)</span>
                </div>
            </div>
                : null}

            {props.cert ? <div>
                <span className={styles.orange}>Amazon Certified: </span>
                <span>{props.cert}</span>
            </div>
                : null}
        </div>
    )
}
