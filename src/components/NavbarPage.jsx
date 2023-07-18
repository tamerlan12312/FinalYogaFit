import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import user2 from "../assets/user.png"
import online2 from "../assets/online2.png"
import { ProfilContext } from '../context/UserContext'
const NavbarPage = () => {
  const [user,setUser] = useContext(ProfilContext)

    const [mobile,setMobile] = useState(false)
    const [navbarBg,setNavbarBg] = useState(false)
    const hamburgerMenu = ()=>{
        setMobile(!mobile)
    }


  

   const scrollNavbarBg =()=>{
    if(window.scrollY >= 200){
        setNavbarBg(true)
      } else {
        setNavbarBg(false)
      }
   }

   window.addEventListener("scroll",scrollNavbarBg)
  return (
    <>
    <section className="navbarPage">
    <nav className={navbarBg ? "navbar navbar_active" : "navbar "}>
      <div className="logo"><Link to="/"><img src={logo} alt="" className="img-fluid" width="90%" /></Link></div>
      <div>
        <ul className={`nav_links ${ mobile ? "nav_links_active" : "nav_links"}`}>
            <li> <NavLink to="/">Home</NavLink> </li>
            <li> <NavLink to="/about">About</NavLink> </li>
            <li> <NavLink to="/faqs">Faqs</NavLink> </li>
            <li> <NavLink to="/team">Team</NavLink>  </li>
            <li> <NavLink to="/blog">Blog</NavLink> </li>
            <li> <NavLink to="/shop">Shop</NavLink> </li>
            <li> <NavLink to="/contact">Contacts</NavLink> </li>
        </ul>
      <div className="avatar me-5 mb-1" style={{"transform":"translateY(-1px)"}}>
     <button type="button" className="btn  position-relative" style={{"borderRadius":"50%"}}> 
   { user  ?  <img src={online2} alt="" width="30px" /> :  <img src={user2} alt="" width="30px" />}
  <span className={`position-absolute bottom-0 start-80  translate-middle  bg-${user ? "success" : "danger"} border border-light rounded-circle`} style={{"padding":"5px"}}>
    <span className="visually-hidden">New alerts</span>
  </span>
</button>

      </div>
        <i className={`${mobile ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"}`} onClick={hamburgerMenu}></i>
     
      </div>
    </nav>
    </section>
    </>
  )
}

export default NavbarPage