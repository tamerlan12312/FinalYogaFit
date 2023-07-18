import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from "./BreadCrumb"
import timetable from '../data/timetable'
import { BsCartCheck } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import comment from "../assets/comment.jpeg"
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWishlist } from 'react-use-wishlist';
const ShopDetails = () => {
    const {url} = useParams()
    const shopItem = timetable.find(p=>p.id == url)
    const { addItem } = useCart()
    const {addWishlistItem} = useWishlist()
    const notify = () =>toast.success('Added To Cart!', {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    const notify2 = () =>toast.success('Added To Wishlist!', {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  return (
   <>
   <Breadcrumb title="Shop Details" crumb1="Shop" crumb2="Shop Details"/>
   <section className="shopdetails">
     <div className="container py-5">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-5 ">
                <div className="detailsBox">
                  <img src={shopItem.img} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-7">
                <div className="detailsTxt mt-5">
                    <p className='detailsp'> {shopItem.title}</p>
                    <p className='detailsIcon'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                </p>
                    <p className='detailsDes'>
                    Maecenas iaculis mauris lacus, nec bibendum tellus maximus non. Proin eget dictum eros, sed viverra diam. Praesent eu rhoncus eros. In hac habitasse platea dictumst. Curabitur sagittis tristique odio eget pharetra. Aenean cursus congue est non dignissim. Ut mattis augue eu purus tristique, vitae fermentum libero sagittis. Etiam euismod magna neque, suscipit lobortis augue porta non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque id ullamcorper ex. Etiam vestibulum felis at leo sodales aliquam. Donec risus nisi, ornare ut nisi non, vulputate dapibus turpis. Vestibulum non rhoncus lacus.
                    </p>
                    <p className='detailsDes1 ms-2'>Category :</p>
                    <p className='detailsDes1 ms-2'>Price : £ {shopItem.price}</p>
                    <button className='sendbtn' onClick={()=>{notify(addItem(shopItem))}}> <BsCartCheck className='mb-1 me-1' style={{"fontSize":"13px"}}/> ADD TO CART</button>
                    <button className='sendbtn1 ms-4' onClick={()=>notify2(addWishlistItem(shopItem))}> <BsHeart className='me-1' style={{"fontSize":"13px"}}/> ADD TO WISHLIST</button>
                </div>
            </div>
            <p className='reviews'>Reviews (1)</p>
            <div className="d-flex justify-content-between">
                <p className='reviewsp'>1 review for {shopItem.title}</p>
                <p className='detailsIcon'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                </p>
            </div>
            <div className="line"></div>
            <div className="d-flex justify-content-between py-4">
               <div className="d-flex">
               <div className="commentImg">
                    <img src={comment} alt="" className='img-fluid'/>
                </div>
                <p className='ms-4 commentp'>cmsmasters 
                <br />
                <span>September 18, 2015:</span> 
                <br /> 
                <span>Awesome !</span>
                </p>
               </div>
                <p className='detailsIcon1'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                </p>
            </div>
            <div className="line"></div>
         <div className="commentBox">
         <p className='commentp1 mt-5'>
            Add a review
            </p>
            <p className='commentp1'>Your email address will not be published. Required fields are marked *</p>
            <p className='commentp1'>Your Rating *</p>
            <p className='detailsIcon1'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                </p>
            <p className='commentp1'>Your Review *</p>
            <div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={8} defaultValue={""} />
</div>
         </div>
         <div className="col-12 col-sm-6 col-md-6 col-lg-6 ">
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label ms-1">Name <span>*</span></label>
  <input type="text" className="form-control" id="exampleFormControlInput1" />
</div>
</div>
<div className="col-12 col-sm-6 col-md-6 col-lg-6 ">
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label ms-1">Email <span>*</span></label>
  <input type="text" className="form-control" id="exampleFormControlInput1" />
</div>
</div>
<div className="col-12 col-sm-5 col-md-5 col-lg-5 ">
<div className="mb-3">
<button className='sendbtn'>SUBMIT</button>
</div>
</div>
<p className='reviews mt-4 mb-5'>Related products</p>
{
    timetable.slice(30.33).map((fd,i)=>(
       <div className="col-6 col-sm-6 col-md-3 col-lg-3">
         <div className="shopBox pb-4">
        <div className="shopImg">
        <img src={fd.img} alt="" className='img-fluid'/>
        
        <div className="cart">
            <div className="d-flex">
            <div className="iconBox iconBox1" title="wishlist" onClick={()=>{notify2(addWishlistItem(fd))}}>
            <i className="fa-regular fa-heart" ></i>
            </div>

            <div className="iconBox iconBox2" title="add to cart">
            <i className="fa-solid fa-cart-arrow-down" onClick={()=>{notify(addItem(fd))}}></i>
            </div>

            <div className="iconBox iconBox3" title="view">
        <Link to={`/shopdetails/${fd.id}`} style={{"textDecoration":"none"}}><i className="fa-regular fa-eye"></i></Link>
            </div>
            </div>
        </div>
        </div>
       
       <div className="d-flex justify-content-around">
       <p className='shoptxt text-center my-3'>
            {fd.title} <br />
            <p className='text-start'>
            <span className='me-2'>£</span>{fd.price}
            </p>
        </p>
        <p className='shoptxt1 text-center'>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
        </p>
       </div>
     
    </div>
       </div> 
    ))
}
        </div>
     </div>
   </section>
   </>
  )
}

export default ShopDetails