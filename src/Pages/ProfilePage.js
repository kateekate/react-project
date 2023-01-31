import React from "react";
import Input from "./Input";
import s from './ProfilePage.module.css'

const ProfilePage = () => {
  return (
    <>
      <section className={s.profilePage}>
        <form action="" className={s.signUp}>

          <Input
            id="username" 
            label="Username: " 
            type="text" 
            placeholder="Enter Username"
          />

        </form>
      </section>
    </>
  )
}

export default ProfilePage