import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shoplist from './pages/Shoplist';
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.css';

const App = () => {
  return (
    // Navbar goes here
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Shoplist" component={Shoplist} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
    //social media component goes here
  );
};

export default App;
