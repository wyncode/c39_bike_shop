import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
// import Shoplist from './pages/Shoplist';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Repairs from './pages/Repairs';
// // import BikeShopPDP from './pages/BikeShopPDP';
// import Appointment from './Pages/Appointment';
import './App.css';

const App = () => {
  return (
    // Navbar goes betwen BrowserRouter and Switch
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/Repairs" component={Repairs} />
          <Route exact path="/Shoplist" component={Shoplist} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/BikeShopPDP" component={BikeShopPDP} />
          <Route exact path="/Appointment" component={Appointment} /> */}
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
    //social media component goes between switch and browser router
  );
};

export default App;
