import React from 'react';
import s from './MainPage.module.css'
import Navbar from "./Navbar";
import NavPage from "./NavPage";

const MainPage = () => {
  return (
    <>
      <section className={s.nav}>

{/* Navbar section */}
<div className={s.navbar}>
<Navbar/>
</div>

{/* NavPage section */}
<div className={s.navPage}>
<NavPage/>
</div>

      </section>
    </>
  )
}

export default MainPage