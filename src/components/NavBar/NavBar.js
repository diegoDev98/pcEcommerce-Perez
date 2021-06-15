import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {
    
        return (
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">DiegoTech</a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home</a></li>
                  <li><a href="#">Pc Parts</a></li>
                  <li><a href="#">Monitors</a></li>
                  <li><a href="#">Games</a></li>
                </ul>
                <CartWidget/>
              </div> 
          </nav>
        )
    
}
export default NavBar