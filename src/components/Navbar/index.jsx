import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Zoom, Profile, ShoppingBag } from '../Icons'
import './styles.css'

export default function Navbar(){
    return(
        <div className='navbar-container'>
            <img src={Logo} style={{width:'165px'}} alt="logo-extracto-color"/>
            <nav>
                <ul>
                    <NavLink className="li" to="/">Home</NavLink>
                    <NavLink className="li" to="/about">About</NavLink>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div style={{justifySelf:'end'}}>
                <button><Zoom width={20} height={20} color={'#66836b'}/></button>
                <button><Profile width={20} height={20} color={'#66836b'}/></button>
                <button><ShoppingBag width={20} height={20} color={'#66836b'}/></button>
                
            </div>
        </div>
    )
}
