import React from 'react'
import BreadCrumb from './BreadCrumb'
import Slider from "react-slick";
import aboutimg1 from "../assets/aboutimg1.jpg"
import aboutimg2 from "../assets/aboutimg2.jpg"
import aboutimg3 from "../assets/aboutimg3.jpg"
import aboutimg4 from "../assets/aboutimg4.jpg"
import timetable from '../data/timetable';
import ProgressBar from "@ramonak/react-progress-bar";
import AOS from "aos"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      useEffect(()=>{
        AOS.init({duration:2000})
      },[])
  return (
    <>
    <BreadCrumb title="About" crumb1="Home" crumb2="About"/>
    <section className="about">
        <div className="container">
            <div className="row justify-content-sm-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-5">
           <div className="slider">
           <Slider {...settings} className="mb-4">
          <div>
            <img src={aboutimg1} alt="" className="img-fluid" />
          </div>
          <div>
              <img src={aboutimg2} alt="" className="img-fluid" />
          </div>
          <div>
              <img src={aboutimg3} alt="" className="img-fluid" />
          </div>
          <div>
              <img src={aboutimg4} alt="" className="img-fluid" />
          </div>
        </Slider>
           </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                    <div className="aboutBox mx-2 mt-4">
                        <p className='aboutp'>Yoga Fit Studios</p>
                        <p className="aboutp1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla diam nunc, a porta massa commodo a. Maecenas tincidunt lacinia ex vel rutrum. Nam convallis molestie turpis eget pretium. Sed dignissim quam at egestas iaculis. Nulla facilisi. Nunc non felis ac turpis dictum consectetur. Suspendisse sit amet erat et tellus porttitor tincidunt in sed purus. Morbi nec dignissim erat, nec tempus dui. Quisque tincidunt magna sem, sed aliquam felis pharetra vitae.
                        </p>
                        <ul>
                            <li>Any type of yoga experience</li>
                            <li>Professional team with unique program</li>
                            <li>Individual or group classes</li>
                            <li>Flexible schedule options</li>
                        </ul>
                        <Link to="/create">
                        <button className='aboutbtn ms-2 mt-2'>SIGN IN NOW!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <section className="yogafitstudio">
            <div className="container pb-5">
                <p className="studiop text-center py-5">Reasons To Try YogaFit Studios</p>
                <div className="row g-3 ms-3">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                       <div className="row">
                        <div className="col-3 col-sm-4 col-md-3 col-lg-3">
                        <div className="iconBox"><i className="fa-regular fa-star"></i> </div>
                        </div>
                        <div className="col-9 col-sm-9 col-md-9 col-lg-9">
                            <div className="iconTxt">
                                <p className='iconp'>Something For <br /> Everyone</p>
                                <p className="iconp1">Aenean a diam pulvinar, convallis diam eget, mollis lorem. Mauris felis neque, tempus a scelerisque in, ultrices non velit</p>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                       <div className="row">
                        <div className="col-3 col-sm-4 col-md-3 col-lg-3">
                        <div className="iconBox"><i className="fa-regular fa-face-smile-wink"></i> </div>
                        </div>
                        <div className="col-9 col-sm-9 col-md-9 col-lg-9">
                            <div className="iconTxt">
                                <p className='iconp'>Friendly Staff</p>
                                <p className="iconp1">Aenean a diam pulvinar, convallis diam eget, mollis lorem. Mauris felis neque, tempus a scelerisque in, ultrices non velit</p>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                       <div className="row">
                        <div className="col-3 col-sm-4 col-md-3 col-lg-3">
                        <div className="iconBox"><i className="fa-brands fa-canadian-maple-leaf"></i> </div>
                        </div>
                        <div className="col-9 col-sm-9 col-md-9 col-lg-9">
                            <div className="iconTxt">
                                <p className='iconp'>Flexible Options</p>
                                <p className="iconp1">Aenean a diam pulvinar, convallis diam eget, mollis lorem. Mauris felis neque, tempus a scelerisque in, ultrices non velit</p>
                            </div>
                        </div>
                       </div>
                    </div>
                
                
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                       <div className="row">
                        <div className="col-3 col-sm-4 col-md-3 col-lg-3">
                        <div className="iconBox"><i className="fa-solid fa-mug-saucer"></i> </div>
                        </div>
                        <div className="col-9 col-sm-9 col-md-9 col-lg-9">
                            <div className="iconTxt">
                                <p className='iconp'>One Free Week</p>
                                <p className="iconp1">Aenean a diam pulvinar, convallis diam eget, mollis lorem. Mauris felis neque, tempus a scelerisque in, ultrices non velit</p>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                       <div className="row">
                        <div className="col-3 col-sm-4 col-md-3 col-lg-3">
                        <div className="iconBox"><i className="fa-solid fa-laptop"></i> </div>
                        </div>
                        <div className="col-9 col-sm-9 col-md-9 col-lg-9">
                            <div className="iconTxt">
                                <p className='iconp'>Virtual Yoga</p>
                                <p className="iconp1">Aenean a diam pulvinar, convallis diam eget, mollis lorem. Mauris felis neque, tempus a scelerisque in, ultrices non velit</p>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                       <div className="row">
                        <div className="col-3 col-sm-4 col-md-3 col-lg-3">
                        <div className="iconBox"><i className="fa-solid fa-mobile-screen-button"></i> </div>
                        </div>
                        <div className="col-9 col-sm-9 col-md-9 col-lg-9">
                            <div className="iconTxt">
                                <p className='iconp'>Never Ending <br /> Support</p>
                                <p className="iconp1">Aenean a diam pulvinar, convallis diam eget, mollis lorem. Mauris felis neque, tempus a scelerisque in, ultrices non velit</p>
                            </div>
                        </div>
                       </div>
                    </div>

                </div>
            </div>
        </section>


        <section className="ourteam">
            <div className="container pb-5">
                <p className='ourteamp text-center py-5'>Our Team</p>
                <div className="row g-3">
                   {
                    timetable.slice(4,8).map(fd=>(
                        <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                        <div className="teamBox">
                            <div className="d-flex justify-content-center align-items-center">
                            <img src={fd.img} alt="" className='img-fluid mt-5'  />
                            </div>
                          <p className="text-center mt-2  teamp">{fd.name}</p>
                          <p className="text-center teamp1">{fd.desc}</p>
                         <p className='teamp2 text-center'>Etiam eu molestie eros, <br /> commodo hendrerit sapien.</p>
                       <div className="d-flex justify-content-center">
                       <Link to={`/ourteamdetails/${fd.id}`}>
                       <button className='teambtn'>READ MORE</button>
                       </Link>
                       </div>
                        </div>
                                </div>
                    ))
                   }
                       <div className="d-flex justify-content-center mt-5">
                       <Link to="/team"><button className='allteam'>SEE ALL TEAM</button></Link>
                       </div>
                </div>
            </div>
        </section>


        <section className="peoplesay">
             <div className="container">
                <p className="text-center py-5 peoplesayp"> What People Say About YogaFit</p>
                <div className="row " style={{"paddingBottom":"100px"}}>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 pb-5">
                  <Slider {...settings2}>
          <div className="sliderBox">
          <div>
          <div className="sliderTxt">
             <div className="container mt-5">
             <p className="sliderp ">
               " I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself. "
                </p>
                <div className="d-flex justify-content-end">
                    <p className="text-end sliderp">John Dowson</p>
                </div>
                <div className="d-flex justify-content-end">
                    <p className="text-end sliderp2">Businessman</p>
                </div>
             </div>
            </div>
          </div>
          </div>
          <div>
                  <div className="sliderBox">
          <div>
          <div className="sliderTxt">
             <div className="container mt-5">
             <p className="sliderp ">
               " I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself. "
                </p>
                <div className="d-flex justify-content-end">
                    <p className="text-end sliderp">Isabella Clifford</p>
                </div>
                <div className="d-flex justify-content-end">
                    <p className="text-end sliderp2">Neuropatalogy Doctor</p>
                </div>
             </div>
            </div>
          </div>
          </div>
          </div>
          <div>
                  <div className="sliderBox">
          <div>
          <div className="sliderTxt">
             <div className="container mt-5">
             <p className="sliderp ">
               " I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself. "
                </p>
                <div className="d-flex justify-content-end">
                    <p className="text-end sliderp">Jack Porter</p>
                </div>
                <div className="d-flex justify-content-end">
                    <p className="text-end sliderp2">Manager</p>
                </div>
             </div>
            </div>
          </div>
          </div>
          </div>
        </Slider>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6" >
                        <div className="row g-3">
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 me-4"style={{"borderRight":"2px solid #fff"}}>
                                <p className="progressp">
                                Quality
                                </p>
                                <p className="progressp">
                                Classes
                                </p>
                                <p className="progressp">
                                Yoga
                                </p>
                                <p className="progressp">
                                Service
                                </p>
                                <p className="progressp">
                                Professionals
                                </p>
                                <p className="progressp">
                                Support
                                </p>
                            </div>
                            <div className="col-8 col-sm-7 col-md-7 col-lg-7" >
                            <ProgressBar 
                            completed={95} 
                            animateOnRender={true}  
                            className='progressBar'
                            labelClassName="label"
                            barContainerClassName="container"
                            bgColor='#fff'
                            transitionDuration="8s"
                            />
                            <br />
                            <ProgressBar 
                            completed={90} 
                            animateOnRender={true}  
                            className='progressBar'
                            labelClassName="label"
                            barContainerClassName="container"
                            bgColor='#fff'
                            transitionDuration="8s"
                            />
                            <br />
                            <ProgressBar 
                            completed={99} 
                            animateOnRender={true}  
                            className='progressBar'
                            labelClassName="label"
                            barContainerClassName="container"
                            bgColor='#fff'
                            transitionDuration="8s"
                            />
                            <br />
                            <ProgressBar 
                            completed={85} 
                            animateOnRender={true}  
                            className='progressBar'
                            labelClassName="label"
                            barContainerClassName="container"
                            bgColor='#fff'
                            transitionDuration="8s"
                            />
                            <br />
                            <ProgressBar 
                            completed={90} 
                            animateOnRender={true}  
                            className='progressBar'
                            labelClassName="label"
                            barContainerClassName="container"
                            bgColor='#fff'
                            transitionDuration="8s"
                            />
                            <br />
                            <ProgressBar 
                            completed={95} 
                            animateOnRender={true}  
                            className='progressBar'
                            labelClassName="label"
                            barContainerClassName="container"
                            bgColor='#fff'
                            transitionDuration="8s"
                            />
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             
        </section>



    </>
  )
}

export default About