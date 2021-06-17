import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {
    
        return (
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="https://www.google.com">DiegoTech</a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active"><a href="https://www.google.com">Home</a></li>
                  <li><a href="https://www.google.com">Pc Parts</a></li>
                  <li><a href="https://www.google.com">Monitors</a></li>
                  <li><a href="https://www.google.com">Games</a></li>
                </ul>
                <CartWidget/>
              </div> 
          </nav>
        )
    
}
export default NavBar