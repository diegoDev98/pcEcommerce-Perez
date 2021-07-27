import React from 'react'
import CartIcon from './CartIcon'
import './NavBar.css'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../../CartContext';

const categories = [
  {id:1, category: 'Home'},
  {id:2, category: 'Pc Parts'},
  {id:3, category: 'Games'},
  {id:4, category: 'Monitors'}
  ]

function NavBar() {
  const {itemsInCart} = useCartContext();
        return (
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <NavLink className="navbar-brand" to="/">DiegoTech</NavLink>
                </div>
                <ul className="nav navbar-nav">
                {categories.map( (category,index) =>
                  <li key={index}><NavLink to={`/category/${category.category.toLowerCase().replace(/\s/g, '')}`} key={index} activeClassName="activeLink">{category.category}</NavLink></li>
												)}
                 
                  
                </ul>
                {itemsInCart!==0 && <NavLink to='/cart'><CartIcon/></NavLink>}
                
              </div> 
          </nav>
        )
    
}
export default NavBar