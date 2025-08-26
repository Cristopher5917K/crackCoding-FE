import React from 'react'
import { useState, useContext } from 'react'
import { Context } from '../js/store/appContext.js';


initialUser={
    name:"",
    email:"",
    password:"",
}
const Register = () => {

    const {store, actions}=useContext(Context)
    const [user, setUser]=useState(initialUser)

    const handleChange=({target})=>{
        setUser({
            ...user,
            [target.name]:target.value
        })
    }

  return (
    <div>Register</div>
  )
}

export default Register