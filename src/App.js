import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/interface/Header';
import Categoria from './pages/Categoria';
import Produto from './pages/Produto';

import CartProvider from "./store/CartContext"

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/categoria/:id">
              <Categoria />
            </Route>
            <Route path="/produto/:id">
              <Produto />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
