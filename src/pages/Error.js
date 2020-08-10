import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error container-fluid d-flex">
            <div className="row justify-content-center align-items-center">
                <div className="container text-center">
                    <h5 className="pb-5">Oops! Looks like you've reached a page that no longer exists...</h5>
                    <Button>
                        <Link to="/">
                            <p className="mb-0">Back to products</p>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Error;