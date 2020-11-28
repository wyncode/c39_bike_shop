import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
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
import Navigation from './components/navigation';
import Profile from './pages/profile';
import ShopOwner from './pages/ShopOwner';
import BikeControl from './pages/BikeControl';
import CreateCyclist from './pages/CreateCyclist';
import CreateBikeShop from './pages/CreateBikeshop';
import Events from './pages/Events';
import Trails from './pages/Trails';
import Community from './pages/Community';
import AboutUs from './components/AboutUs';
import RepairTracker from './pages/RepairTracker';

const App = () => {
  return (
    // Navbar goes betwen BrowserRouter and Switch
    <AppContextProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/trails" component={Trails} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/events" component={Events} />
          <PrivateRoute exact path="/repairs/:id" component={Repairs} />
          <Route exact path="/shoplist" component={Shoplist} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/confirmation" component={Confirmation} />
          <Route exact path="/bikeshoppdp/:id" component={BikeShopPDP} />
          <PrivateRoute exact path="/appointment" component={Appointment} />
          <PrivateRoute exact path="/summary" component={Summary} />
          <PrivateRoute exact path="/cyclist" component={CreateCyclist} />
          <PrivateRoute exact path="/bikeShop" component={CreateBikeShop} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/shopOwner" component={ShopOwner} />
          <PrivateRoute exact path="/bikeControl" component={BikeControl} />
          <PrivateRoute exact path="/repairTracker" component={RepairTracker} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
    //social media component goes between switch and browser router
  );
};

export default App;
