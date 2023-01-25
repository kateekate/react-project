import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProfilePage from "../Pages/ProfilePage";


const NavPage = () => {
  return (
<>
  <section>
    <Routes>
<Route path='/' element={<HomePage/>} />
<Route path='/profile' element={<ProfilePage/>} />
    </Routes>
  </section>
</>
  )
}

export default NavPage