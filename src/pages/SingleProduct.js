import React, { Component } from 'react';
import { Button } from '../components/Button';
import { FaArrowLeft } from 'react-icons/fa';
import { Context } from '../context';
import { Link } from 'react-router-dom';

class SingleProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            parameter: this.props.match.params.parameter
        };
    }

    static contextType = Context;

    render() {

        const { getProductPage, addToCart } = this.context;
        const product = getProductPage(this.state.parameter);

        if (!product) {
            return(
                <div className="error">
                    <h3>No such product could be found...</h3>
                    <Button>
                        <Link to="/">back to products</Link>
                    </Button>
                </div>
            );
        }

        const { title, img, price, id, size, inCart } = product;

        return (
            <div className="product-container bg-darkGreen text-white text-capitalize">
                <div className="container">
                    <div className="row">
                        <Link to="/" className="arrow p-4">
                            <FaArrowLeft />
                        </Link>
                    </div>
                    <div className="row flex-column align-items-center">
                        <div className="col text-center py-3">
                            <h4>{title}</h4>
                        </div>
                        <div className="col-10 col-md-6 col-lg-4 py-3">
                            <img src={img} alt="product" className="img-fluid"></img>
                        </div>
                        <div className="col-10 col-md-6 col-lg-4 pt-3">
                            <h5>${price}</h5>
                            <h5>please choose below:</h5>
                            <form className="pt-3">
                                <div className="form-group py-2">
                                    { 
                                        size ? <select className="form-control bg-white text-capitalize my-2 text-black">
                                        {
                                            size.map( item => {
                                                return <option>{item}</option>
                                            })
                                        }
                                    </select> : null
                                    }
                                    <button type="button" class="btn bg-white btn-block my-4" disabled={ inCart ? true : false }  onClick={() => addToCart(id)}>
                                        {
                                            inCart ? <p className="mb-0 text-capitalize" disabled>in cart</p> : "Add to cart"
                                        }
                                    </button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

                            // <div className="col d-flex justify-content-between bg-white text-black mb-5 quantity-container align-items-center py-1 px-5">
                            //     <span className="minus" onClick={() => decrementItem(id)}>-</span>
                            //     <p className="mb-0 quantity-number">{quantity}</p>
                            //     <span className="plus" onClick={() => incrementItem(id)}>+</span>
                            // </div>

export default SingleProduct;