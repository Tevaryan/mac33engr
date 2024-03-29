import React, { Component } from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import background from "../assets/otherpages.png";
import text from "../assets/ourServices.png"
import twoD1 from "../assets/2D1 copy.jpg"
import graphics2 from "../assets/graphics2.png"
import threeDprinting from "../assets/servicetab1.jpg"
import CAD from "../assets/servicetab2.jpg"
import {Link} from "react-router-dom";

import "../App.css"

class Servicespage extends Component {
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


          <div style={{width:'100vw', marginTop:'5%'}} className="d-flex justify-content-center">
              <Link to={`/CAD`} style={{textDecoration: 'none', width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)',backgroundImage: `url("${CAD}")`, padding:'2%', backgroundSize:'100% ', borderRadius:'30px'}} className="servicepage-box d-flex flex-row justify-content-center">
                <div style={{width:'80%', padding:"4%"}} className="d-flex flex-column">
                  <div className="" style={{paddingLeft:'5%'}}>
                    <h1 className="title" style={{color:"#2ea3f2"}}>CAD.</h1>
                  </div>
                  <div style={{paddingLeft:'20%'}}>
                    <h6 className="titledescription" style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                  </div>
                </div>
              </Link>
            </div>

            <div style={{width:'100vw', marginTop:'5%'}} className="d-flex justify-content-center">
              <Link to={`/3Dprinting`} style={{textDecoration: 'none', width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)',backgroundImage: `url("${threeDprinting}")`, padding:'2%', backgroundSize:'100% ', borderRadius:'30px'}} className="servicepage-box d-flex flex-row justify-content-center">
                <div style={{width:'80%', padding:"4%"}} className="d-flex flex-column">
                  <div className="" style={{paddingLeft:'5%'}}>
                    <h1 className="title" style={{color:"#2ea3f2"}}>3D Printing.</h1>
                  </div>
                  <div style={{paddingLeft:'20%'}}>
                    <h6 className="titledescription" style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                  </div>
                </div>
              </Link>
            </div>

            <div style={{width:'100vw', marginTop:'5%'}} className="d-flex justify-content-center">
              <Link to={`/Manufacturing`} style={{textDecoration: 'none', width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)',backgroundImage: `url("${CAD}")`, padding:'2%', backgroundSize:'100% ', borderRadius:'30px'}} className="servicepage-box d-flex flex-row justify-content-center">
                <div style={{width:'80%', padding:"4%"}} className="d-flex flex-column">
                  <div className="" style={{paddingLeft:'5%'}}>
                    <h1 className="title" style={{color:"#2ea3f2"}}>Manufacturing.</h1>
                  </div>
                  <div style={{paddingLeft:'20%'}}>
                    <h6 className="titledescription" style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                  </div>
                </div>
              </Link>
            </div>

        </div>
        <Footer/>
      </div>
    );
  }
}

export default Servicespage;