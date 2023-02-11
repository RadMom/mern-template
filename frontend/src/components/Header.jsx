import React from 'react'
import { Link } from 'react-router-dom'

export  const Header = () => {
  return (
    <>
    <h1 style={{textAlign:'center'}}>PHONEBOOK</h1>
    <div className='App-header'>
        <ul><Link to={"/"}>Home</Link></ul>
        <ul><Link to={"/login"}>login</Link></ul>
        <ul><Link to={"/registration"}>Registracion</Link></ul>
    </div>
    </>
  )
}