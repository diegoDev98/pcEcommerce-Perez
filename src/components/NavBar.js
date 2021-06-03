import React from 'react'
import ReactDOM from 'react-dom'

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
            </div>
          </nav>
        )
    
}
ReactDOM.render(<NavBar />, document.getElementById('root'));