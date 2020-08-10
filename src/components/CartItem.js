import React from 'react';

const CartItem = ({ product, incrementItem, decrementItem }) => {

    const { img, title, price, quantity, id } = product;

    return (
        <>
            <div className="col-7 my-2">
                <img className="img-fluid bordered" src={img} alt="product" />
            </div>
            <div className="col p-0 text-center">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center text-capitalize">
                            <p className="details mb-0">{title}</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="row quantity-container bg-yellow align-items-center">
                                <div className="col">
                                    <span className="minus" onClick={() => decrementItem(id)}>-</span>
                                </div>
                                <div className="col">
                                    <p className="details mb-0 text-black quantity-number">{quantity}</p>
                                </div>
                                <div className="col">
                                    <span className="plus" onClick={() => incrementItem(id)}>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <p className="details mb-0">Price: ${price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;