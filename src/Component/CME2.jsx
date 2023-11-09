import React from 'react'
import "./CME2.css"
import img1 from "../assets/CME2/JKPhotoshop.jpg"
import img2 from "../assets/CME2/gkPhotoshop.jpg"
import img3 from "../assets/CME2/shPhotoshop.jpg"
import img4 from  "../assets/CME2/sandhaya.jpg"
import img5 from "../assets/Collarge/mDPhotoshop.png"

function CME2() {
  return (
    <div className='cme2FirstDiv'>
        <div className='cme1SecondDiv'>

         <p className='cme1SecondDivFirstPara'>
            Continued Medical Education (CME)-2: 
          <br/>
          <span>Pathways to Wellness </span>
         </p>

        </div> 

        <div className='cme1ThirdDiv'>
            <p className='cme1ThirdDivFirstPara'>
              The CME explored international strategies for de-addiction from drugs, tobacco, alcohol, and smartphones to achieve Sustainable Development Goal 3 (SDG-3). Get insights from our expert panellists:
            </p>
        </div>

       <div className='tentativeMediaAttendeeThirdDiv'>
            <div className='tentativeMediaAttendeeFourthDiv'>
                <img src={img1} loading="lazy" alt='' className='tentativeMediaAttendeeImage'></img>
                <div className='tentativeMediaAttendeeFifthDiv'>
                    <p className='cardFirstPara'>Dr. J Kumar</p>
                    <p className='cardSecondPara'>Chief Convenor,</p>
                    <p className='cardSecondPara'> ACHE</p>
                    <p className='cardSecondPara'>Advisory Board,</p>
                    <p className='cardSecondPara'>Eminent Neurosurgeon</p>
                </div>
            </div>

            <div className='tentativeMediaAttendeeFourthDiv'>
                 <img src={img2} loading="lazy" alt='' className='tentativeMediaAttendeeImage'></img>
                <div className='tentativeMediaAttendeeFifthDiv'>
                    <p className='cardFirstPara'>Dr. Gyanender Kumar</p>
                    <p className='cardSecondPara'>Professor,</p>
                    <p className='cardSecondPara'>Department of Pediatric and Preventive Dentistry</p>
                </div>
            </div>

            <div className='tentativeMediaAttendeeFourthDiv'>
                 <img src={img3} loading="lazy" alt='' className='tentativeMediaAttendeeImage'></img>
                <div className='tentativeMediaAttendeeFifthDiv'>
                    <p className='cardFirstPara'>Dr. Shobha Srivastava</p>
                    <p className='cardSecondPara'>Deputy Registrar,</p>
                    <p className='cardSecondPara'>Administration & Student Facilitation</p>
                </div>
            </div>

            <div className='tentativeMediaAttendeeFourthDiv'>
                 <img src={img4} loading="lazy" alt='' className='tentativeMediaAttendeeImage'></img>
                <div  className='tentativeMediaAttendeeFifthDiv'>
                    <p className='cardFirstPara'>Ms. Sandhya Rani</p>
                    <p className='cardSecondPara'>Senior Nutritionist,</p>
                    <p className='cardSecondPara'>Asian Coaliation for Health Empowerment</p>
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

export default CME2