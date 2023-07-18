import React from 'react'
import BreadCrumb from './BreadCrumb'
import timetable from '../data/timetable'
import { useState } from 'react'
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWishlist } from 'react-use-wishlist';
import { useEffect } from 'react';
const Shop = () => {
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



    //Click Color 
    const [bg,setBg] = useState(0)

    //  add to cart 
 const {addItem} = useCart()
 const { addWishlistItem } = useWishlist();
    // More Products
   const [visible,setVisible] = useState(22)
    // Grid
    const [grid,setGrid] = useState("col-lg-3")
    // Data
    const [data,setData] = useState(timetable)
    // Sort
    const [sortState, setSortState] = useState("");
    // Search
    const [search,setSearch] = useState('')
    // Filter
    const filtered = data.slice(14,visible).filter((fd)=>{
      if(search == ""){
        return fd ;
      } else if (fd.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            return fd ;

      }
    })
    // More Products
    const visibleFunc =()=>{
        setVisible(fd=>fd += 4)
    }
 

const sortingProducts =(e)=>{
  setSortState(e.target.value)
  switch (sortState) {
    case "low":
      setData([...data].sort((a,b)=>a.price - b.price))
      console.log("low");
    case "high":
      setData([...data].sort((a,b)=>b.price - a.price))
      console.log("high");
      break;
      case "default" :
        setData(data)
   
  }
}
useEffect(()=>{
  setBg(2)
},[])
  return (
    
<>
<BreadCrumb title="Shop" crumb1="Home" crumb2="Shop"/>
<section className="shop">
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

    <p className="text-center pt-5 pb-3 shopp">
    You are What You Eat
    </p>
    <p className="text-center shopp1">
    Yoga Fit is where you can find balance, harmony and energy renewal amidst the hectic bustle of everyday pressures <br /> and deadlines. Relax & enjoy a personalized day spa experience in our comfortable sanctuary.
    </p>
    <div className="container pb-5">
       <div className="row justify-content-sm-center g-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
             <div className="d-flex justify-content-start mt-5">
           <form>
           <div className="input-group mb-3">
  <input 
  type="text" 
  className="form-control" 
  placeholder="Type Keywords..." 
  aria-label="Type Keywords..." 
  aria-describedby="basic-addon2"
  onChange={(e)=>setSearch(e.target.value)}
  />
  <span className="input-group-text me-4" id="basic-addon2" ><i className="fa-solid fa-magnifying-glass"></i></span>
</div>
           </form>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
         <div className="d-flex justify-content-end mt-5 selectflex">
          
         <select onChange={e=>sortingProducts(e)}>
            <option  value="default">Default Sorting</option>
            <option  value="high" >Sort by price:low to high</option>
            <option  value="low">Sort by price:high to low</option>

          </select>
         </div>
         <div className="d-flex justify-content-end mt-3">
         <button className={`gridbtn ${bg == 1 ? "active" : ""}`} onClick={()=>{
          setGrid("col-lg-4")
          setBg(1)
         }}><TfiLayoutGrid3Alt style={{"color":"#fff","marginTop":"-3px","fontSize":"16px"}}/></button>
        <button className={`gridbtn ms-2 ${ bg == 2 ? "active" : ""}`} onClick={()=>{
          setGrid("col-lg-3")
          setBg(2)
        }}><TfiLayoutGrid4Alt style={{"color":"#fff","marginTop":"-3px","fontSize":"18px"}}/></button>
         </div>
        </div>
       <div className="row">
         {
            filtered.map((fd,i)=>(
               <div className={`col-6 col-sm-6 col-md-4 ${grid}`}>
            <div className="shopBox pb-4">
                <div className="shopImg">
                <img src={fd.img} alt="" className='img-fluid'/>
                
                <div className="cart">
                    <div className="d-flex">
                    <div className="iconBox iconBox1" title="wishlist" >
                    <i className="fa-regular fa-heart" onClick={()=>{notify2(addWishlistItem(fd))}} ></i>
                    </div>

                    <div className="iconBox iconBox2" title="add to cart">
                    <i className="fa-solid fa-cart-arrow-down" onClick={()=>notify(addItem(fd))}></i>
                    
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
      {
        !filtered.length ?
        <p className="text-start resultp">No Result Found</p>
        :
        ""
      }
       </div>
        <div className="d-flex justify-content-center">
            <button className='sendbtn' onClick={visibleFunc}>MORE PRODUCTS</button>
        </div>
       </div>
    </div>
   </section>
</>
  )
}

export default Shop