import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Menu from './components/Menu';
import './components/main.css';
import Checkout from './components/Checkout.js';
import Menu1 from './components/Menu1';
import Order from './components/Order';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Menu1} exact />
          <Route path="/checkout" component={Checkout} exact />
          <Route path="/order" component={Order} exact />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
