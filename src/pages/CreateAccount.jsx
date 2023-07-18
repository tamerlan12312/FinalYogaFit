import { Formik } from 'formik'
import * as Yup from "yup"
import React from 'react'
import BreadCrumb from './BreadCrumb'
import Swal from 'sweetalert2'
import swal from "sweetalert"

const CreateAccount = () => {
;
  return (
    <>
    <BreadCrumb title="Create Account" crumb1="Home" crumb2="Create Account"/>
    <section className="createacc" >
    <p className='createaccp text-center py-5'>Create Account</p>
    <p className='createaccp2 text-center'>Please register below to create an account</p>
    <div className="container">
  <Formik
  initialValues={{
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    subject:"",
    message:"",
    
  }}
  validationSchema={
    Yup.object({
      firstName:Yup.string().required("The first name cannot be empty"),
      lastName:Yup.string().required("The last name cannot be empty"),
      email:Yup.string().email("Invalid email").required("The email cannot be empty"),
      phone:Yup.number().required("Enter the country code"),
      subject:Yup.string().required("Note the title"),
      message:Yup.string().required("Brief information about you"),
      
    })
  }
  onSubmit={(values,{resetForm,setSubmitting})=>{
    console.log(values);
    setTimeout(()=>{
      setSubmitting(false);
        resetForm()
    },3500)
    let timerInterval
Swal.fire({
  title: 'It is being registered',
  html: 'Please <b></b> wait.',
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
setTimeout(()=>{
  swal("It has been registered !", "Good Job !", "success");
},3500)


  }}
  >
    
     {(
      {
        values,
        errors,
        handleSubmit,
        handleReset,
        handleChange,
        dirty,
        touched,
        isSubmitting
      }) =>(
        <form onSubmit={handleSubmit}>
          
        <div className="row">
               <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              
               </div>
               <div className="col-12 col-sm-12 col-md-6 col-lg-6">
               <div className="row">
                       <div className="col-lg-6">
                       <div className="mb-3">
     <label htmlFor="firstName" className="form-label ms-1"> First Name <span>*</span></label>
     <input 
     type="text" 
     className="form-control" 
     id="firstName"
     value={values.firstName}
     onChange={handleChange}
     placeholder="First Name"
     />  
      {
          errors.firstName && touched.firstName && (
            <div className='errormsg'>{errors.firstName}</div>
          )
         }
         
    
   </div>
   
                       </div>
                       <div className="col-lg-6">
                       <div className="mb-3">
     <label htmlFor="lastName" className="form-label ms-1"> Last Name <span>*</span></label>
     <input 
     type="text" 
     className="form-control" 
     id="lastName"
     value={values.lastName}
     onChange={handleChange}
     placeholder="Last Name"
     />
       {
          errors.lastName && touched.lastName && (
            <div className='errormsg'>{errors.lastName}</div>
          )
         }
   </div>
                       </div>
                       <div className="col-lg-6">
                       <div className="mb-3">
     <label htmlFor="email" className="form-label ms-1"> Email <span>*</span></label>
     <input 
     type="email"
     className="form-control" 
     id="email" 
     value={values.email}
     onChange={handleChange}
     placeholder="admin@gmail.com"
      />
        {
          errors.email && touched.email && (
            <div className='errormsg'>{errors.email}</div>
          )
         }
   </div>
                       </div>
                       <div className="col-lg-6">
                       <div className="mb-3">
     <label htmlFor="phone" className="form-label ms-1"> Phone <span>*</span></label>
     <input 
     type="number" 
     className="form-control"
      id="phone"
      value={values.phone}
      onChange={handleChange}
      placeholder="+994 xxx-xx-xx"
      />
        {
          errors.phone && touched.phone && (
            <div className='errormsg'>{errors.phone}</div>
          )
         }
   </div>
                       </div>
                       <div className="col-lg-12">
                       <div className="mb-3">
     <label htmlFor="subject" className="form-label ms-1"> Subject <span>*</span></label>
     <input 
     type="text" 
     className="form-control" 
     id="subject"
     value={values.subject}
     onChange={handleChange}
     placeholder="Subject"
     />
       {
          errors.subject && touched.subject && (
            <div className='errormsg'>{errors.subject}</div>
          )
         }
   </div>
                       </div>
                       <div className="col-lg-12">
                       <div className="mb-3">
     <label htmlFor="message" className="form-label">Message</label>
     <textarea 
     className="form-control" 
     id="message" 
     rows={8} 
     defaultValue={""}
     value={values.message}
     onChange={handleChange}
     placeholder="Message"
     />
       {
          errors.message && touched.message && (
            <div className='errormsg'>{errors.message}</div>
          )
         }
   </div>
                       </div>
                       <div className="col-lg-3 mb-5">
                       <button 
                       className='sendbtn' 
                       type='submit'
                       disabled={!dirty || isSubmitting}
                       >Create An Account</button>
                       </div>
                       
                   </div>
                  
               </div>
           </div>
        </form>
     )}
    

  </Formik>
    </div>
    </section>
    </>
  )
}

export default CreateAccount