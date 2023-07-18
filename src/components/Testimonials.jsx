import React from 'react'
import yogalogo from "../assets/yogalogo.png"
import Slider from "react-slick";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
 <>
   <section className="testimonials">
    <div className="d-flex justify-content-center">
    <img src={yogalogo} alt="" className="img-fluid mt-5" />
    </div>
    <div className="container">
        <div className="row  justify-content-md-center mt-5">
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 ">
            <div className='slider pb-5'>
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

export default Testimonials