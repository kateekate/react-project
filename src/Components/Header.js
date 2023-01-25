import React from "react";
import s from './Header.module.css'
import Logo from '../Styles/img/logo.png'

const Header = () => {
  return (
    <div className={s.header}>
    <img className={s.logo} src={Logo} alt='logotype'/>
    <p>Honor</p>
    </div>
    
  )
}

export default Header