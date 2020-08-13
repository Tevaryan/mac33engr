import React, { Component } from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import background from "../assets/top half background.png";
import "../App.css"

class AboutUspage extends Component {
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
        <h1>About Us</h1>
        
        <Footer/>
      </div>
    );
  }
}

export default AboutUspage;