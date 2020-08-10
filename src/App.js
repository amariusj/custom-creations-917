import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Cart />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:parameter" component={SingleProduct} />
        <Route component={Error} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
