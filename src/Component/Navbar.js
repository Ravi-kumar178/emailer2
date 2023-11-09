import React from 'react'
import img1 from "../assets/indianMedco.png"
import img2 from "../assets/ACHE.png"
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbarFirstDiv'>
        <img src={img1} className='firstImage' alt=''></img>
        <div className='thirdDiv'>
            <p className='thirdDivPara'>SDG-3 Consensus Building</p>
        </div>
        <div className='secondDiv'>
         <img src={img2} className='secondImage' alt=''></img>
         <p className='secondDivPara'>Empowering Sustainable Health</p>
        </div>
    </div>
  )
}

export default Navbar