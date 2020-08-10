import React, { Component } from 'react';
import { products, bio } from './data';

const Context = React.createContext();

class Provider extends Component {

    state = {
        products: [],
        bio: {},
        cart: [],
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
        loading: true,
        isOpen: false,
        detailProduct: {}
    };

    componentDidMount() {
        this.getData();
    }

    openCart = (id) => {
        const cart = document.querySelector('.cart');
        console.log(id);

        if ( id === undefined ) {
            if ( this.state.isOpen === false ) {
                this.setState(() => {
                    return {
                        isOpen: true
                    }
                });
                cart.classList.add('open');
    
            } else {
                this.setState(() => {
                    return {
                        isOpen: false
                    }
                });
                cart.classList.remove('open');
            }
        } else {
            if ( this.state.isOpen === false ) {
                this.setState(() => {
                    return {
                        isOpen: true
                    }
                });
                cart.classList.add('open');
            }
        }
    }

    getData = () => {
        let allData = this.formatData(products, bio);
        this.setState(() => {
            return {
                products: allData[0],
                loading: false,
                bio: allData[1]
            }
        })
    }

    formatData = (productData, bioData) => {
        let tempProducts = productData.map( product => {
            let id = product.sys.id;
            let productObject = {
                ...product.fields,
                id
            };

            return productObject
        });

        let tempBio = bioData[0];
        let bioObject = {
            id: tempBio.sys.id,
            description: tempBio.fields.description,
            image: tempBio.fields.image,
            title: tempBio.fields.title
        }

        return [
            tempProducts,
            bioObject
        ];
    }

    getItem = (id) => {
        const product = this.state.products.find( product => product.id === id );
        return product
    }

    getProductPage = (parameter) => {
        let tempProducts = [...this.state.products];
        const product = tempProducts.find( product => product.parameter === parameter);
        return product
    }
    
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];

        product.inCart = true;
        product.quantity = 1;
        const price = product.price;
        product.total = price;

        console.log(process.env);

        this.openCart(id);

        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        }, () => {
            this.addTotals(id)
        });
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter( item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.quantity = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => {
            this.addTotals(id)
        });
    }

    incrementItem = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find( item => item.id === id );
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.quantity += 1;
        product.total = product.quantity * product.price;

        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => this.addTotals());
    }

    decrementItem = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find( item => item.id === id );
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.quantity -= 1;

        if (product.quantity === 0) {

            this.removeItem(id)

        } else {
            product.total = product.quantity * product.price;
            this.setState(() => {
                return{
                    cart: [...tempCart]
                }
            }, () => this.addTotals());
        }
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] }
        }, () => {
            this.getData();
            this.addTotals();
        });
    }

    addTotals = (id) => {
        let subTotal = 0;

        this.state.cart.map( item => {
            console.log(item);
            return subTotal += item.total
        });

        //console.log(subTotal);
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;

        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        });
    }

    setRefresh = () => {
        this.setState(() => {
            return {
                refresh: true
            }
        });

        console.log(this.state.refresh);
    }

    render() {
        return(
            <Context.Provider value={{
                ...this.state,
                getData: this.getData,
                openCart: this.openCart,
                getProductPage: this.getProductPage,
                addToCart: this.addToCart,
                removeItem: this.removeItem,
                incrementItem: this.incrementItem,
                decrementItem: this.decrementItem,
                clearCart: this.clearCart,
                addTotals: this.addTotals,
                setRefresh: this.setRefresh
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

const Consumer = Context.Consumer;

export { Provider, Consumer, Context }