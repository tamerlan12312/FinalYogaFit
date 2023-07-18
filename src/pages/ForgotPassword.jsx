import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BreadCrumb from './BreadCrumb'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert"
const ForgotPassword = () => {
     const [icon,setIcon] = useState('fa-regular fa-eye')
     const [passType,setPassType] = useState("password")
     const [icon2,setIcon2] = useState('fa-regular fa-eye')
     const [passType2,setPassType2] = useState("password")



    const [newPass,setNewPass] = useState("")
    const [confirmPass,setConfirmPass] = useState("")
    const [validPass,setValidPass] = useState(false)
    const randomString = Math.random().toString(36).slice(8)
    const [captcha,setCaptcha] = useState(randomString)
    const [txt,setTxt] = useState('')
    const [valid,setValid] = useState(false)
    const   refleshString =()=>{
      setCaptcha(Math.random().toString(36).slice(8))
    }

    useEffect(()=>{
        setInterval(()=>{
            setCaptcha(Math.random().toString(36).slice(8))
        },5000)
    },[])
const formSubmit =(e)=>{
    e.preventDefault() ;
    if( !txt || !newPass || !confirmPass){
        const checkout2 =()=>toast.warning('Please fill out the form', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            checkout2()
     } else {
        if( txt === captcha && newPass == confirmPass){
            setValid(false)
            setValidPass(false)
            swal("Good Job", "Your new password has been saved" ,"success")
         } else if(newPass !== confirmPass){
           setValidPass(true)
           const checkout3 =()=>toast.warning('The passwords are not the same', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            checkout3()
           
         }
         else {
              const checkout =()=>toast.info('Please check that the form is correct', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                checkout()
              setValid(true)
              setValidPass(false)
         }
     }
}

const changeIcon =()=>{
   if(icon == "fa-regular fa-eye" && passType == "password" ){
      setIcon("fa-regular fa-eye-slash")
      setPassType("text")
   } else {
    setIcon("fa-regular fa-eye")
    setPassType("password")
   }
}
const changeIcon2 =()=>{
   if(icon2 == "fa-regular fa-eye" && passType2 == "password" ){
      setIcon2("fa-regular fa-eye-slash")
      setPassType2("text")
   } else {
    setIcon2("fa-regular fa-eye")
    setPassType2("password")
   }
}

    return (
        <>
        <BreadCrumb title="Forgot your password" crumb1="Home" crumb2="Forgot Your Password"/>
   <section className="forgotpassword">
     <h6 className='forgoth6 pt-5'>
        Forgot Your Password ? :(
     </h6>
     <div className="container">
     <form className='pb-5' onSubmit={formSubmit}>
        <div className="row justify-content-sm-center">
      
            <div className="col-12 col-sm-5 col-md-5 col-lg-5">
            <label htmlFor="firstName" className="form-label ms-1 mt-3"> New Password<span>*</span></label>
         <div className="input-group mb-3">
  <input 
  type={passType} 
  className={`form-control ${validPass ? "valid" : "form-control"}`} 
  placeholder="***" 
  aria-label="***" 
  aria-describedby="button-addon2"
  value={newPass}
  onChange={(e)=>setNewPass(e.target.value)}

  />
  <button className="btn btn3" type="button" id="button-addon2"><i className={icon}  onClick={changeIcon}></i></button>
</div>
      <p className={`${validPass ? "updatep2" : "updatep3"} mt-1 ms-1`}>Check the New Password</p>

 
            
      <label htmlFor="firstName" className="form-label ms-1 mt-3">Confirm Password<span>*</span></label>
         <div className="input-group mb-3">
  <input 
  type={passType2} 
  className={`form-control ${validPass ? "valid" : "form-control"}`} 
  placeholder="***" 
  aria-label="***" 
  aria-describedby="button-addon2"
  value={confirmPass}
  onChange={(e)=>setConfirmPass(e.target.value)}
  />
  <button className="btn btn3" type="button" id="button-addon2"><i className={icon2} onClick={changeIcon2}></i></button>
</div>
      <p className={`${validPass ? "updatep2" : "updatep3"} mt-1 ms-1`}>Check the New Password</p>
     <hr />
    <div className="d-flex">
    <div className="captcha">
        <p className='mt-3'>{captcha}</p>
     </div>
     <div className="iconTxt">
     <i className="fa-solid fa-rotate ms-3" onClick={refleshString}></i>
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
     <p className='ms-3 updatep'>Automatically Updated</p>
     </div>
    </div>
    <label htmlFor="firstName" className="form-label ms-1 mt-3">Enter Captcha<span>*</span></label>
     <input 
     type="text" 
     className={`form-control ${valid ? "valid" : "form-control"}`} 
     id="firstName"
     placeholder="Enter Captcha"
     value={txt}
     onChange={(e)=>setTxt(e.target.value)}
     />  
     <p className={`${valid ? "updatep2" : "updatep3"} mt-1 ms-1`}>Check the captcha</p>
     
     <div className="d-flex justify-content-center mt-4">
        <button type='submit' className='submitPass'>Submit</button>
     </div>
            </div>
       
         
        </div>
        </form>
     </div>
    </section>
   </>
  )
}

export default ForgotPassword