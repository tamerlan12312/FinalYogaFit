import React from 'react'
import footerimg from "../assets/footer.png"
const Footer = () => {
  return (
   <section className="footer">
   
   <div className="d-flex justify-content-center">
    <p className='footerp'>HOME</p>
    <p className='footerp'>ABOUT</p>
    <p className='footerp'>FAQ</p>
    <p className='footerp'>TEAM</p>
    <p className='footerp'>NEWS</p>
   </div>
   <div className="d-flex justify-content-center mt-5">
    <div className="footerIcon">
    <i className="fa-brands fa-twitter" title='twitter'></i>
    </div>
    <div className="footerIcon">
    <i className="fa-brands fa-facebook-f" title='facebook'></i>
    </div>
    <div className="footerIcon">
    <i className="fa-brands fa-vimeo-v" title='vimeo'></i>
    </div>
    <div className="footerIcon">
    <i className="fa-brands fa-skype" title='skype'></i>
    </div>
   </div>
<div className="footeraBox mt-5">
<a href="#react" className='footera'>Privacy Policy</a> <span className='mx-1'>|</span>
   <span>This is a sample website - cmsmasters © 2023 / All Rights Reserved</span>
</div>
 
   </section>
  )
}

export default Footer