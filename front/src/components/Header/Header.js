import React from 'react'
import './header.css'
import logo from '../../assets/coimbras.png'
import { Link } from 'react-router-dom'

export const Header = ({thisPage}) => {

    function isThisPage(page){
      let classes = 'header-navigation-link'
      if ( page === thisPage ) {
        classes = `this-page ${classes}`
      }
      return classes
    }

    return (
      <header className='header'>
        <img src={logo} className='logo'/>
        <nav className='header-navigation'>
          <Link className={isThisPage('dashboard')} to='/dashboard'>Dashboard</Link>
          <Link className={isThisPage('novocontrato')} to='/'>Novo Contrato</Link>
          <Link className={isThisPage('sobre')} to='/sobre'>Sobre</Link>
        </nav>
      </header>
    )
}