import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShopList from './pages/ShopList';
import Login from './pages/Login';

import './App.css';

const App = () => {
  return (
    // Navbar goes here
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Shoplist" component={ShopList} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
    //social media component goes here
  );
};

export default App;
