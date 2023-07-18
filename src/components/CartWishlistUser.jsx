import React from 'react'
import { BsCartCheck } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useCart } from 'react-use-cart';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import Wishlist from '../pages/Wishlist';
import { useWishlist } from 'react-use-wishlist'
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { ProfilContext } from '../context/UserContext';
import { useRef } from 'react';
import swal from "sweetalert"


const CartWishlistUser = () => {
  //Context
  const [user,setUser] = useContext(ProfilContext)


  // OffCanvas open
  const [open2,setOpen2] = useState(false)
  const [open3,setOpen3] = useState(false)


  // Icon & Type
  const [icon,setIcon] = useState('fa-regular fa-eye')
  const [type,setType] = useState('password')


  // Email & Pass onChange
  const emailRef = useRef()
  const passRef = useRef()


  // Local Storage
  const getEmail = localStorage.getItem('email')
  const getPassword = localStorage.getItem('password')


  // Wishlist
  const {
    totalWishlistItems
  } = useWishlist()
    const {
        totalItems,
        cartTotal ,
        updateItemQuantity,
        totalUniqueItems,
        items,
        removeItem,
        isEmpty,
        emptyCart
    } = useCart()

  
  
    // Notify
    const notify = () =>toast.error('Product Removed', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

       
        // Icon Change
        const changeIcon=()=>{
          if( icon == 'fa-regular fa-eye' && type =="password"){
             setIcon("fa-regular fa-eye-slash")
             setType('text')
          } else {
            setIcon('fa-regular fa-eye')
            setType('password')
          }
        }

         
const formSubmit =(e)=>{
  e.preventDefault()
 if(!emailRef.current.value  || !passRef.current.value){
  alert("Please Fill Input")
 } else {
    if(emailRef.current.value == "admin@gmail.com" && passRef.current.value == "admin"){
       setOpen2(!open2)
       localStorage.setItem('email',"admin@gmail.com")
       localStorage.setItem('password',"admin")
       setUser(true)
   } else {
    alert("Email or Password is wrong")
   }
 }
}
const navigate = useNavigate()

 const buynowFunc =()=>{
  setOpen3(!open3)
  { 
    user ? navigate("/buynow") : swal("Please Sign in", "" ,"info")
  }
 }

  return (
    <>
    <section className='cartwishlistuser'>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    <div className="d-flex flex2">
  <div className="cart"> 
<div>
  <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">  <BsCartCheck className='mb-1 icon' style={{"fontSize":"17px"}}/><span style={{"fontSize":"small"}} className="ms-1">({totalUniqueItems})</span></button>
  <div className={`offcanvas offcanvas-end hidden ${open3 ? "hidden" : ""}`} tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart Details</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
    <div className="container">
        <div className="row">
            {
                items.map(fd=>(
            <div className="col-12">
            <div className="row">
                <div className="col-4"><img src={fd.img} alt="" className='img-fluid' width="100%"  /></div>
                <div className="col-4"><p className='cartP'>{fd.title}</p>
                <p className='cartP cartP2'>${(fd.price * fd.quantity).toFixed(2)}</p>
                <p className='cartP cartP3'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                </p>
                
                </div>
                <div className="col-4  text-end">
                <button onClick={()=>notify(removeItem(fd.id))} style={{"fontSize":"20px","color":"#D481A6"}}><AiOutlineCloseCircle/></button>
                 <div className="quantity">
                    <button className='btn1' onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}>+</button>
                    <span className='mx-3'>{fd.quantity}</span>
                    <button  className='btn2' onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>-</button>
                 </div>
                </div>
            </div>
            <hr />
          
            </div>
        ))
      }
      {isEmpty ? <p className='empty text-center'>Upss.. :( <br /> Your cart is empty. </p> :  
      <>
      <div className="col-6 ">
      <p className='cartTotalp'>Total Price: ${(cartTotal).toFixed(2)}</p>
      </div>
      <div className="col-6 ">
      <p className='cartTotalp'>Total Product: {totalItems}</p>
      </div>
      <div className="col-6">
      <button className="buynow" onClick={buynowFunc}>
        <p className='mt-1'>Buy Now</p>
      </button>
      </div>
      <div className="col-6 ">
    <button className='delete' onClick={()=>emptyCart()}>
    <p className='mt-1'>Delete</p>
    </button>
      </div>
      </>
      }
        </div>
    </div>
    </div>
  </div>
</div>

</div>
  <div className="wishlist">
  <div>
  <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight">  <BsHeart className='me-1 icon' style={{"fontSize":"17px"}}/><span style={{"fontSize":"small"}}>({totalWishlistItems})</span></button>
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight2" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasRightLabel">Wishlist</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body" >
      <Wishlist/>
    </div>
  </div>
</div>
    </div>
  <div className="user">
  <div>
  <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight3" aria-controls="offcanvasRight">  <AiOutlineUser className='me-1 icon' style={{"fontSize":"17px"}}/></button>
  <div className={`offcanvas offcanvas-end hidden ${open2 ? "hidden" : ""}`} tabIndex={-1} id="offcanvasRight3" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header">
      
      <h5 className="offcanvas-title ms-3" id="offcanvasRightLabel">Login</h5>
     
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <form onSubmit={formSubmit}>
 <div className="container">
 <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label ms-1"> Email Address <span>*</span></label>
  <input 
  type="email" 
  className="form-control" 
  id="exampleFormControlInput1" 
  placeholder='Email Address'
  ref={emailRef}

  />

</div>

<label htmlFor="exampleFormControlInput1" className="form-label ms-1">Password<span>*</span></label>
<div className="input-group mb-3">
  <input 
  type={`${type}`}
  className="form-control" 
  placeholder="Password" 
  aria-label="Recipient's username" 
  aria-describedby="button-addon2"
  ref={passRef}
  />
  <button 
  className="btn btn-outline-secondary btn2" 
  type="button" 
  id="button-addon2"
  onClick={changeIcon}
  ><i className={`${icon}`}></i></button>
</div>

<div className="login">
  



{
  getEmail && getPassword ?
  <button  type="button"  className="btnLogin" onClick={()=>{
    localStorage.clear() ;
    window.location.reload()
  }}>Log out</button>
  :
  <button  type="submit"  className="btnLogin">Login</button>
}


 
</div>
 <div className="logina1 text-center my-3">
<Link to="/forgotpassword" onClick={()=>setOpen2(!open2)}>
<a href='#react' className="logina  ">
    Forgot your password ?
  </a>
</Link>
 </div>
 <div className="login login1" >
 <Link to="/create" onClick={()=>setOpen2(!open2)}>
 <a href="#react">Create Account</a>
 </Link>
</div>
 </div>
 


      </form>
    </div>
  </div>
</div>
    </div>
</div>
    </section>
    
    </>
  )
}

export default CartWishlistUser