import React from 'react';
import Jumbotron from '../components/Jumbotron';
import AllProducts from '../components/AllProducts';
import { Consumer } from '../context';
import loadingArrow from '../images/gif/loading-arrow.gif';

const Home = () => {
    return (
        <Consumer>
            {({ loading }) => {
                return(
                    <>
                        <Jumbotron />
                        { 
                            loading ?
                            <img src={loadingArrow} alt="loading"></img>
                            :
                            <AllProducts />
                        }
                    </>
                )
            }}
        </Consumer>
    );
};

export default Home;