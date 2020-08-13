import React, { Component } from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import background from "../assets/top half background.png";
import "../App.css"

class Portfoliopage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div style={{width:'100vw'}}>
        <img src={background} alt="" style={{position:'absolute', zIndex:'-1', width:'100%'}} className="topbackgroundImage"/>
        </div>
        <Navbar/>
        <h1>Portfolio page</h1>
        
        <Footer/>
      </div>
    );
  }
}

export default Portfoliopage;