import React from 'react'
import yoga4 from "../assets/yoga4.jpg"
const MarySheldon = () => {
  return (
   <>
   <section className="marysheldon pt-5 pb-5">
    <div className="container">
        <div className="row justify-content-sm-center p-5">
            <div className="col-12 col-sm-4  col-md-3 col-lg-2 ">
                <div className="sheldonImg">
                <img src={yoga4} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 ">
                <p className='sheldonp mt-3'>Mary Sheldon</p>
                <p className='sheldonp1'>Yoga Director</p>
                <div className="d-flex">
                    <div className="iconBox">
                <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="iconBox">
                <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="iconBox">
                    <i className="fa-brands fa-square-instagram"></i>
                    </div>
                    <div className="iconBox">
                <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">

                <p className='sheldonp2 mt-3 ms-3'>The origins of yoga have been speculated to date back to pre-Vedic Indian traditions, but most likely developed around the sixth and fifth centuries BCE, in ancient India’s ascetic and śramaṇa movements. The chronology of earliest texts describing yoga-practices is unclear, varyingly credited to Hindu Upanishads and Buddhist Pāli Canon, probably of third century BCE or later. The Yoga Sutras of Patanjali date from the first half of the 1st millennium CE, but only gained prominence in the 20th century. Hatha yoga texts emerged around the 11th century with origins in tantra.</p>
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default MarySheldon