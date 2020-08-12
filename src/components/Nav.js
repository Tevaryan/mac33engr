import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";
import { Nav, NavLink } from 'reactstrap';
import mach33logo from '../assets/mach33logo.png';
import '../assets/styles/nav.css'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount () {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY > 35;
      const logo = document.getElementById('logo')
      const fullnavbar = document.getElementById('fullnavbar')
      if (isTop) {
        logo.classList.add('scrolled');
        fullnavbar.classList.add('scrolled');
      }
      else {
        logo.classList.remove('scrolled');
        fullnavbar.classList.remove('scrolled');
      }
    })
  }

  render() {
    return (
      <div id='fullnavbar' className = "fullnavbar">

          <NavLink tag={Link} to={'/'} id='logo' className = 'logo' >
            {/* <div className="d-flex justify-content-center align-items-center" style={{width:'10vw'}} >

            </div> */}
            <img src={mach33logo} alt="mach33logo"/>
          </NavLink>

          <div className="d-flex justify-content-center" style={{padding:'1%'}} >
          <Nav className="NavBarLarge" >
            <NavLink tag={Link} to={'/'} className="d-flex Nav-text NavText" style={{color:'white'}}>HOME</NavLink>
            <NavLink tag={Link} to={'/Services'} className="d-flex Nav-text NavText" style={{color:'white'}}>SERVICES</NavLink>
            <NavLink tag={Link} to={'/AboutUs'} className="d-flex Nav-text NavText" style={{color:'white'}}>ABOUT US</NavLink>
            <NavLink tag={Link} to={'/Portfolio'} className="d-flex Nav-text NavText" style={{color:'white'}}>PORTFOLIO</NavLink>
            <NavLink tag={Link} to={'/ContactUs'} className="d-flex Nav-text NavText" style={{color:'white'}}>CONTACT US</NavLink>
            </Nav>
          </div>

      </div>
    );
  }
}

export default Navbar;