import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const CountUpSec = () => {
  const [counterOn,setCounterOn] = useState(false)
  return (
    <>
    <section className="countup">

        <ScrollTrigger 
              onEnter={()=>setCounterOn(true)}
              onExit={()=>setCounterOn(false)}
              >
      <div className="container">
        <div className="row justify-content-sm-center g-4">
            <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            
              <div className="countBox text-center">
            <i className="fa-solid fa-thumbs-up mb-3"></i>
            <p className='countp'>
              {
                counterOn && <CountUp start={0} end={100} duration={3}/>
              }
              %
            </p>
            <p className='countp1'>Quantity</p>
            </div>
          
            
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-2 ">
                 <div className="countBox text-center">
                 <i className="fa-solid fa-calendar-days mb-3"></i>
            <p className='countp'>
            {
                counterOn && <CountUp start={0} end={38} duration={3}/>
              }
            </p>
            <p className='countp1'>Years of experience</p>
            </div>
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-2 ">
                 <div className="countBox text-center">
            <i className="fa-solid fa-user mb-3"></i>
            <p className='countp'>
            {
                counterOn && <CountUp start={0} end={12} duration={4} />
              }
            </p>
            <p className='countp1'>Prosessional Trainers</p>
            </div>
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-2 ">
                 <div className="countBox text-center">
            <i className="fa-solid fa-star mb-3"></i>
            <p className='countp'>
            {
                counterOn && <CountUp start={0} end={16} duration={5} />
              }
            </p>
            <p className='countp1'>Classes</p>
            </div>
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-2 ">
                 <div className="countBox text-center">
            <i className="fa-solid fa-users mb-3"></i>
            <p className='countp'>
            {
                counterOn && <CountUp start={0} end={480} duration={5}/>
              }
            </p>
            <p className='countp1'>Members</p>
            </div>
            </div>
        </div>
      </div>
      </ScrollTrigger>
    </section>
    </>
  )
}

export default CountUpSec