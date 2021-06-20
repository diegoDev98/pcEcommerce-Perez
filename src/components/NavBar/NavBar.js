import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'
import {NavLink} from 'react-router-dom'

const categories = [
  {id:1, category: 'Home'},
  {id:2, category: 'Pc Parts'},
  {id:3, category: 'Games'},
  {id:4, category: 'Monitors'}
  ]

function NavBar() {
    
        return (
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <NavLink className="navbar-brand" to="/">DiegoTech</NavLink>
                </div>
                <ul className="nav navbar-nav">
                {categories.map( (category,index) =>
                  <NavLink to={`/category/${category.category.toLowerCase()}`} key={index} activeClassName="dropdown-item"><li>{category.category}</li></NavLink>
												)}
                 
                  
                </ul>
                <CartWidget/>
              </div> 
          </nav>
        )
    
}
export default NavBar