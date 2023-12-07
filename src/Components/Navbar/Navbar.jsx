// Navbar.jsx

import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from  '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { getTotalCartItems } = useContext(ShopContext)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>AL-NOOR</p>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <li onClick={toggleMenu}><Link to='/' style={{textDecoration: 'none'}}>Shop</Link></li>
                <li onClick={toggleMenu}><Link to='/mens' style={{textDecoration: 'none'}}>Men</Link></li>
                <li onClick={toggleMenu}><Link to='/womens' style={{textDecoration: 'none'}}>Women</Link></li>
                <li onClick={toggleMenu}><Link to='/kids' style={{textDecoration: 'none'}}>Kids</Link></li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar
