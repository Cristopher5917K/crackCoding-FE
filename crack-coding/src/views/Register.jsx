import React, { act } from 'react'
import { useState, useContext } from 'react'
import { Context } from '../js/store/appContext.js';
import { useNavigate } from 'react-router-dom';

initialUser={
    name:"",
    email:"",
    password:"",
}
const Register = () => {

    const {store, actions}=useContext(Context)
    const [user, setUser]=useState(initialUser)
    const navigate=useNavigate()
    
    const handleChange=({target})=>{
        setUser({
            ...user,
            [target.name]:target.value
        })
    }


    // Toca hacer que sea una funcion asincrona para esperar la respuesta del backend
    const handleSubmit=async(event)=>{
      event.preventDefault()

      const formData=new FormData()
      formData.append("name", user.name)
      formData.append("email", user.email)
      formData.append("password", user.password)

      try {
        const response=await actions.register(formData)
        if (response==201) {
          setUser(initialUser)
          navigate
        }
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>Register</div>
  )
}

export default Register