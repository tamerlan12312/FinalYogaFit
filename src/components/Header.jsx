import React from 'react'
import yoga from "../assets/yoga.jpg"
import yoga1 from "../assets/yoga1.jpg"
import yoga2 from "../assets/yoga2.jpg"
import NavbarPage from './NavbarPage';
const Header = () => {


  return (
   <>
   <header>
   <NavbarPage/>


    <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="imgBox">
      <img src={yoga} className="d-block w-100 yogaimg" alt="..." />
      <div className="imgText"><h6 className='animate__animated animate__fadeIn animate__delay-1s'>Flexibility</h6>
      <div className="d-flex justify-content-end "><p className='animate__animated animate__fadeInUp animate__delay-2s secondp'>is a second power</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="bookNow1 text-center animate__animated animate__flipInX animate__delay-2s">
          <a href="#react">BOOK <br /> NOW</a>
        </div>
        <div className="bookNowTxt ms-3"><p className="bookNowp animate__animated animate__fadeIn animate__delay-3s">Do yoga today <br />For a better tomorrow</p></div>
      </div>
      </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="imgBox2">
      <img src={yoga1} className="d-block w-100 yogaimg" alt="..." />
      <div className="imgText"><h6 className='animate__animated animate__fadeIn animate__delay-1s'>Inspiration</h6>
      <div className="d-flex justify-content-end "><p className='animate__animated animate__fadeInUp animate__delay-2s secondp'>for joyful living</p>
      </div>
      <div className="d-flex justify-content-center flex-row-reverse">
        <div className="bookNow1 text-center animate__animated animate__flipInX animate__delay-2s">
          <a href="#react">BOOK <br /> NOW</a>
        </div>
        <div className="bookNowTxt me-3"><p className="bookNowp animate__animated animate__fadeIn animate__delay-3s">The theme is so flexible <br />it does yoga with you</p></div>
      </div>
      </div>
      </div>
    
    </div>
    <div className="carousel-item">
    <div className="imgBox3">
      <img src={yoga2} className="d-block w-100 yogaimg" alt="..." />
      <div className="imgText"><h6 className='animate__animated animate__fadeIn animate__delay-1s'>Serenity</h6>
      <div className="d-flex justify-content-end "><p className='animate__animated animate__fadeInUp animate__delay-2s secondp'>is inside you</p>
      </div>
      <div className="bookBox">
        <div className="bookNowTxt me-3"><p className="bookNowp animate__animated animate__fadeIn animate__delay-3s text-center">The theme is so flexible <br />it does yoga with you</p></div>
        <div className="bookNow1 text-center animate__animated animate__flipInX animate__delay-2s">
          <a href="#react">BOOK NOW</a>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

   </header>
 
   </>
  )
}

export default Header