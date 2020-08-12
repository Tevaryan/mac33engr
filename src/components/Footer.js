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
                <div className = 'columns-header'> What We Do</div>
                <hr className = 'column-line'/>
                <ul className = 'list-unstyled'>
                    <NavLink>CAD</NavLink>
                    <NavLink>Protyping</NavLink>
                    <NavLink>Manufacturing</NavLink>
                </ul>
            </div>


            {/* Column2 */}
            <div className = 'columns'>
                <div className = 'columns-header'> Column 2</div>
                <hr className = 'column-line'/>
                <ul className = 'list-unstyled'>
                    <NavLink>Link 1</NavLink>
                    <NavLink>Link 2</NavLink>
                    <NavLink>Link 3</NavLink>
                    <NavLink>Link 3</NavLink>
                </ul>
            </div>


            {/* Column3 */}
            <div className = 'columns'>
                <div className = 'columns-header'> Contact Us</div>
                <hr className = 'column-line'/>
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
                  
                
                  
                  
                </ul>
              </div>

          
        </div>
    </div> 
    );
  }
    
}
export default Footer;
