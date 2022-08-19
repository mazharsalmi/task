import React from 'react'
import { Button } from '@mui/material';
import elm from '../Assets/firstcom.png'
import elm2 from '../Assets/twocom.png'
import elm3 from '../Assets/thirdcom.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import InstagramIcon from '@mui/icons-material/Instagram';
import Wave from 'react-wavify'
import wave1 from '../Assets/wave1.png'
import '../CSS/HeaderBody.css'

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
export default function HeaderBody() {
  return (
    <div className='headerbody'>
        <p id='header_text'>The 1st Social Network Where likes have value</p>
        <p id='header_p'>LEMON provides a unique way for users to create , post & profit from their content.Based on other users opinion, your opinion metters</p>
        <div className='header_btn'>
            <Button id='btn_free'>LEMON FREE-SALE <div id='curcel'><KeyboardDoubleArrowRightIcon/></div></Button>
            <Button id='btn_whitepage'>WHITE PAPER <div id='curcel'><KeyboardDoubleArrowRightIcon/></div></Button>
        </div>
        <img src={elm} alt="elm" className='elm' />
        <img src={elm2} alt="elm" className='elm2' />
        <img src={elm3} alt="elm" className='elm3' />
        <div className='icon'>
          <FacebookIcon/>
          <TwitterIcon/>
          <YouTubeIcon/>
          <GitHubIcon/>
          <CurrencyBitcoinIcon/>
          <InstagramIcon/>

        </div>
        <Wave fill='#FFFFFF'
        paused={false}
        options={{
          height: 40,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
        className='wave'
  />
   <Wave fill='#FFFFFF'
        paused={false}
        options={{
          height: 40,
          amplitude: 30,
          speed: 0.15,
          points: 4
        }}
        className='wave2'
  />
        


    </div>
  )
}
