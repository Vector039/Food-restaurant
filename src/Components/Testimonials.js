import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import {AiFillStar} from "react-icons/ai"
import Navbar from './Navbar'
import Footer from './Footer'

const Testimonials = () => {
  return (
    <>
      <Navbar/>
      <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Testimonials</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className='primary-text'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam deleniti consectetur totam, suscipit temporibus soluta sit fuga unde odit.
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, delectus velit incidunt consectetur veritatis vitae laborum. Nemo sequi provident odio.</p>
            <div className="testimonials-stars-container">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <h2>John Doe</h2>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Testimonials