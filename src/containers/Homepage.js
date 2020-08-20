import React, { Component } from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import background from "../assets/top half background.png";
import ideation from "../assets/ideation.png";
import graphics from "../assets/graphics1.png";
import ThreeD from "../assets/ThreeDprinter.png"
import twoD1 from "../assets/2D1 copy.jpg"
import graphics2 from "../assets/graphics2.png"
import titletext from "../assets/TitleText.png"
import CAD from "../assets/CAD.png"
import { Button } from 'reactstrap';
import "../App.css"
import {Link} from "react-router-dom";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {

     };
  }

  componentDidMount () {
    const secondbackground = document.getElementById("secondbackground");
    
    const div1 = document.getElementById("service-div1");
    const div2 = document.getElementById("service-div2");
    const div3 = document.getElementById("service-div3");
    const div4 = document.getElementById("service-div4");
    const div5 = document.getElementById("service-div5");


    window.addEventListener('scroll', () => {
      
      const div1enterView = div1.getBoundingClientRect().top   < (window.innerHeight/2);
      const div1enterView2 = div1.getBoundingClientRect().bottom  > (window.innerHeight/2);
      
      const div2enterView = div2.getBoundingClientRect().top   < (window.innerHeight/2);
      const div2enterView2 = div2.getBoundingClientRect().bottom  > (window.innerHeight/2);
    
      const div3enterView = div3.getBoundingClientRect().top   < (window.innerHeight/2);
      const div3enterView2 = div3.getBoundingClientRect().bottom  > (window.innerHeight/2);
   
      const div4enterView = div4.getBoundingClientRect().top   < (window.innerHeight/2);
      const div4enterView2 = div4.getBoundingClientRect().bottom  > (window.innerHeight/2);
    
      const div5enterView = div5.getBoundingClientRect().top   < (window.innerHeight/2);
      const div5enterView2 = div5.getBoundingClientRect().bottom  > (window.innerHeight/2);
    
      if (div1enterView && div1enterView2) {
        div1.classList.add('expand');
        div2.classList.add('greyout');
        div3.classList.add('greyout');
        div4.classList.add('greyout');
        div5.classList.add('greyout');
        secondbackground.classList.add('div1');
        secondbackground.classList.remove('goaway');
        secondbackground.classList.remove('div2');
        secondbackground.classList.remove('div3');
        secondbackground.classList.remove('div4');
        secondbackground.classList.remove('div5');
      }
      else if (div2enterView && div2enterView2) {
        div1.classList.add('greyout');
        div2.classList.add('expand');
        div3.classList.add('greyout');
        div4.classList.add('greyout');
        div5.classList.add('greyout');
        secondbackground.classList.add('div2');
        secondbackground.classList.remove('goaway');
        secondbackground.classList.remove('div1');
        secondbackground.classList.remove('div3');
        secondbackground.classList.remove('div4');
        secondbackground.classList.remove('div5');
      }
      else if (div3enterView && div3enterView2) {
        div1.classList.add('greyout');
        div2.classList.add('greyout');
        div3.classList.add('expand');
        div4.classList.add('greyout');
        div5.classList.add('greyout');
        secondbackground.classList.add('div3');
        secondbackground.classList.remove('goaway');
        secondbackground.classList.remove('div1');
        secondbackground.classList.remove('div2');
        secondbackground.classList.remove('div4');
        secondbackground.classList.remove('div5');
      }
      else if (div4enterView && div4enterView2) {
        div1.classList.add('greyout');
        div2.classList.add('greyout');
        div3.classList.add('greyout');
        div4.classList.add('expand');
        div5.classList.add('greyout');
        secondbackground.classList.add('div4');
        secondbackground.classList.remove('goaway');
        secondbackground.classList.remove('div1');
        secondbackground.classList.remove('div2');
        secondbackground.classList.remove('div3');
        secondbackground.classList.remove('div5');
      }
      else if (div5enterView && div5enterView2) {
        div1.classList.add('greyout');
        div2.classList.add('greyout');
        div3.classList.add('greyout');
        div4.classList.add('greyout');
        div5.classList.add('expand');
        secondbackground.classList.add('div5');
        secondbackground.classList.remove('goaway');
        secondbackground.classList.remove('div1');
        secondbackground.classList.remove('div2');
        secondbackground.classList.remove('div3');
        secondbackground.classList.remove('div4');
      }
      else{
        div1.classList.remove('expand','greyout');
        div2.classList.remove('expand','greyout');
        div3.classList.remove('expand','greyout');
        div4.classList.remove('expand','greyout');
        div5.classList.remove('expand','greyout');
        secondbackground.classList.add('goaway');
      }

    })
  }


  render() {
    return (
      <div className='page-container' style={{width:'100vw',position:'absolute',zIndex:'-3'}} >
        <div className = 'content-wrap'>
          <div style={{width:'100vw', backgroundColor:'#a6a6aa'}}>
            <div style={{width:'100%', height:'100%', backgroundColor:'#a6a6aa', position:'absolute',zIndex:'-2'}}></div>
            <div style={{width:'100vw', backgroundColor:'#a6a6aa'}}>
              <div  className = 'mainbackground' style={{width:'100%', height:'100%', backgroundImage: `url("${twoD1}")`, position:'absolute',zIndex:'-2'}}></div>
              <div  id = 'secondbackground' className = 'secondbackground' style={{width:'100%', height:'100%', position:'absolute', zIndex:'-2'}}></div>
              <img src={background} alt="" style={{position:'absolute', zIndex:'-1', width:'100%'}} className="topbackgroundImage"/>
            </div>
          </div>
          
          <Navbar/>

          <div style={{width:'100vw', marginTop:'1%'}} className="d-flex justify-content-center">
            <div style={{width:'70%', height:'60vh'}}>
            <img src={titletext} alt="" style={{width:'100%'}}/>
            </div>
          </div>

          <div style={{width:'100vw', marginTop:'6%'}} className="d-flex justify-content-center">
            <div style={{width:'50%'}} className="d-flex justify-content-center">
              <h1 className="whatwedo">WHAT WE DO</h1>
            </div>
          </div>

          

          <div id="service-div1" style={{width:'100vw', marginTop:'4%'}} className="d-flex justify-content-center">
            <div className="service-container d-flex flex-row justify-content-center" style={{width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)',backgroundImage: `url("${graphics2}")`, padding:'2%', backgroundSize:'100% 100%', borderRadius:'30px'}}>
              <div style={{width:'15%',paddingTop:'3%'}} className="d-flex justify-content-center">
                <h1 className="Number">01</h1>
              </div>
              <div style={{width:'55%', padding:"1%"}} className="d-flex flex-column service-border">
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

          <div id="service-div2" style={{width:'100vw', marginTop:'4%'}} className="d-flex justify-content-center">
            <div className="service-container d-flex flex-row justify-content-center" style={{width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)', backgroundImage: `url("${graphics2}")`, padding:'2%', backgroundSize:'100% 100%', borderRadius:'30px', boxShadow: '5px 5px 5px grey'}}>
              <div style={{width:'15%',paddingTop:'3%'}} className="d-flex justify-content-center">
                <h1 className="Number">02</h1>
              </div>
              <div style={{width:'55%', padding:"1%"}} className="d-flex flex-column service-border">
                <div className="" style={{paddingLeft:'5%', paddingTop:'15%'}}>
                  <h1 className="title">CAD.</h1>
                </div>
                <div style={{paddingLeft:'20%'}}>
                  <h6 className="titledescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                  <Button style={{backgroundColor:'#2ea3f2'}} className="buttonText">FIND OUT MORE</Button>
                  <Button style={{backgroundColor:'#2ea3f2', marginLeft:'5%'}} className="buttonText">FREE QUOTE</Button>
                </div>

              </div>
              <div style={{width:'30%'}}>
                <img src={CAD} alt="" style={{width:'100%'}}/>
              </div>
            </div>

          </div>

          <div id="service-div3" style={{width:'100vw', marginTop:'4%'}} className="d-flex justify-content-center">
            <div className="service-container d-flex flex-row justify-content-center" style={{width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)',backgroundImage: `url("${graphics2}")`, padding:'2%', backgroundSize:'100% 100%', borderRadius:'30px', boxShadow: '5px 5px 5px grey'}}>
              <div style={{width:'15%',paddingTop:'3%'}} className="d-flex justify-content-center">
                <h1 className="Number">03</h1>
              </div>
              <div style={{width:'55%', padding:"1%"}} className="d-flex flex-column service-border">
                <div className="" style={{paddingLeft:'5%', paddingTop:'15%'}}>
                  <h1 className="title">PROTOTYPING.</h1>
                </div>
                <div style={{paddingLeft:'20%'}}>
                  <h6 className="titledescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                  <Button style={{backgroundColor:'#2ea3f2'}} className="buttonText">
                  <Link to={`/3Dprinting`} style={{color:'white'}}> FIND OUT MORE</Link>

                  </Button>
                  <Button style={{backgroundColor:'#2ea3f2', marginLeft:'5%'}} className="buttonText">FREE QUOTE</Button>
                </div>
              </div>
              <div style={{width:'30%'}}>
                <img src={ThreeD} alt="" style={{width:'100%'}}/>
              </div>
            </div>

          </div>

          <div id="service-div4" style={{width:'100vw', marginTop:'4%'}} className="d-flex justify-content-center">
            <div id="service-div4" className="service-container d-flex flex-row justify-content-center" style={{width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)',backgroundImage: `url("${graphics2}")`, padding:'2%', backgroundSize:'100% 100%', borderRadius:'30px', boxShadow: '5px 5px 5px grey'}}>
              <div style={{width:'15%',paddingTop:'3%'}} className="d-flex justify-content-center">
                <h1 className="Number">04</h1>
              </div>
              <div style={{width:'55%', padding:"1%"}} className="d-flex flex-column service-border">
                <div className="" style={{paddingLeft:'5%', paddingTop:'15%'}}>
                  <h1 className="title">MANUFACTURING.</h1>
                </div>
                <div style={{paddingLeft:'20%'}}>
                  <h6 className="titledescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                  <Button style={{backgroundColor:'#2ea3f2'}} className="buttonText">FIND OUT MORE</Button>
                  <Button style={{backgroundColor:'#2ea3f2', marginLeft:'5%'}} className="buttonText">FREE QUOTE</Button>
                </div>
              </div>
              <div style={{width:'30%'}}>
                <img src={ThreeD} alt="" style={{width:'100%'}}/>
              </div>
            </div>

          </div>

          <div id="service-div5" style={{width:'100vw', marginTop:'4%'}} className="d-flex justify-content-center">
           <div className="service-container d-flex flex-row justify-content-center" style={{width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)',backgroundImage: `url("${graphics2}")`, padding:'2%', backgroundSize:'100% 100%', borderRadius:'30px', boxShadow: '5px 5px 5px grey'}}>
              <div style={{width:'15%',paddingTop:'3%'}} className="d-flex justify-content-center">
                <h1 className="Number">05</h1>
              </div>
              <div style={{width:'55%', padding:"1%"}} className="d-flex flex-column service-border">
                <div className="" style={{paddingLeft:'5%', paddingTop:'15%'}}>
                  <h1 className="title">COMMITMENT.</h1>
                </div>
                <div style={{paddingLeft:'20%'}}>
                  <h6 className="titledescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                </div>
              </div>
              <div style={{width:'30%'}}>
                <img src={ThreeD} alt="" style={{width:'100%'}}/>
              </div>
            </div>

          </div>
        
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Homepage;