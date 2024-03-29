import React, { Component } from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import background from "../assets/otherpages.png";
import text from "../assets/CADservices.png"
import twoD1 from "../assets/2D1 copy.jpg"
import logo from "../assets/simulation_testing/sw logo.png"
import graphics2 from "../assets/graphics2.png"
import threeDprinting from "../assets/servicetab1.jpg"
import CAD from "../assets/servicetab2.jpg";
import one from "../assets/simulation_testing/image-1.jpg"
import two from "../assets/simulation_testing/image-2.jpg"
import three from "../assets/simulation_testing/image-3.jpg"
import four from "../assets/simulation_testing/image-4.jpg"
import five from "../assets/simulation_testing/image-5.png"
import six from "../assets/simulation_testing/image-6.jpg"
import seven from "../assets/simulation_testing/image-7.jpg"
import StackGrid from "react-stack-grid";



import "../App.css"

class cad extends Component {
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
            <div  style={{width:'100%', height:'100%', backgroundColor:'#fafafa', position:'absolute',zIndex:'-2'}}></div>
          <img src={background} alt="" style={{position:'absolute', zIndex:'-1', width:'100%'}} className="topbackgroundImage"/>
          </div>


          <Navbar/>
          <div style={{width:'100vw', height:'45vh'}} className="d-flex justify-content-center flex-column">
            <div style={{width:'100%', height:'100%'}} className="d-flex justify-content-center">
            <div style={{width:'70%', height:'100%'}} className="d-flex justify-content-center align-items-center">
            <img src={text} alt="" style={{width:'100%'}}/>
            </div>
            </div>
          </div>

          <div style={{width:'100vw'}} className="d-flex justify-content-center">
            <div style={{width:'70%', padding:'2%', backgroundSize:'100% '}} className="d-flex flex-column justify-content-center">
              <div style={{width:'100%'}} className="d-flex flex-row">
                <div style={{width:'30%', padding:"4%"}}>
                <img src={logo} alt="" style={{width:'100%'}}/>
                </div>
              <div style={{width:'70%', padding:"4%"}} className="d-flex flex-column">
                <div className="" style={{paddingLeft:'5%'}}>
                  <h1 className="title" style={{color:"#2ea3f2"}}>Testing.</h1>
                </div>
                <div style={{paddingLeft:'20%'}}>
                  <h6 className="titledescription" style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                </div>
              </div>
              </div>
              <div style={{paddingLeft:'2%'}}>
                <StackGrid
                columnWidth={200}
                gutterWidth={10}
                gutterHeight={10}
                monitorImagesLoaded="true">
                    <div key="key1" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}} className="p-3">
                      <img src={one} alt="" style={{width:'100%'}}/>
                    </div>
                    <div key="key2" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}}
                    className="p-3">
                      <img src={two} alt="" style={{width:'100%'}}/>
                    </div>
                    <div key="key3" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}}
                    className="p-3">
                      <img src={three} alt="" style={{width:'100%'}}/>
                    </div>
                    <div key="key4" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}}
                    className="p-3">
                      <img src={four} alt="" style={{width:'100%'}}/>
                    </div>
                    <div key="key5" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}}
                    className="p-3">
                      <img src={five} alt="" style={{width:'100%'}}/>
                    </div>
                    <div key="key6" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}}
                    className="p-3">
                      <img src={six} alt="" style={{width:'100%'}}/>
                    </div>
                    <div key="key7" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}}
                    className="p-3">
                      <img src={seven} alt="" style={{width:'100%'}}/>
                    </div>
                  </StackGrid>
              </div>

            </div>
          </div>

          <div style={{width:'100vw'}} className="d-flex justify-content-center">
            <div style={{width:'70%', padding:'2%', marginTop:'2%', backgroundSize:'100%'}} className="d-flex flex-column justify-content-center">
              <div style={{width:'100%'}} className="d-flex flex-row">
                <div style={{width:'30%', padding:"4%"}}>
                <img src={logo} alt="" style={{width:'100%'}}/>
                </div>
              <div style={{width:'70%', padding:"4%"}} className="d-flex flex-column">
                <div className="" style={{paddingLeft:'5%'}}>
                  <h1 className="title" style={{color:"#2ea3f2"}}>Simulations.</h1>
                </div>
                <div style={{paddingLeft:'20%'}}>
                  <h6 className="titledescription" style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                </div>
              </div>
              </div>
              <div style={{paddingLeft:'2%'}}>
                <div>
                <StackGrid
                columnWidth={200}
                gutterWidth={10}
                gutterHeight={10}
                monitorImagesLoaded="true">
                    <div key="key1" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}} className="p-3">
                      <img src={one} alt="" style={{width:'100%'}}/>
                    </div>
                    <div key="key2" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}}
                    className="p-3">
                      <img src={two} alt="" style={{width:'100%'}}/>
                    </div>
                    <div key="key3" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}}
                    className="p-3">
                      <img src={three} alt="" style={{width:'100%'}}/>
                    </div>
                    <div key="key4" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}}
                    className="p-3">
                      <img src={four} alt="" style={{width:'100%'}}/>
                    </div>
                    <div key="key5" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}}
                    className="p-3">
                      <img src={five} alt="" style={{width:'100%'}}/>
                    </div>
                    <div key="key6" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}}
                    className="p-3">
                      <img src={six} alt="" style={{width:'100%'}}/>
                    </div>
                    <div key="key7" style={{width:'100%', height:'100%', boxShadow: '5px 5px 5px grey'}}
                    className="p-3">
                      <img src={seven} alt="" style={{width:'100%'}}/>
                    </div>
                  </StackGrid>
                </div>

              </div>

            </div>
          </div>

          {/* <div style={{width:'100vw', marginTop:'5%'}} className="d-flex justify-content-center">
            <div style={{width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)',backgroundImage: `url("${CAD}")`, padding:'2%', backgroundSize:'100% ', borderRadius:'30px', boxShadow: '5px 5px 5px grey'}} className="d-flex flex-row justify-content-center">
              <div style={{width:'80%', padding:"4%"}} className="d-flex flex-column">
                <div className="" style={{paddingLeft:'5%'}}>
                  <h1 className="title" style={{color:"#2ea3f2"}}>CAD.</h1>
                </div>
                <div style={{paddingLeft:'20%'}}>
                  <h6 className="titledescription" style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default cad;