import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Homepage from "./containers/Homepage.js"
import AboutUspage from "./containers/AboutUspage.js"
import Portfoliopage from "./containers/Portfoliopage.js"
import Servicespage from "./containers/Servicespage.js"
import ContactUspage from "./containers/ContactUspage.js"
import threeDprinting from "./containers/threeDprinting.js"
import './App.css';

class App extends Component {

  render()
  {
    return (
      <>
        <Route exact path ={'/'} component={Homepage}/>
        <Route exact path ={'/Services'} component={Servicespage}/>
        <Route exact path ={'/3Dprinting'} component={threeDprinting}/>
        <Route exact path ={'/Portfolio'} component={Portfoliopage}/>
        <Route exact path ={'/AboutUs'} component={AboutUspage}/>
        <Route exact path ={'/ContactUs'} component={ContactUspage}/>
      </>
    )
  }
}

export default App;
