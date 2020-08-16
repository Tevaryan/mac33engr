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

    const div1 = document.getElementById("service-div1");
    var div1heighttop = div1.getBoundingClientRect().top - (window.innerHeight/2);
    var div1heightbottom = div1.getBoundingClientRect().bottom - (window.innerHeight/2);

    const div2 = document.getElementById("service-div2");
    var div2heighttop = div2.getBoundingClientRect().top - (window.innerHeight/2);
    var div2heightbottom = div2.getBoundingClientRect().bottom - (window.innerHeight/2);

    const div3 = document.getElementById("service-div3");
    var div3heighttop = div3.getBoundingClientRect().top - (window.innerHeight/2);
    var div3heightbottom = div3.getBoundingClientRect().bottom - (window.innerHeight/2);

    const div4 = document.getElementById("service-div4");
    var div4heighttop = div4.getBoundingClientRect().top - (window.innerHeight/2);
    var div4heightbottom = div4.getBoundingClientRect().bottom - (window.innerHeight/2);

    const div5 = document.getElementById("service-div5");
    var div5heighttop = div5.getBoundingClientRect().top - (window.innerHeight/2);
    var div5heightbottom = div5.getBoundingClientRect().bottom - (window.innerHeight/2);

    window.addEventListener('scroll', () => {
      const div1enterView = window.scrollY  > div1heighttop;
      const div1exitView = window.scrollY  > div1heightbottom;
      const div1exitView2 = window.scrollY  < div1heighttop;

      if (div1enterView) {
        div1.classList.add('expand');
      }
      if(div1exitView || div1exitView2) {
        div1.classList.remove('expand');
      }

      const div2enterView = window.scrollY  > div2heighttop;
      const div2exitView = window.scrollY  > div2heightbottom;
      const div2exitView2 = window.scrollY  < div2heighttop;

      if (div2enterView) {
        div2.classList.add('expand');
      }
      if(div2exitView || div2exitView2) {
        div2.classList.remove('expand');
      }

      const div3enterView = window.scrollY  > div3heighttop;
      const div3exitView = window.scrollY  > div3heightbottom;
      const div3exitView2 = window.scrollY  < div3heighttop;

      if (div3enterView) {
        div3.classList.add('expand');
      }
      if(div3exitView || div3exitView2) {
        div3.classList.remove('expand');
      }

      const div4enterView = window.scrollY  > div4heighttop;
      const div4exitView = window.scrollY  > div4heightbottom;
      const div4exitView2 = window.scrollY  < div4heighttop;

      if (div4enterView) {
        div4.classList.add('expand');
      }
      if(div4exitView || div4exitView2) {
        div4.classList.remove('expand');
      }

      const div5enterView = window.scrollY  > div5heighttop;
      const div5exitView = window.scrollY  > div5heightbottom;
      const div5exitView2 = window.scrollY  < div5heighttop;

      if (div5enterView) {
        div5.classList.add('expand');
      }
      if(div5exitView || div5exitView2) {
        div5.classList.remove('expand');
      }

    })
  }


  render() {
    return (
      <div className='page-container' style={{width:'100vw',position:'absolute',zIndex:'-3'}} >
        <div className = 'content-wrap'>
          <div style={{width:'100vw', backgroundColor:'#a6a6aa'}}>
            <div  style={{width:'100%', height:'100%', backgroundColor:'#a6a6aa', backgroundImage: `url("${twoD1}")`, position:'absolute',zIndex:'-2'}}></div>
          <img src={background} alt="" style={{position:'absolute', zIndex:'-1', width:'100%'}} className="topbackgroundImage"/>
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

          <div style={{width:'100vw', marginTop:'4%'}} className="service-container d-flex justify-content-center" id="service-div1" >
            <div style={{width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)',backgroundImage: `url("${graphics2}")`, padding:'2%', backgroundSize:'100% 100%', borderRadius:'30px', boxShadow: '5px 5px 5px grey'}} className="d-flex flex-row justify-content-center">
              <div style={{width:'15%',paddingTop:'3%'}} className="d-flex justify-content-center">
                <h1 className="Number">01</h1>
              </div>
              <div style={{width:'55%', padding:"1%"}} className="d-flex flex-column service-border ">
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

          <div style={{width:'100vw', marginTop:'4%'}} className="service-container d-flex justify-content-center" id="service-div2">
          <div style={{width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)', padding:'2%', borderRadius:'30px', backgroundImage: `url("${graphics2}")`,backgroundSize:'100% 100%', boxShadow: '5px 5px 5px grey' }} className="d-flex flex-row justify-content-center">
              <div style={{width:'15%',paddingTop:'3%'}} className="d-flex justify-content-center">
                <h1 className="Number">02</h1>
              </div>
              <div style={{width:'55%', padding:"1%"}} className="d-flex flex-column service-border ">
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

          <div style={{width:'100vw', marginTop:'4%'}} className="service-container d-flex justify-content-center" id="service-div3">
          <div style={{width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)', padding:'2%', borderRadius:'30px', backgroundImage: `url("${graphics2}")`,backgroundSize:'100% 100%', boxShadow: '5px 5px 5px grey' }} className="d-flex flex-row justify-content-center">
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

          <div style={{width:'100vw', marginTop:'4%'}} className="service-container d-flex justify-content-center" id="service-div4">
          <div style={{width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)', padding:'2%', borderRadius:'30px', backgroundImage: `url("${graphics2}")`,backgroundSize:'100% 100%', boxShadow: '5px 5px 5px grey' }} className="d-flex flex-row justify-content-center">
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

          <div style={{width:'100vw', marginTop:'4%'}} className="service-container d-flex justify-content-center" id="service-div5">
          <div style={{width:'70%', height:'', backgroundColor:'rgba(0,0,0,0.2)', padding:'2%', borderRadius:'30px', backgroundImage: `url("${graphics2}")`,backgroundSize:'100% 100%', boxShadow: '5px 5px 5px grey' }} className="d-flex flex-row justify-content-center">
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