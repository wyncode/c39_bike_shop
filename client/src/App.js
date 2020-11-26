import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Confirmation from './pages/Confirmation';
import Shoplist from './pages/Shoplist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Repairs from './pages/Repairs';
import BikeShopPDP from './pages/BikeShopPDP';
import Appointment from './pages/Appointment';
import Summary from './pages/Summary';
import './App.css';
import RepairPopUp from './components/RepairPopUp';
import Navigation from './components/navigation';

import Profile from './pages/profile';

import ShopOwner from './pages/ShopOwner';
import BikeControl from './pages/BikeControl';
import CreateCyclist from './pages/CreateCyclist';
import CreateBikeShop from './pages/CreateBikeshop';

const App = () => {
  return (
    // Navbar goes betwen BrowserRouter and Switch
    <AppContextProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Repairs/:id" component={Repairs} />
          <Route exact path="/Shoplist" component={Shoplist} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Confirmation" component={Confirmation} />
          <Route exact path="/BikeShopPDP/:id" component={BikeShopPDP} />
          <Route exact path="/Appointment" component={Appointment} />
          <Route exact path="/Summary" component={Summary} />
          <Route exact path="/RepairsPop" component={RepairPopUp} />
          <Route exact path="/Cyclist" component={CreateCyclist} />
          <Route exact path="/BikeShop" component={CreateBikeShop} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/ShopOwner" component={ShopOwner} />
          <Route exact path="/BikeControl" component={BikeControl} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
    //social media component goes between switch and browser router
  );
};

export default App;
