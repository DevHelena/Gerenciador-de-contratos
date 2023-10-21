import React from 'react'
import './header.css'
import logo from '../../assets/coimbras.png'

export const Header = () => {
    return (
        <header className='header'>
            <img src={logo} className='logo'/>
            <nav className='header-navigation'>
                <a className='header-navigation-link'>Dashboard</a>
                <a className='header-navigation-link'>Novo Contrato</a>
                <a className='header-navigation-link'>Sobre</a>
            </nav>
        </header>
    )
}