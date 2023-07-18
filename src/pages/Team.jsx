import React from 'react'
import BreadCrumb from './BreadCrumb'
import yoga4 from "../assets/yoga4.jpg"
import timetable from '../data/timetable';
import ProgressBar from "@ramonak/react-progress-bar";
import yogalogo from "../assets/yogalogo.png"
import Slider from "react-slick";
import { Link } from 'react-router-dom';
const Team = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
      <>
    <BreadCrumb title="Team" crumb1="Home" crumb2="Team"/>
<section className="team">
 
        <p className="text-center teamp pt-5 pb-3">
        Our Professional Team
        </p>
        <p className="text-center teamp1">
        Yoga Fit is where you can find balance, harmony and energy renewal amidst the hectic bustle of everyday pressures <br /> and deadlines. Relax & enjoy a personalized day spa experience in our comfortable sanctuary.
        </p>
        <div className="container container2 my-5">
        <div className="row justify-content-sm-center p-5">
            <div className="col-12 col-sm-4  col-md-3 col-lg-2 ">
                <div className="sheldonImg">
                <img src={yoga4} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 ">
                <p className='sheldonp mt-3'>Mary Sheldon</p>
                <p className='sheldonp1'>Yoga Director</p>
                <div className="d-flex">
                    <div className="iconBox">
                <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="iconBox">
                <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="iconBox">
                    <i className="fa-brands fa-square-instagram"></i>
                    </div>
                    <div className="iconBox">
                <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">

                <p className='sheldonp2 mt-3 ms-3'>The origins of yoga have been speculated to date back to pre-Vedic Indian traditions, but most likely developed around the sixth and fifth centuries BCE, in ancient India’s ascetic and śramaṇa movements. The chronology of earliest texts describing yoga-practices is unclear, varyingly credited to Hindu Upanishads and Buddhist Pāli Canon, probably of third century BCE or later. The Yoga Sutras of Patanjali date from the first half of the 1st millennium CE, but only gained prominence in the 20th century. Hatha yoga texts emerged around the 11th century with origins in tantra.</p>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row g-3">
        {
                    timetable.slice(4,8).map(fd=>(
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="teamBox">
                            <div className="d-flex justify-content-center align-items-center">
                            <img src={fd.img} alt="" className='img-fluid mt-5'  />
                            </div>
                          <p className="text-center mt-2  teamp">{fd.name}</p>
                          <p className="text-center teamp1">{fd.desc}</p>
                         <p className='teamp2 text-center'>Etiam eu molestie eros, <br /> commodo hendrerit sapien.</p>
                       <div className="d-flex justify-content-center">
                   <Link to={`/teamdetails/${fd.id}`}>
                   <button className='teambtn'>READ MORE</button>
                   </Link>
                       </div>
                        </div>
                        <div className="row ms-1">
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                            <div className="skillbar mt-3">
                            <p>Educability</p>
                            <p>Experience</p>
                            <p>Skills</p>
                            
                        </div>
                            </div>
                            <div className="col-9 col-sm-9 col-md-9 col-lg-9 mt-4">
                            <ProgressBar 
                            completed={82} 
                            animateOnRender={true}  
                            className='progressBar'
                            labelClassName="label"
                            barContainerClassName="container"
                            bgColor='#6592D6'
                            height="18px"
                            transitionDuration="3s"
                            />
                            <br />
                            <ProgressBar 
                            completed={70}
                            animateOnRender={true}  
                            className='progressBar'
                            labelClassName="label"
                            barContainerClassName="container"
                            bgColor='#CD7399'
                            transitionDuration="3s"
                            height="18px"
                            />
                            <br />
                            <ProgressBar 
                            completed={92} 
                            animateOnRender={true}  
                            className='progressBar'
                            labelClassName="label"
                            barContainerClassName="container"
                            bgColor='#E3B26D'
                            height="18px"
                            transitionDuration="3s"
                            />
                            </div>
                        </div>
                                </div>
                    ))
                   }
        </div>
    </div>
    
  <div className="container-fluid container3">
    <div className="row justify-content-md-center">
        <div className="col-12 col-sm-12 col-md-9 col-lg-9">
        <div className='slider py-5'>
            <p className="text-center sliderp1">Students of the Month</p>
        <Slider {...settings}>
          <div>
              <p className='sliderp'>
              I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
              </p>
              <p className='text-center sliderName'>Isabella Clifford</p>
              <p className='text-center sliderName1'> Neuropathology doctor</p>
          </div>
          <div>
               <p className='sliderp'>
               I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
              </p>
              <p className='text-center sliderName'>Jack Porter</p>
              <p className='text-center sliderName1'>Manager</p>
          </div>
          <div>
               <p className='sliderp'>
               I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
              </p>
              <p className='text-center sliderName'>John Dowson</p>
              <p className='text-center sliderName1'>Businessman</p>
          </div>
        </Slider>
      </div>
        </div>
    </div>
  </div>
    </section>
</>
  )
}

export default Team