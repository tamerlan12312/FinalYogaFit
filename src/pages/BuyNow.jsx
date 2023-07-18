import React, { Component } from 'react'
import BreadCrumb from './BreadCrumb'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import swal from "sweetalert"
 class BuyNow extends Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '45',
  };
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }
  formSubmit =(e)=>{
    e.preventDefault() ;
    if(this.state.cvc != "" && this.state.expiry != "" && this.state.name != "" && this.state.number != "" ){
      swal("The product has been ordered", "Good Job !" ,"success");
    } else {
      swal("Please fill out the cart and place your first order", "" ,"warning")
      
    }
    
  }

  render() {
    return (
     <>
      <BreadCrumb title="Buy Now" crumb1="Shop" crumb2="Buy Now"/>
      <section className="buynow">
<div className="checkout2">
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-8 col-md-12 col-lg-8">
                <div className="checkoutBox">
                    <h5 className='mt-5 ms-2 checkout text-center'>Checkout</h5>
                    <form  >
                    <div className="mb-3">
  <input type="text" className="form-control my-4" id="exampleFormControlInput1" placeholder="First Name *"  />
  <input type="text" className="form-control  mb-4" id="exampleFormControlInput1" placeholder="Last Name *" />
 
<div>
  <input className="form-control mb-4" list="datalistOptions" id="exampleDataList" placeholder="Country/Region *"/>
  <datalist id="datalistOptions">
    <option value="San Francisco">
    </option><option value="New York">
    </option><option value="Seattle">
    </option><option value="Los Angeles">
    </option><option value="Chicago">
    </option></datalist>
</div>
<input type="text" className="form-control  mb-4" id="exampleFormControlInput1" placeholder="Street address"  />
<input type="text" className="form-control  mb-4" id="exampleFormControlInput1" placeholder="Apartment,suite,unit,etc.(optional)" />
<input type="text" className="form-control  mb-4" id="exampleFormControlInput1" placeholder="Town/City"  />
<input type="text" className="form-control  mb-4" id="exampleFormControlInput1" placeholder="Postcode/ZIP"  />
<input type="number" className="form-control  mb-4" id="exampleFormControlInput1" placeholder="Phone"   />
<input type="email" className="form-control  mb-4" id="exampleFormControlInput1" placeholder="Email address"  />
<div className="d-flex">
<input type="checkbox" name="" id="" className='checkbox1'/>
 <span className='ms-3 checkSpan'>Create an account ?</span>
</div>
<br />
<div className="d-flex">
<input type="checkbox" name="" id="" className='checkbox1'/>
 <span className='ms-3 checkSpan'>Ship to a different address ?</span>
</div>
<input type="text" className="form-control  my-4" id="exampleFormControlInput1" placeholder="Notes about your order,e.g. special notes for delivery *" />
</div>

                    </form>
                </div>
            </div>



            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-5">
              <div className="creditCard mt-5">
 <div id="PaymentForm">
       <div className="card">
       <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
          className="cards"
        />
       </div>
        <form onSubmit={this.formSubmit}>
          <div className="row">
            <div className="col-12">
              <label className='mb-1 ms-3'>Card Number</label>
              
             <input
            type="tel"
            name="number"
            maxLength="16"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className="numberInput mx-3 mb-3"
          />
            </div>
            <div className="col-12">
            <label className='mb-1 ms-3'>Your Name</label>
            <input
            type="text"
            name="name"
            maxLength="21"
            placeholder="Your Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className="numberInput mx-3 mb-3"
          />
          
            </div>

            <div className="col-12">
            <label className='my-1 ms-3'>CVC</label>
            <input
            type="tel"
            name="cvc"
            maxLength="3"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className="numberInput mx-3 mb-3"
          />
            </div>
            <label className='mb-1 ms-3'>Month/Year</label>
            <div className="col-12">
            <input
            type="tel"
            name="expiry"
            placeholder="Month/Year"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            maxLength="4"
            className="numberInput mx-3"
          />
            </div>
          </div>
      
       
          <div className="placeOrder text-center mt-3" >
      <button type='submit' className='btn' >PLACE ORDER</button>
      </div>
      
        </form>

      </div>
 
              </div>
           
                </div>
               
        </div>
    </div>
</div>
      </section>












     </>
    )
  }
}

export default BuyNow