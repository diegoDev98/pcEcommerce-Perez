import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'
import {NavLink} from 'react-router-dom'


function NavBar() {
    
        return (
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <NavLink className="navbar-brand" to="/">DiegoTech</NavLink>
                </div>
                <ul className="nav navbar-nav">
                
                  <li><NavLink to={`/`}  >Home</NavLink></li>
                  <li><NavLink to={`/categories/pcparts`} activeClassName="activeLink">Pc Parts</NavLink></li>
                  <li><NavLink to={`/categories/games`} activeClassName="activeLink">Games</NavLink></li>
                  <li><NavLink to={`/categories/monitors`} activeClassName="activeLink">Monitors</NavLink></li>
											
                 
                  
                </ul>
                <CartWidget/>
              </div> 
          </nav>
        )
    
}
export default NavBar
