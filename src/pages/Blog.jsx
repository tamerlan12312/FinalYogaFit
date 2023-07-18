import React from 'react'
import BreadCrumb from './BreadCrumb'
import timetable from '../data/timetable'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Blog = () => {
  const [search,setSearch] = useState("")
  const filtered = timetable.slice(8,14).filter((fd)=>{
    if(search == ""){
      return fd;
    } else if(fd.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
       return fd ;
    }
  })
  
  return (
      <>
      <BreadCrumb title="Blog" crumb1="Home" crumb2="Blog"/>
    <section className="blog">
        <div className="container py-5">
          <div className="row g-3">      
            <div className="col-12 col-sm-12 col-md-12 col-lg-3">
            <form >
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

            {
            filtered.map(fd=>(
                <>
                  <div className="row justify-content-sm-end">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
                     <div className="blogBox">
                       <img src={fd.img} alt="" className='img-fluid'/>
                       <p className='blogp my-2'>{fd.title}</p>
                       <div className="row">
                         <div className="col-9 ">
                           <p className="blogp2 ms-1">
                           {fd.desc}
                           </p>
                           <Link to={`/blogdetails/${fd.id}`}>
                           <button className='sendbtn'>{fd.read}</button>
                           </Link>
                         </div>
                         <div className="col-3">
                           <p className="blogp2 ms-1">
                         by <span></span>
                           </p>
                           <p className="blogp2 ms-1" style={{"transform":"translateY(-10px)"}}>
                         in <span>Events</span>,<span>Position</span>
                           </p>
                           <div className="iconBox ms-1">
                           <i className="fa-regular fa-comment"></i>
                           <p className='ms-1' > 4</p>
                           <i className="fa-regular fa-heart ms-3"></i>
                           <p className='ms-1' >18</p>
                           </div>
                         </div>
                       </div>
                     </div>
                     <hr />
                   </div>
                   <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                   
                   <div className="d-flex justify-content-center">
                   <div className="date">
                   <p className='text-center mt-4'>{fd.date} <p>{fd.date1}</p></p>
                    </div>
                   </div>
                  </div>
                  </div>
               
               </>
              ))
            }             
          </div>
        </div>
         {
          !filtered.length ?

          <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <p className='text-center resultp' >No Result Found</p>
            </div>
          </div>
        </div>
        :
        ""
         }
    </section>
  </>
  )
}

export default Blog