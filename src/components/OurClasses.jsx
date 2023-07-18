import React from 'react'
import { Link } from 'react-router-dom'
import classesData from '../data/classes'
const OurClasses = () => {
  return (
    <>
    <section className="ourclasses ">
        <p className='text-center classesp mb-4'>Our Classes</p>
        <div className="container">
            <div className="row">
                {
                  classesData.map((fd,i)=>(
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                    <div className="classesBox" key={i}>
                       <div className="img">
                       <img src={fd.img} alt="" className="img-fluid" />
                       </div>
                     <div className="classesOverlay1">
                     <div className="classesOverlay">
                        <Link to={`/ourclassesdetails/${fd.id}`}>
                        <a href="#react">Read More</a>
                        </Link>
                       </div>
                     </div>
                 
                    </div>
                        <p className='text-center mt-3 classesp2'>
                     {fd.title}
                     </p>
                     <p className='classesp3 text-center'>{fd.day}</p>
                </div>
                  ))
                }
             
            </div>
        </div>
    </section>
    </>
  )
}

export default OurClasses