import React from 'react'
import Navbar from './Navbar'
import '../CSS/Header.css'
import Landing from './Landing'
export default function Main() {
  return (
    <div className='header'>
        <Navbar/>
        <Landing/>

    </div>
  )
}
