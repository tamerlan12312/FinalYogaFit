import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
import Footer from '../components/Footer'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import ScrollTop from '../components/ScrollTop'
import Team from '../pages/Team'
import Faqs from '../pages/Faqs'
import Blog from '../pages/Blog'
import HashLoader from "react-spinners/HashLoader";
import { useState } from 'react'
import { useEffect } from 'react'
import Shop from '../pages/Shop'
import ShopDetails from '../pages/ShopDetails'
import CartWishlistUser from '../components/CartWishlistUser'
import CreateAccount from '../pages/CreateAccount'
import Login from '../pages/Login'
import BuyNow from '../pages/BuyNow'
import ForgotPassword from '../pages/ForgotPassword'
import OurClassesDetails from '../pages/OurClassesDetails'
import OurTeamDetails from '../pages/OurTeamDetails'
import BlogDetails from '../pages/BlogDetails'
const AppRouter = () => {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setInterval(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <>
    {
      loading ?
       
    <div className="loader">
        <HashLoader
      color="#c76791"
      loading={loading}
    />
    </div>
      :
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
          <Route path="/faqs" element={<Faqs/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/shopdetails/:url" element={<ShopDetails/>}></Route>
          <Route path="/create" element={<CreateAccount/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/buynow" element={<BuyNow/>}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
          <Route path="/ourclassesdetails/:url" element={<OurClassesDetails/>}></Route>
          <Route path="/ourteamdetails/:url" element={<OurTeamDetails/>}></Route>
          <Route path="/teamdetails/:url" element={<OurTeamDetails/>}></Route>
          <Route path="/blogdetails/:url" element={<BlogDetails/>}></Route>
      </Routes>
      <Footer/>
      <ScrollToTop smooth top={200}  component={<i className="fa-solid fa-angle-up"></i>} className="scrolltop"/>
      <ScrollTop/>
      <CartWishlistUser/>
      </BrowserRouter>
    }
   
    </>
  )
}

export default AppRouter