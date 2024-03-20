import React from 'react'
import Logo from "../assets/images/logo.png"

const Header = () => {
  return (
    <div className='header'>
        <div className='container h-full'>
            <div className='flex gap-40 items-center h-full'>
                <img src={Logo} alt='logo'/>
                <nav className='nav'>
                  <ul>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Company</a></li>
                    <li><a href=''>Industries</a></li>
                    <li><a href=''>Contact</a></li>
                  </ul>
                </nav>
                <button className='header__quote'>Get a quote</button>
            </div>
        </div>
    </div>
  )
}

export default Header