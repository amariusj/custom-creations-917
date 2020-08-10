import React from 'react';
import { Consumer } from '../context';

const Jumbotron = () => {
    return(
        <Consumer>
            {({ bio }) => {

                const { description, image, title } = bio;

                return (
                    <div className="my-jumbotron">
                        <div className="jumbotron jumbotron-fluid bg-lightGreen mb-0">
                            <div className="container text-center">
                                <div className="row justify-content-center py-5">
                                    <img className="img-fluid round" src={image} alt="bio"></img>
                                </div>
                                <h3 className="display-5 pt-2">{title}</h3>
                                <p className="lead py-5">{description}</p>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Consumer>
        );
};

export default Jumbotron;