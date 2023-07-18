import React from 'react'
import { Link } from 'react-router-dom'
import NavbarPage from '../components/NavbarPage'

const BreadCrumb = ({title,crumb1,crumb2}) => {
  return (
   <>
      <section className="breadcrumb">
      <NavbarPage />
     <div className="container mb-2 mt-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
          <p className="breadcrumbp">{title}</p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
          <div className="here">
          <p className="breadcrumbp1 text-end mt-3">You are here: <Link to="/" style={{"textDecoration":"none"}}><span>{crumb1}</span></Link> / {crumb2}</p>  
          </div>
        </div>
      </div>
     </div>
    </section>
   </>
  )
}

export default BreadCrumb