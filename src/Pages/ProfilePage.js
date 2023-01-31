import React from "react";
import Input from "./Input";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from 'yup'
import s from './ProfilePage.module.css'
import 'antd/dist/reset.css';
import { Button, ConfigProvider } from "antd";

const schema = yup.object({
  username: yup.string().required("Username is a required field."),
  phoneNumber: yup.string().required("Phone number is a required field.").matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, "Phone number is not valid!"),
  email: yup.string().required("Email is a required field.").email("Email is not valid!"),
  password: yup.string().required("Password is a required field.").matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/, "Your password must be 8-16 characters."),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Password must be match."),
})

const ProfilePage = () => {
  const {
    handleSubmit, 
    register, 
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema)
  })

  const formSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <section className={s.profilePage}>
        <h1 className={s.header}>Sign UP</h1>
        <p className={s.paragraph}>Please, inter your information correctly.</p>
        <form onSubmit={handleSubmit(formSubmit)} className={s.signUp}>

          <Input
            id="username" 
            label="Username" 
            type="text" 
            placeholder="Enter Username"
            register ={{...register("username")}}
            errorMessage={errors.username?.message}
          />

          <Input
            id="name" 
            label="Name" 
            type="text" 
            placeholder="Enter Name"
            register ={{...register("name")}}
            errorMessage={errors.name?.message}
          />

          <Input
            id="lastName" 
            label="Last Name" 
            type="text" 
            placeholder="Enter Last Name"
            register ={{...register("lastName")}}
            errorMessage={errors.lastName?.message}
          />

          <Input
            id="phoneNumber" 
            label="Phone Number" 
            type="text" 
            placeholder="Enter Phone Number"
            register ={{...register("phoneNumber")}}
            errorMessage={errors.phoneNumber?.message}
          />

          <Input
            id="email" 
            label="Email" 
            type="email" 
            placeholder="Enter Email"
            register ={{...register("email")}}
            errorMessage={errors.email?.message}
          />

          <Input
            id="password" 
            label="Password" 
            type="password" 
            placeholder="Enter Password"
            register ={{...register("password")}}
            errorMessage={errors.password?.message}
          />

          <Input
            id="confirmPassword" 
            label="Confirm Password" 
            type="password" 
            placeholder="Confirm Password"
            register ={{...register("confirmPassword")}}
            errorMessage={errors.confirmPassword?.message}
          />
          
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#38403b',
              },
            }}
          >
            <Button className={s.signUpButton}>Sign Up</Button>
          </ConfigProvider>

        </form>
      </section>
    </>
  )
}

export default ProfilePage