import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";
import { Nav, NavLink } from 'reactstrap';

import "../App.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
          <div className="d-flex justify-content-center" style={{padding:'1%'}} >
          <Nav className="NavBarLarge" >
            <NavLink tag={Link} to={'/'} className="d-flex Nav-text NavText" style={{color:'white'}}>
                HOME</NavLink>
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