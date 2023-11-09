import React from 'react'
import "./CME1.css"
import img1 from "../assets/Dr. M Wali.jpg"
import img2 from "../assets/Dr. Chandrakant Pandav.jpg"
import img3 from "../assets/sandhaya.jpg"
import img4 from "../assets/Collarge/LH2.png"

function CME1() {
  return (
    <div className='cme1FirstDiv'>

       <div className='cme1SecondDiv'>

         <p className='cme1SecondDivFirstPara'>
           Continued Medical Education (CME)-1: 
            <br/>
            <span>Sustaining Heart Wellness</span>
         </p>

       </div> 

       <div className='cme1ThirdDiv'>
            <p className='cme1ThirdDivFirstPara'>
              The CME delved into the in-depth exploration of the critical connection between smoking cessation, nutrition, and cardiovascular health. Learn from the insights shared by our esteemed panellists:
            </p>
       </div>

       <div className='MediaAttendeeThirdDiv'>
        <div className='MediaAttendeeFourthDiv'>
            <img src={img1} loading="lazy" alt='' className='MediaAttendeeImage'></img>
            <div className='MediaAttendeeFifthDiv'>
                <p className='cme1cardFirstPara'>Prof. (Dr.) M. Wali</p>
                <p className='cme1cardSecondPara'>Senior Consultant,</p>
                <p className='cme1cardSecondPara'>Shri Ganga Ram Hospital,</p>
                <p className='cme1cardSecondPara'>New Delhi</p>
                <p className='cme1cardSecondPara'>(Padma Shri Awardee)</p>
            </div>
        </div>

        <div className='MediaAttendeeFourthDiv'>
             <img src={img2} loading="lazy" alt='' className='MediaAttendeeImage'></img>
            <div className='MediaAttendeeFifthDiv'>
                <p className='cme1cardFirstPara'>Dr. Chandrakant S Pandav</p>
                <p className='cme1cardSecondPara'>Former HOD,</p>
                <p className='cme1cardSecondPara'>Department of Community Medicine,</p>
                <p className='cme1cardSecondPara'>AIIMS,</p>
                <p className='cme1cardSecondPara'>New Delhi</p>
                <p className='cme1cardSecondPara'>(Padma Shri Awardee)</p>
            </div>
        </div>

        <div className='MediaAttendeeFourthDiv'>
             <img src={img3} loading="lazy" alt='' className='MediaAttendeeImage'></img>
            <div className='MediaAttendeeFifthDiv'>
                <p className='cme1cardFirstPara'>Sandhya Rani</p>
                <p className='cme1cardSecondPara'>Senior Nutritionist,</p>
                <p className='cme1cardSecondPara'>Asian Coaliation for Health Empowerment</p>
            </div>
        </div>
       </div>

       <div className='cme1FifthDiv'>
         <div className='cme1SixthDiv'>
            <p className='cme1SixthDivFirstPara'>Key Takeaways:</p>
            <p className='cme1SixthDivSecondPara'>The CME highlighted the importance of balanced nutrition and smoking cessation in preventing cardiovascular diseases. It also discusses global strategies for smoking cessation and harm reduction methods such as Heat-Not-Burn (HNB) products.</p>
         </div>

         <div className='cme1SeventhDiv'>
            <img src={img4} loading='lazy' alt='' className='cme1SeventhDivImg'></img>
         </div>
       </div>

    </div>
  )
}

export default CME1