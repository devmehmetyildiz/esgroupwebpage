import React from 'react';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Home from "./Components/Pages/Home"
import Products from "./Components/Pages/Products"
import Corporate from "./Components/Pages/Corporate"
import Catalog from "./Components/Pages/Catalog"
import Contact from "./Components/Pages/Contact"
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Corporate" component={Corporate} />
        <Route exact path="/Catalog" component={Catalog} />
        <Route exact path="/Contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default withRouter(App);
