import React from 'react'
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Navbar from './Navbar';
import Work from './Work';
import Footer from './Footer';

const About = () => {
  return (
    <>
        <Navbar/>
        <div className='about-section-container'>
            <div className= 'about-background-image-container'>
                <img src={AboutBackground} alt='' />
            </div>
            <div className='about-section-image-container'>
                <img src={AboutBackgroundImage} alt=""/>
            </div>
            <div className="about-section-text-contain">
                <p className='primary-subheading'>About</p>
                <h1 className='primary-heading'>
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className='primary-text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, rerum eum. Tempora voluptate exercitationem vitae et, nihil adipisci ipsum facilis repellendus corrupti totam at molestias amet aut, laborum atque est.
                </p>
                <p className='primary-text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, rerum eum. Tempora voluptate exercitationem vitae et, nihil adipisci ipsum facilis repellendus corrupti totam at molestias amet aut, laborum atque est.
                </p>
                <div className="about-buttons-container">
                    <button className='secondary-button'>Learn More</button>
                    <button className='watch-video-button'> <BsFillPlayCircleFill/> Watch video</button>
                </div>
            </div>
        </div>
        <Work/>
        <Footer/>
    </>
  )
}

export default About