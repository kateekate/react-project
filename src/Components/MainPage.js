import React from 'react';
import Footer from './Footer';
import Header from './Header';
import s from './MainPage.module.css'
import Navbar from "./Navbar";
import NavPage from "./NavPage";

const MainPage = () => {
  return (
    <>
      <section className={s.main}>

<div>
<Header/>
</div>

{/* Navbar section */}
<div className={s.navbar}>
<Navbar/>
</div>

{/* NavPage section */}
<div className={s.navPage}>
<NavPage/>
</div>

<div>
  <Footer/>
</div>

      </section>
    </>
  )
}

export default MainPage