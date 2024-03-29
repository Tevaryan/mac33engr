import React, { Component } from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import background from "../assets/otherpages.png";
import text from "../assets/OurPortfolio.png"
import twoD1 from "../assets/2D1 copy.jpg"
import "../App.css"

class Portfoliopage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='page-container' style={{width:'100vw', backgroundImage: `url("${twoD1}")`,position:'absolute',zIndex:'-3'}}>
        <div className='content-wrap'>
          <div style={{width:'100vw', backgroundColor:'#a6a6aa',backgroundImage: `url("${twoD1}")`}}>
            <div  style={{width:'100%', height:'100%', backgroundColor:'#a6a6aa', backgroundImage: `url("${twoD1}")`, position:'absolute',zIndex:'-2'}}></div>
          <img src={background} alt="" style={{position:'absolute', zIndex:'-1', width:'100%'}} className="topbackgroundImage"/>
          </div>
          <Navbar/>

          <div style={{width:'100vw', height:'45vh'}} className="d-flex justify-content-center flex-column">
            <div style={{width:'100vw', height:'40vh'}} className="d-flex justify-content-center">
            <div style={{width:'60%', height:'100%'}} className="d-flex justify-content-center align-items-center">
            <img src={text} alt="" style={{width:'100%'}}/>
            </div>
            </div>
          </div>

        </div>
        <Footer/>
      </div>
    );
  }
}

export default Portfoliopage;