import React, { useEffect, useState } from 'react'
import Logo from "../assets/images/logo.png"
import Logo2 from "../assets/images/logo2.png"

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // If scrolling, add a class to the body
        setScrolling(true);
      } else {
        // If not scrolling or scrolled back to top, remove the class
        setScrolling(false);
      }
    };

    // Attach event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once
  return (
    <div className={`header ${scrolling ? 'scrolled' : ''}`}>
        <div className='container h-full'>
            <div className='flex gap-64 items-center h-full'>
                <img src={Logo} alt='logo' className='header__logo header__logo1'/>
                <img src={Logo2} className='header__logo header__logo2'/>
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