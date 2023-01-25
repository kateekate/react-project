import React from 'react';
import Footer from './Footer';
import Header from './Header';
import s from './MainPage.module.css'
import Navbar from "./Navbar";
import NavPage from "./NavPage";

const MainPage = () => {
  return (
    <>
      <section className={s.parent}>

<div className={s.child}>
<Header/>
</div>

<div className={s.main}>

  {/* Navbar section */}
<div className={[s.navbar]}>
<Navbar/>
</div>

{/* NavPage section */}
<div className={[s.navPage, s.content, s.child]}>
<NavPage />
</div>

</div>


<div>
  <Footer className={s.child}/>
</div>

      </section>
    </>
  )
}

export default MainPage