import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
  return (
  <>
     <section>
<div className={s.navbar}>

<NavLink to='/' className={({isActive}) => (isActive ? s.activeLink : s.normalLink)}>
<p>Home</p>
 </NavLink>

<NavLink to='/profile' className={({isActive}) => isActive ? s.activeLink : s.normalLink}>
  <p>Profile</p>
</NavLink>

</div>
     </section>
    </>
  )
}

export default Navbar