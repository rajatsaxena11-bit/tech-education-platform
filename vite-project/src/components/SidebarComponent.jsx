import React from 'react'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../assets/mycss/sidebarcss.css'

export default function SidebarComponent() {
    return (
        <>
            <div className="sidebarsmall">
                <Link to="tel:7987468211" className='icon'>
                    <FaPhoneAlt />
                </Link>

                  <Link to="https://wa.me/7987468211" target='_blank'  className='icon'>
                    <FaWhatsapp />
                </Link>

                  <Link to="mailto:rajatsaxena@gmail.com" className='icon'>
                    <FaEnvelope />
                </Link>
            </div>
        </>
    )
}
