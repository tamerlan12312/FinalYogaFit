import React from 'react'
import { useParams } from 'react-router-dom'
import timetable from '../data/timetable'
import BreadCrumb from './BreadCrumb'
const OurTeamDetails = () => {
    const {url} = useParams() 
    const detailsItem = timetable.find(p=>p.id == url)
  return (
   <>
   <BreadCrumb title={`${detailsItem.name}`} crumb1="Home" crumb2={`${detailsItem.name}`}/>
   <section className="ourteamdetails">
   <div className="container pb-4">
   <p className="text-center py-4 detailsname">
                {detailsItem.name}
                <br />
                <span>{detailsItem.desc}</span>
            </p>
    <div className="row justify-content-sm-center">
        <div className="col-12 col-sm-6 col-md-6 col-lg-7 ">
           
            <div className="classesImg">
                <img src={detailsItem.img2} alt="" className='img-fluid' width="100%" />
                <p className="imgp my-5 ">
                Etiam eu molestie eros, commodo hendrerit sapien. Maecenas tempus leo ac nisi iaculis porta. Sed sapien tortor, aliquet a velit ut, lacinia molestie velit. Maecenas ornare consequat massa ullamcorper dapibus. Aliquam auctor, sapien sit amet accumsan facilisis, enim enim aliquet arcu, tincidunt pellentesque justo turpis id neque. Duis eleifend nunc sit amet mi dapibus ornare. Suspendisse vel libero se Maecenas ornare consequat massa ullamcorper dapibus. Aliquam auctor, sapien sit amet accumsan facilisis, enim enim aliquet arcu, tincidunt pellentesque justo turpis id neque. Duis eleifend nunc sit amet mi dapibus ornare. Suspendisse vel libero se
                </p>
            </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
          <div className="classesTxt">
            <p className='my-2'>Project details</p>
            <div className="d-flex justify-content-between">
                <div className="txt1"><p className='dflexp'>Areas of expertise</p></div>
                <div className="txt2"><span className='dflexSpan'>{detailsItem.desc}</span></div>
            </div>
            <div className="d-flex justify-content-between my-1">
                <div className="txt1"><p className='dflexp'>Categories</p></div>
                <div className="txt2 text-end"><span className='dflexSpan1'>2,trainers</span></div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="txt1"><p className='dflexp'>Experience :</p></div>
                <div className="txt2"><span className='dflexSpan'>3 years</span></div>
            </div>
            
          </div>
          <div className="classesTxt">
            <p className='my-2'>Personal Details</p>
            <div className="d-flex justify-content-between">
                <div className="txt1"><p className='dflexp'>Address</p></div>
                <div className="txt2"><span className='dflexSpan'>34 Anywhere Road </span></div>
            </div>
            <div className="d-flex justify-content-between my-1">
                <div className="txt1"><p className='dflexp'>Phone</p></div>
                <div className="txt2 text-end"><span className='dflexSpan1'>+1 777 456 456</span></div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="txt1"><p className='dflexp'>Email</p></div>
                <div className="txt2"><span className='dflexSpan '> pilates.instructors.example@com</span></div>
            </div>
            
          </div>
        </div>
    </div>
  </div>
   </section>
   </>
  )
}

export default OurTeamDetails