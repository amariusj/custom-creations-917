import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const Product = ({product}) => {

    const { img, price, title, parameter } = product;

    return (
        <div className="col-12 col-md-6 col-lg-4 p-5 text-capitalize">
            <div className="row">
                <Link to={`product/${parameter}`}>
                    <img src={img} alt="product" className="img-fluid bordered"></img>
                </Link>
            </div>
            <div className="row pt-3">
                <p className="product-name">{title}</p>
            </div>
            <div className="row pt-4 justify-content-between">
                <p className="product-price align-bottom mb-0">${price}</p>
                <Link to={`product/${parameter}`}>
                    <Button>View Product</Button>
                </Link>
            </div>
        </div>
    );
};

export default Product;