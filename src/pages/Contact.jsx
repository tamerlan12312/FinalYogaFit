import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
const Contact = () => {
  return (
 <>
 <BreadCrumb title="Contacts" crumb1="Home" crumb2="Contacts"/>
<section className="contact">
<div className="container py-5">
  <div className="row">
    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
<div className="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732493!2d-74.30932777004286!3d40.69701928616164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2saz!4v1687164884677!5m2!1str!2saz" width="100%" height={300}  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
<p className='contactp my-4'>In ultricies quam sem, suscipit blandit risus tempor ac. Donec sed odio quam. Morbi sit amet dapibus est, vel aliquam nunc. Aliqu am in maximus lorem. Vivamus sit amet commodo orci, congue efficitur magna. Nullam eu porta tortor.</p>
<div className="d-flex">
  <i className="fa-solid fa-location-arrow"></i>
  <p className='contactp ms-2 mb-1'>Brooklyn, NY 10036, United States</p>
</div>
<div className="d-flex my-2">
<i className="fa-solid fa-mobile-screen-button text-secondary"></i>
  <p className='contactp ms-2 mb-1'>1-800-123-123422</p>
</div>
<div className="d-flex">
<i className="fa-solid fa-envelope-circle-check"></i>
  <p className='contactp ms-1 mb-1'>example@domain.com</p>
</div>
</div>

    </div>
    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
      <div className="contactRegister">
        <p className="crp">Contact Us</p>
      </div>

<div className="row g-3">
  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label ms-1"> Name <span>*</span></label>
  <input type="text" className="form-control" id="exampleFormControlInput1" />
</div>
  </div>
  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label ms-1">Email <span>*</span></label>
  <input type="text" className="form-control" id="exampleFormControlInput1"  />
</div>
  </div>
  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label ms-1">Phone <span>*</span></label>
  <input type="number" className="form-control" id="exampleFormControlInput1"  />
</div>
  </div>
  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label ms-1">Subject <span>*</span></label>
  <input type="text" className="form-control" id="exampleFormControlInput1"  />
</div>
  </div>
  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
 <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={8} defaultValue={""} />
</div>

  </div>
 <div className="col-4 col-sm-4 col-md-4 col-lg-4 mt-2">
 <button className='contactbtn'>SEND MESSAGE</button>
 </div>
</div>
    </div>
  </div>
 </div>
</section>
 </>
  )
}

export default Contact ;