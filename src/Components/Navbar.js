import React ,{useState}from 'react'
import logo from '../Assets/images/logo.png'
import { Button } from '@mui/material'
import { motion } from "framer-motion"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../CSS/Navbar.css'
import TocIcon from '@mui/icons-material/Toc';
export default function Navbar() {
  const [show, setShow] = useState(false);
  
  const handelcontrol = () => {
    console.log('hello')
    setShow(!show)
    

}
  return (
    
    <div className='navbar'  >
        <div className='nav_left'>
            <img src={logo} alt="logo" id='logo' />
            <ul className='for_desktop'>
                <li>About</li>
                <li>Why</li>
                <li>Benefit</li>
                <li>Token</li>
                <li>Roadmap</li>
                <li>FAQS</li>
                <li>Contect</li>
            </ul>
        </div>
        <div className='nav_right'>
          <Button id='lang'>English <ArrowDropDownIcon/></Button>
          <Button id='connnect'>Connect Wallet</Button>
          <Button id='free'>Pre Sale</Button>
          <Button id='btn_moviel' onClick={handelcontrol}><TocIcon/></Button>
          {show ? (<div className="main" style={{ position: "relative" }}>
              <motion.div
                animate={{ width: "320px" ,animate:{ animationDuration: '3s'} }}
                className="sidebar-mobile"
          
              >
                <div className='list_website'>
          
          <ul className='for_mobile'>
                <li>About</li>
                <li>Why</li>
                <li>Benefit</li>
                <li>Token</li>
                <li>Roadmap</li>
                <li>FAQS</li>
                <li>Contect</li>
            </ul>
           
            </div>
            </motion.div>
            </div>
             ) : ''}

        </div>

    </div>

  )
}
