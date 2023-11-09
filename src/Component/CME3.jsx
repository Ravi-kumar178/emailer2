import React from 'react'
import "./CME3.css"
import img1 from "../assets/CME3/ACPhoto.jpg"
import img2 from "../assets/CME3/Dr. M Wali.jpg"
import img3 from "../assets/CME3/Dr. Chandrakant Pandav.jpg"
import img4 from "../assets/CME3/sandhaya.jpg"
import img5 from "../assets/Collarge/cme2P.png"

function CME3() {
  return (
    <div className='cme3FirstDiv'>

          <div className='cme1SecondDiv'>

            <p className='cme1SecondDivFirstPara'>
              Continued Medical Education (CME)-3: 
             <br/>
             <span>Global Strategies for Holistic De-addiction</span>
            </p>

          </div> 

          <div className='cme1ThirdDiv'>
            <p className='cme1ThirdDivFirstPara'>
            The CME united with experts to confront the global challenge of addiction and delved into holistic de-addiction strategies. Gain insights from our distinguished panellists:
            </p>
          </div>

          
          <div className='cme3MediaAttendeeThirdDiv'>
            <div className='cme3MediaAttendeeFourthDiv'>
                <img src={img1} loading="lazy" alt='' className='cme3MediaAttendeeImage'></img>
                <div className='cme3MediaAttendeeFifthDiv'>
                    <p className='cme3cardFirstPara'>Dr. Anil Chaturvedi</p>
                    <p className='cme3cardSecondPara'>Recipient of Dr B C Roy National Award for ‘Eminent Person-Literature’</p>
                    <p className='cme3cardSecondPara'> Medical Adviser</p>
                    <p className='cme3cardSecondPara'> Asian Coaliation for Health Empowerment</p>
                </div>
            </div>

            <div className='cme3MediaAttendeeFourthDiv'>
                 <img src={img2} loading="lazy" alt='' className='cme3MediaAttendeeImage'></img>
                <div className='cme3MediaAttendeeFifthDiv'>
                    <p className='cme3cardFirstPara'>Prof. (Dr.) M. Wali</p>
                    <p className='cme3cardSecondPara'>Senior Consultant,</p>
                    <p className='cme3cardSecondPara'>Shri Ganga Ram Hospital,</p>
                    <p className='cme3cardSecondPara'>New Delhi</p>
                    <p className='cme3cardSecondPara'>(Padma Shri Awardee)</p>
                </div>
            </div>

            <div className='cme3MediaAttendeeFourthDiv'>
                 <img src={img3} loading="lazy" alt='' className='cme3MediaAttendeeImage'></img>
                <div className='cme3MediaAttendeeFifthDiv'>
                    <p className='cme3cardFirstPara'>Dr. Chandrakant S Pandav</p>
                    <p className='cme3cardSecondPara'>Former HOD,</p>
                    <p className='cme3cardSecondPara'>Department of Community Medicine,</p>
                    <p className='cme3cardSecondPara'>AIIMS,</p>
                    <p className='cme3cardSecondPara'>New Delhi</p>
                    <p className='cme3cardSecondPara'>(Padma Shri Awardee)</p>
                </div>
            </div>

            <div className='cme3MediaAttendeeFourthDiv'>
                 <img src={img4} loading="lazy" alt='' className='cme3MediaAttendeeImage'></img>
                <div  className='cme3MediaAttendeeFifthDiv'>
                    <p className='cme3cardFirstPara'>Ms. Sandhya Rani</p>
                    <p className='cme3cardSecondPara'>Senior Nutritionist,</p>
                    <p className='cme3cardSecondPara'>Asian Coaliation for Health Empowerment</p>
                </div> 
            </div>
          </div>

          <div className='cme1FifthDiv'>
             <div className='cme1SixthDiv'>
               <p className='cme1SixthDivFirstPara'>Key Takeaways:</p>
               <p className='cme1SixthDivSecondPara'>The CME emphasized the global burden of addiction, the role of international organizations, and harm reduction approaches like nicotine replacement therapy. It calls for prevention, education, and collective action to tackle addiction and promote well-being.</p>
             </div>

             <div className='cme1SeventhDiv'>
               <img src={img5} loading='lazy' alt='' className='cme1SeventhDivImg'></img>
              </div>
          </div>

    </div>
  )
}

export default CME3