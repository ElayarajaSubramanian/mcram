import React from 'react'
import Logo from "../assets/images/logo.png"
import PhoneIcon from "../assets/images/phone-icon.svg"
import MailIcon from "../assets/images/mail-icon.svg"
import MapIcon from "../assets/images/map-icon.svg"

const Footer = () => {
  return (
    <footer className='about__footer'>
        <img src={Logo} alt='logo'/>
        <div>
            <h2>Reach us</h2>
            <div className='py-6 flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <img src={PhoneIcon} alt='phone'/>
                    <span>+91- 123456789</span>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={MailIcon} alt='mail'/>
                    <span>demo@gmail.com</span>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={MapIcon} alt='map'/>
                    <span>Address</span>
                </div>
            </div>
            
        </div>
        <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Company</a></li>
                <li><a href=''>Industries</a></li>
                <li><a href=''>Contact</a></li>
            </ul>
            <ul>
                <li><a href=''>Facebook</a></li>
                <li><a href=''>Twitter</a></li>
                <li><a href=''>Linkedin</a></li>
                <li><a href=''>Instagram</a></li>
            </ul>
    </footer>
  )
}

export default Footer