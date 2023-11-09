import React from 'react'
import "./CME4.css"
import img1 from "../assets/CME4/ACPhoto.jpg"
import img2 from "../assets/CME4/ACPhoto.jpg"
import img3 from "../assets/CME4/ACPhoto.jpg"
import img4 from "../assets/CME4/sandhaya.jpg"

function CME4() {
  return (
    <div className='cme4FirstDiv'>

       <div className='cme1SecondDiv'>

          <p className='cme1SecondDivFirstPara'>
              Health Show:  
            <br/>
            <span> Health Par Charcha – 1st Episode Highlights</span>
          </p>

       </div>

       <div className='cme1ThirdDiv'>
            <p className='cme1ThirdDivFirstPara'>
              <span className='cme4ThirdDivFirstSpan'>Topic :</span> Understanding the Profound Impact of Lifestyle Choices on Health. Explore insights from our distinguished speakers:
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
                    <p className='cme3cardFirstPara'>Ms. Dibya Prakash</p>
                    <p className='cme3cardSecondPara'>Founder,</p>
                    <p className='cme3cardSecondPara'>Metamorphosis Wellness Therapist</p>
                </div>
            </div>

            <div className='cme3MediaAttendeeFourthDiv'>
                 <img src={img3} loading="lazy" alt='' className='cme3MediaAttendeeImage'></img>
                <div className='cme3MediaAttendeeFifthDiv'>
                    <p className='cme3cardFirstPara'>Dr. Gagandeep Kaur</p>
                    <p className='cme3cardSecondPara'>Director,</p>
                    <p className='cme3cardSecondPara'>Unique Psychological Services,</p>
                    <p className='cme3cardSecondPara'>New Delhi</p>
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

        <div className='cme1ThirdDiv'>
            <p className='cme1ThirdDivFirstPara'>
            The – 1st Episode of Health Par Charcha brought to discussion the impact of lifestyle on health. Experts emphasized the consequences of an unhealthy lifestyle, including diseases like hypertension, diabetes, and asthma. The discussion touched on tobacco and alcohol addiction, smartphone usage, and the importance of physical activity. The section encourages individuals to make informed choices for a healthier life. 
            </p>
        </div>

    </div>
  )
}

export default CME4