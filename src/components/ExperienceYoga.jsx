import React, { useEffect }  from 'react'
import line from "../assets/line.png"
import yoga3 from "../assets/yoga3.jpg"
import AOS from "aos"
const ExperienceYoga = () => {
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])
  return (
  <>
  <section className="experienceyoga">
    <p className='text-center pt-4  yogap' data-aos="fade-in">Experience of Yoga</p>
    <div className="d-flex justify-content-center">
    <img src={line} alt="" className="img-fluid mb-4 lineImg" />
    </div>
  <div className="d-flex justify-content-center">
 <div className="yogaTxtBox">
 <p className="yogaTxt mb-5" data-aos="fade-in">
    Yoga Fit is where you can find balance, harmony and energy renewal amidst the hectic bustle of everyday pressures and deadlines. Relax & enjoy a personalized day yoga experience in our comfortable sanctuary.
    </p>
 </div>
  </div>
  <div className="container">
    <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4" >
           <div className="d-flex justify-content-center" data-aos="fade-in">
            <div className="iconTxt">
                <p className='text-end iconP'>Balance Body & <br /> <span>Mind</span> <br /> <p className='txtspan'>Cum sociis natoque penatibus et <br /> magnis dis parturient montesmus. <br /> Pro vel nibh et elit</p></p>
            </div>
            <div className="iconTxt ms-4">
            <div className="iconBox" >
            <i className="fa-solid fa-heart"></i>
            </div>
            </div>
           </div>
           <div className="row mt-5">
           <div className="col-12 col-sm-12 col-md-12 col-lg-12">
           <div className="d-flex justify-content-center" data-aos="fade-in">
            <div className="iconTxt">
                <p className='text-end iconP'>Healthy Daily Life <br /> <p className='txtspan'>Cum sociis natoque penatibus et <br /> magnis dis parturient montesmus. <br /> Pro vel nibh et elit</p></p>
            </div>
            <div className="iconTxt ms-4">
            <div className="iconBox2">
            <i className="fa-solid fa-droplet"></i>
            </div>
            </div>
           </div>
           <div className="row  mt-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
           <div className="d-flex justify-content-center" data-aos="fade-in">
            <div className="iconTxt">
                <p className='text-end iconP'>Healthy Daily Life <br /> <p className='txtspan'>Cum sociis natoque penatibus et <br /> magnis dis parturient montesmus. <br /> Pro vel nibh et elit</p></p>
            </div>
            <div className="iconTxt ms-4">
            <div className="iconBox3">
            <i className="fa-solid fa-fire"></i>
            </div>
            </div>
           </div>
        </div>
    </div>
        </div>
           </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
         <img src={yoga3} alt="" className="img-fluid" data-aos="fade-in"/>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
           <div className="d-flex justify-content-center flex-row-reverse flex2" data-aos="fade-in">
            <div className="iconTxt">
                <p className='text-start iconP ms-3'>Meditation Practice <br /> <p className='txtspan'>Cum sociis natoque penatibus et <br /> magnis dis parturient montesmus. <br /> Pro vel nibh et elit</p></p>
            </div>
            <div className="iconTxt ms-4">
            <div className="iconBox4">
            <i className="fa-regular fa-eye"></i>
            </div>
            </div>
           </div>
           <div className="row mt-5">
           <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
           <div className="d-flex justify-content-center flex-row-reverse flex2" data-aos="fade-in">
            <div className="iconTxt">
                <p className='text-start iconP ms-3'>Healthy Daily Life <br /> <p className='txtspan'>Cum sociis natoque penatibus et <br /> magnis dis parturient montesmus. <br /> Pro vel nibh et elit</p></p>
            </div>
            <div className="iconTxt ms-4">
            <div className="iconBox5">
            <i className="fa-solid fa-award"></i>
            </div>
            </div>
           </div>
           <div className="row  mt-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
           <div className="d-flex justify-content-center flex-row-reverse flex2" data-aos="fade-in">
            <div className="iconTxt">
                <p className='text-start iconP ms-3'>Healthy Daily Life <br /> <p className='txtspan'>Cum sociis natoque penatibus et <br /> magnis dis parturient montesmus. <br /> Pro vel nibh et elit</p></p>
            </div>
            <div className="iconTxt ms-4">
            <div className="iconBox6">
            <i class="fa-solid fa-user-group"></i>
            </div>
            </div>
           </div>
        </div>
    </div>
        </div>
           </div>
        </div>
    </div>

   
  </div>

<div id="yourTraining" className='mt-5'>
<div className="container py-4">
    <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-8">
            <p className="trainingp">Choose Your Classes and Start Your Training </p>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <div className="d-flex justify-content-center">
            <div className="bookNow mt-2 "  data-aos="flip-right">
                <a href="#react"> <i className="fa-regular fa-calendar-days me-2"></i>BOOK NOW !</a>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
  </section>
  </>
  )
}

export default ExperienceYoga