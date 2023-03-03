import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

export  const Header = () => {

  const{logout}=useLogout()

  const handleLogout = () => {
    logout()
  }
  return (
    <>
    <h1 style={{textAlign:'center'}}>PHONEBOOK</h1>
    <div className='App-header'>
      <div className='logout'>
        <button onClick={handleLogout}>Log out</button>
      </div>
        <ul><Link to={"/"}>Home</Link></ul>
        <ul><Link to={"/login"}>login</Link></ul>
        <ul><Link to={"/signup"}>Signup</Link></ul>
    </div>
    </>
  )
}