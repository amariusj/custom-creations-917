import React from 'react';
import CartItem from './CartItem';
import { FaTimes } from 'react-icons/fa';
import { Consumer } from '../context';
import PayPalButton from './PayPalButton';

const Cart = () => {
    return (
        <Consumer>
            {({ openCart, cart, incrementItem, decrementItem, cartSubtotal, cartTax, cartTotal, clearCart }) => {
                return(
                    <div className="bg-green cart">
                        <div className="container text-white">
                            {
                                cart.length === 0 ?
                                <>
                                    <div className="col cart-header pb-3">
                                        <div className="row justify-content-end pt-4 pr-3">
                                            <button className="cart-button">
                                                <FaTimes className="cart-close-icon" onClick={() => openCart()} />
                                            </button>
                                        </div>
                                    </div>
                                    <h5 className="text-center mt-5 pt-5">Your Cart is Empty!</h5> 
                                </>
                                :
                                <div className="row flex-column">
                                    <div className="col cart-header pb-3">
                                        <div className="row justify-content-end pt-4 pr-3">
                                            <button className="cart-button">
                                                <FaTimes className="cart-close-icon" onClick={() => openCart()} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col p-4">
                                        <div className="row">
                                            { cart.map( item => {
                                                return <CartItem product={item} key={item.id} incrementItem={incrementItem} decrementItem={decrementItem} />
                                            }) }
                                        </div>
                                    </div>
                                    <div className="col align-bottom pt-5 mt-5 px-3 pricing">
                                        <div className="row pl-4 justify-content-between">
                                            <div className="col-4">
                                                <p>Subtotal:</p>
                                            </div>
                                            <div className="col-4">
                                                {cartSubtotal}
                                            </div>
                                        </div>
                                        <div className="row pl-4 justify-content-between">
                                            <div className="col-4">
                                                <p>Tax:</p>
                                            </div>
                                            <div className="col-4">
                                                {cartTax}
                                            </div>
                                        </div>
                                        <div className="row pl-4 justify-content-between">
                                            <div className="col-4">
                                                <p>Total:</p>
                                            </div>
                                            <div className="col-4">
                                                {cartTotal}
                                            </div>
                                        </div>
                                        { cart.length === 0 ? null : <div className="row justify-content-end">
                                            <div className="py-3 pr-3">
                                                <PayPalButton clearCart={clearCart} total={cartTotal} />
                                            </div>
                                        </div> }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                )
            }}
        </Consumer>
    );
};

export default Cart;