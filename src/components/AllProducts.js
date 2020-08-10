import React from 'react';
import Product from './Product';
import { Consumer } from '../context';

const AllProducts = () => {
    return (
        <Consumer>
            {({ products }) => {

                return (
                    <div className="bg-darkGreen text-white py-5 px-2">
                        <div className="container mx-auto">
                            <div className="row justify-content-center text-center align-items-center pb-5">
                                <h4 className="title">Shop</h4>
                            </div>
                            <div className="row justify-content-center">
                                {products.map((product) => {
                                    return(
                                        <Product key={product.id} product={product} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    );
};



export default AllProducts;