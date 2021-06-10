import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
    
        return (
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" href="#">DiegoTech</a>
                </div>
                <ul class="nav navbar-nav">
                  <li class="active"><a href="#">Home</a></li>
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