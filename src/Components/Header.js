import React from "react";
import s from './Header.module.css'
import Logo from '../Styles/img/logo.png'

const Header = () => {
  return (
    <div className={s.header}>
      <img src={Logo} className={s.logo} alt='logotype'/>
      <p>Honor</p>
    </div>
    
  )
}

export default Header