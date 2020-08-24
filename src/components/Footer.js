import React, {Component} from 'react'
import { NavLink, NavItem } from 'reactstrap'
import {Link} from 'react-router-dom'
import '../assets/styles/footer.css'

class Footer extends Component{
   
  render(){
    return (
      <div className = 'footerbar'>
        <div className = 'row'>


            {/* Column1 */}
            <div className = 'columns'>
                <NavLink className="d-flex Nav-text NavText" style={{color:'#c6c6c6', fontWeight:'bolder'}}> WHAT WE DO</NavLink>
                <ul className = 'list-unstyled'>
                    <NavLink tag={Link} to={'/CAD'}>CAD</NavLink>
                    <NavLink>Protyping</NavLink>
                    <NavLink tag={Link} to={'/Manufacturing'}>Manufacturing</NavLink>
                    <NavLink tag={Link} to={'/3Dprinting'}>3D Printing</NavLink>
                </ul>
            </div>


            {/* Column2 */}
            <div className = 'columns'>
                <NavLink className="d-flex Nav-text NavText" style={{color:'#c6c6c6', fontWeight:'bolder'}}> COLUMN 2</NavLink>
                <ul className = 'list-unstyled'>
                    <NavLink>Link 1</NavLink>
                    <NavLink>Link 2</NavLink>
                    <NavLink>Link 3</NavLink>
                    <NavLink>Link 3</NavLink>
                </ul>
            </div>


            {/* Column3 */}
            <div className = 'columns'>
                <NavLink className="d-flex Nav-text NavText" style={{color:'#c6c6c6', fontWeight:'bolder'}}> CONTACT US</NavLink>
                <ul className = 'list-unstyled'>
               
                    <NavItem>
                        <NavLink className = 'noHover' style ={{display:'inline-block', fontWeight:'bolder'}}>Location</NavLink>
                        <NavLink className = 'noHover' style ={{display:'inline-block', float:'right'}}>Laurel, MD 20707</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className = 'noHover' style ={{display:'inline-block', float:'left', fontWeight:'bolder'}}>Office Hours</NavLink>
                        <NavItem style ={{display:'inline-block'}}>
                            <NavLink className = 'noHover' style ={{float:'right'}}>Monday-Friday: 8am – 5pm</NavLink>
                            <NavLink className = 'noHover'>Saturday-Sunday: 8am – 5pm</NavLink>
                        </NavItem>
                    
                    </NavItem>

                    <NavItem>
                        <NavLink className = 'noHover ' style ={{display:'inline-block', fontWeight:'bolder'}}>Phone</NavLink>
                        <NavLink className = 'noHover' style ={{display:'inline-block', float:'right'}}>(833) 505 3330</NavLink>
                    </NavItem>
                  
                    <NavItem>
                        <NavLink className = 'noHover ' style ={{display:'inline-block', fontWeight:'bolder'}}>Email</NavLink>
                        <NavLink className = 'noHover' style ={{display:'inline-block', float:'right'}}>team@mach33engr.com</NavLink>
                    </NavItem>
              
                </ul>
              </div>

          
        </div>
    </div> 
    );
  }
    
}
export default Footer;
