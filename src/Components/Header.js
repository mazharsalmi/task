import React from 'react'
import HeaderBody from './HeaderBody'
import Navbar from './Navbar'
import '../CSS/Header.css'
export default function Header() {
  return (
    <div className='header'>
        <Navbar/>
        <HeaderBody/>
    </div>
  )
}
