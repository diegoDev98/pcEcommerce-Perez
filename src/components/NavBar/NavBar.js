import React from 'react'
import CartIcon from './CartIcon'
import './NavBar.css'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../CartContext';


function NavBar() {
  const {itemsInCart} = useCartContext();
        return (
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <NavLink className="navbar-brand" to="/">DiegoTech</NavLink>
                </div>
                <ul className="nav navbar-nav">
              
                  <li>
                    <NavLink to='/' activeClassName="activeLink">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/products'>PC Parts</NavLink>
                  </li>
                  <li>
                    <NavLink to='/contact' >Contact</NavLink>
                  </li>
											
                 
                  
                </ul>
                {itemsInCart !==0 && <NavLink to='/cart'><CartIcon/></NavLink>}
                
              </div> 
          </nav>
        )
    
}
export default NavBar