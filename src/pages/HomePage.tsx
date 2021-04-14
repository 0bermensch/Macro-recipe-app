import React from 'react'
import {Link} from 'react-router-dom'
import homephoto from '../homephoto.jpg'
import '../'

const Home = () => {
  return (
    <div className='home'>
      <div className="home__content">
      <div className="home__content--title">
        Welcome to MacroCal
      </div>
      <Link to='/macrocal'>
        <button className='home__content--button'>Get Started</button>
      </Link>
      </div>
      
    </div>
  )
}

export default Home
