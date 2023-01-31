import React from "react";
import s from './HomePage.module.css'


import Teacher from '../Styles/icons/teacher.svg'
import Pet from '../Styles/icons/pet.svg'
import Tree from '../Styles/icons/tree.svg'
import Airplane from '../Styles/icons/airplane.svg'
import Bus from '../Styles/icons/bus.svg'
import ShoppingCart from '../Styles/icons/shopping-cart.svg'
import Coffee from '../Styles/icons/coffee.svg'


const HomePage = () => {
  return (
    <>
      <section className={s.homePage}>
        <img src={Teacher} alt='logo'></img>
        <img src={Pet} alt='logo'></img>
        <img src={Tree} alt='logo'></img>
        <img src={Airplane} alt='logo'></img>
        <img src={Bus} alt='logo'></img>
        <img src={ShoppingCart} alt='logo'></img>
        <img src={Coffee} alt='logo'></img>
      </section>
    </>
  )
}

export default HomePage