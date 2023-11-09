import React from 'react'
import "./SecondLastFooter.css"

function SecondLastFooter() {
  return (
    <div className='SecondLastFooterFirstDiv'>

      <div className='cme3SecondDiv'>

        <p className='cme3SecondDivFirstPara'>
           Key Takeaways:  
        </p>

      </div>

      <div className='cme1ThirdDiv'>
            <p className='cme1ThirdDivFirstPara'>
             To sum up, our e-newsletter serves as a comprehensive resource to help you understand the critical interplay between health, de-addiction, and lifestyle choices. Our collective mission is to build a healthier, more sustainable world, in alignment with Sustainable Development Goal 3 (SDG-3).
            </p>
      </div>

       {/* Video Section */}

       <div className='videoDiv'>

       <iframe className='video' src="https://www.youtube.com/embed/N6AJ86tI3kU?si=23RwtxHq_RbzAV-1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

       </div>

       <div className='cme1ThirdDiv'>
            <p className='cme1ThirdDivFirstPara'>
              We hope this e-newsletter inspires you to make informed choices and embark on a journey towards wellness.
            </p>
       </div>

       <div className='cme1ThirdDiv'>
            <p className='cme1ThirdDivFirstPara'>
              <span className='cme4ThirdDivFirstSpan'>P.S. </span>Stay tuned for more enlightening discussions on health in our upcoming episodes of <span className='secondLastFooterSpan'>"Health Par Charcha."</span>
            </p>
       </div>

    </div>
  )
}

export default SecondLastFooter