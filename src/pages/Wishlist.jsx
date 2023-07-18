import React from 'react'
import { useWishlist } from 'react-use-wishlist'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useCart } from 'react-use-cart';
import {  toast } from 'react-toastify';
const Wishlist = () => {
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
    const notify2 = () =>toast.error('Product Removed', {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  const {
    isWishlistEmpty,
    totalWishlistItems,
    items,
    removeWishlistItem,
  } = useWishlist()
const { addItem } = useCart()
  return (
  <>
  <section className="wishlist2">
  <div className="container">
        <div className="row">
            {
                items.map(fd=>(
            <div className="col-12">
            <div className="row">
                <div className="col-4"><img src={fd.img} alt="" className='img-fluid' width="100%"  /></div>
                <div className="col-4"><p className='cartP'>{fd.title}</p>
                <p className='cartP cartP2'>${fd.price}</p>
                <p className='cartP cartP3'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                </p>
                
                </div>
                <div className="col-4  text-end">
                <button onClick={()=>{notify(addItem(fd))}} style={{"fontSize":"20px","color":"green"}}><i className="fa-regular fa-circle-check" style={{"fontSize":"17px","transform":"translateY(2px)"}}></i></button>
                <button onClick={()=>{notify2(removeWishlistItem(fd.id))}} style={{"fontSize":"20px","color":"#D481A6"}}><AiOutlineCloseCircle/></button>

                </div>
            </div>
            <hr />
          
            </div>
        ))
      }
      {isWishlistEmpty ? <p className='empty text-center'>Upss.. :( <br /> Your cart is empty. </p> :  
      <>
      <div className="col-6 ">
      <p className='cartTotalp'>Total Product: {totalWishlistItems}</p>
      </div>
      <div className="col-6 ">
      </div>
      </>
      }
        </div>
    </div>
  </section>
  </>
  )
}

export default Wishlist