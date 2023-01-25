import React from "react";
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
    
    <div><img className={s.logo} src={'../Styles/img/logo.png'} alt='logotype'/></div>
    
    </header>
    
  )
}

export default Header