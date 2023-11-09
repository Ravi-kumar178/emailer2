import React from 'react'
import "./Footer.css"
import img1 from "../assets/Footer/imahPhoto.png"
import img2 from "../assets/Footer/ACHE.png"
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoYoutube } from "react-icons/bi";


function Footer() {
  return (
    <div className='footerParentDiv'>
        <div className='footerFirstDiv'>
        {/* For left side of footer */}
        <div className='footerSecondDiv'>
          <div>
             <p className='footerFirstPara'>From Team:</p>
             <p className='footerSecondPara'>Team, Asian Coalition for Harm Reduction (ACHE) </p>
          </div>
          <div className='footerThirdDiv'>
             <img src={img1} loading='lazy' alt='' className='footerImage'></img>
             <img src={img2} loading='lazy' alt='' className='footerImage'></img>
          </div>
        </div>
        {/* For right side of footer */}
        <div className='footerFourthDiv'>
              <div className='footerFifthDiv'>
                 <a href=''><BiLogoFacebookCircle size={30} className='footerLogo'/></a>
                 <a href=''><AiFillInstagram size={30} className='footerLogo'/></a>
               </div>
                <br/>
               <div className='footerFifthDiv'>
                 <a href=''><AiOutlineTwitter size={30} className='footerLogo'/></a>
                 <a href=''><BiLogoYoutube size={30} className='footerLogo'/></a>
               </div>
        </div>
    </div>
    </div>
    
  )
}

export default Footer