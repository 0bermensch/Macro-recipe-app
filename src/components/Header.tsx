import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='header__logo' >
        <img src={logo} alt="logo" className='header__logo--logo'/>
      </Link>
      
      <div className="header__navs">
      <Link to='/macrocal' className='header__navs--nav'>
        Macro Calculator
      </Link>
      <Link to='/recipelist' className='header__navs--nav'>
        Recipe List
      </Link> 
      <Link to='/recipe' className='header__navs--nav'>
        Recipe
      </Link>  
      </div>
    </div>
  )
}

export default Header
