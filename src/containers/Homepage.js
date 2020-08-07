import React, { Component } from 'react';
import Navbar from '../components/Nav';
import background from "../assets/top half background.png";
import ideation from "../assets/ideation.png"
import graphics from "../assets/graphics1.png"
import graphics2 from "../assets/graphics2.png"
import CAD from "../assets/CAD.png"
import "../App.css"

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={{width:'100vw', backgroundColor:'#a6a6aa',position:'absolute',zIndex:'-3'}} >

        <div style={{width:'100vw', backgroundColor:'#a6a6aa'}}>
          <div  style={{width:'100%', height:'100%', backgroundColor:'#a6a6aa', position:'absolute',zIndex:'-2'}}></div>
        <img src={background} alt="" style={{position:'absolute', zIndex:'-1', width:'100%'}} className="topbackgroundImage"/>
        </div>
        <Navbar/>
        <div style={{width:'100vw', marginTop:'4%'}} className="d-flex justify-content-center">
          <div style={{width:'70%', height:'60vh'}}>

          </div>

        </div>

        <div style={{width:'100vw', marginTop:'4%'}} className="d-flex justify-content-center">
          <div style={{width:'75%', height:'', backgroundColor:'rgba(0,0,0,0.2)',backgroundImage: `url("${graphics2}")`, padding:'2%', backgroundSize:'100% 100%', borderRadius:'30px', boxShadow: '5px 5px 5px grey'}} className="d-flex flex-row justify-content-center">
            <div style={{width:'15%',paddingTop:'3%'}} className="d-flex justify-content-center">
              <h1 className="Number" style={{color:'#03a3a3'}}>01</h1>
            </div>
            <div style={{width:'55%', borderLeft:"10px solid #03a3a3", padding:"1%"}} className="d-flex flex-column">
              <div className="" style={{paddingLeft:'5%', paddingTop:'15%'}}>
                <h1 className="title">IDEATION.</h1>
              </div>
              <div style={{paddingLeft:'20%'}}>
                <h6 className="titledescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
              </div>
            </div>
            <div style={{width:'30%'}}>
              <img src={ideation} alt="" style={{width:'100%'}}/>
            </div>
          </div>

        </div>

        <div style={{width:'100vw', marginTop:'4%'}} className="d-flex justify-content-center">
        <div style={{width:'75%', height:'', backgroundColor:'rgba(0,0,0,0.2)', padding:'2%', borderRadius:'30px', backgroundImage: `url("${graphics2}")`,backgroundSize:'100% 100%', boxShadow: '5px 5px 5px grey' }} className="d-flex flex-row justify-content-center">
            <div style={{width:'15%',paddingTop:'3%'}} className="d-flex justify-content-center">
              <h1 className="Number" style={{color:'#093b66'}}>02</h1>
            </div>
            <div style={{width:'55%', borderLeft:"10px solid #093b66", padding:"1%"}} className="d-flex flex-column">
              <div className="" style={{paddingLeft:'5%', paddingTop:'15%'}}>
                <h1 className="title">CAD.</h1>
              </div>
              <div style={{paddingLeft:'20%'}}>
                <h6 className="titledescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
              </div>
            </div>
            <div style={{width:'30%'}}>
              <img src={CAD} alt="" style={{width:'100%'}}/>
            </div>
          </div>

        </div>

        <div style={{width:'100vw', marginTop:'4%'}} className="d-flex justify-content-center">
          <div style={{width:'70%', height:'40vh', backgroundColor:'black'}}>

          </div>

        </div>

        <div style={{width:'100vw', marginTop:'4%'}} className="d-flex justify-content-center">
          <div style={{width:'70%', height:'40vh', backgroundColor:'black'}}>

          </div>

        </div>

        <div style={{width:'100vw', marginTop:'4%'}} className="d-flex justify-content-center">
          <div style={{width:'70%', height:'40vh', backgroundColor:'black'}}>

          </div>

        </div>


      </div>
    );
  }
}

export default Homepage;