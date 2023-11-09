import React from 'react'
import "./FirstHeading.css"

function FirstHeading() {
  return (
    <div className='firstHeadingFirstDiv'>
        <div className='firstHeadingSecondDiv'>
            <p className='firstHeadingSecondDivFirstPara'>A World of Wellness:
                <br/>
             <span>Global Perspectives on Health and De-Addiction</span>
            </p> 
        </div>

        <div className='firstHeadingThirdDiv'>
            <p className='firstHeadingThirdDivFirstPara'>Dear Reader, </p>
            <p className='firstHeadingThirdDivSecondPara'>
            We are excited to present to you a unique and comprehensive e-newsletter that encapsulates the wisdom shared during three enlightening Continued Medical Education (CME) events. These CMEs brought together renowned experts, healthcare professionals, and thought leaders to delve into the intricate world of health, de-addiction, and the profound impact of lifestyle choices on well-being. Alongside these illuminating CME reports, we also bring you the key highlights from the inaugural episode of
            <span className='firstHeadingThirdDivFirstSpan'> "Health Par Charcha,"</span> a platform designed to spark conversations about health and wellness.
            </p>
        </div>
    </div>
  )
}

export default FirstHeading