import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Consumer } from '../context';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Consumer>
            {({ openCart }) => {
                return(
                    <div className="my-navbar">
                        <nav className="navbar pt-3">
                            <Link to="/" className="noStyle">
                                <span className="navbar-brand mb-0 h1">CustomCreations917</span>
                            </Link>
                            <button className="cart-button">
                                <FaShoppingCart className="cart-icon" onClick={() => openCart()} />
                            </button>
                        </nav>
                    </div>
                )
            }}
        </Consumer>
    );
}

export default Navbar;