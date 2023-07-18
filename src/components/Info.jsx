import React from 'react'

const Info = () => {
  return (
   <>
    <section className="info">
        <div className="container py-5">
            <div className="row g-3 ms-2">
                <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                    <div className="infoBox">
                        <p className="infop">Contact Info</p>
                        <p className='infop1'>
                        Monday 11am-7pm <br />
                        Tuesday-Friday 11am-8pm <br />
                        Saturday 10am-6pm <br />
                        </p>
                        <div className="map map2">
                            <a href="#react">OPEN MAP</a>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 ">
                    <div className="infoBox">
                        <p className="infop">Open Hours</p>
                        <p className='infop1'>
                        Monday 11am-7pm <br />
                        Tuesday-Friday 11am-8pm <br />
                        Saturday 10am-6pm <br />
                        </p>
                        <div className="map">
                            <a href="#react">BOOK NOW</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 ">
                    <div className="infoBox">
                        <p className="infop">Latest Posts</p>
                        <ul>
                            <li>Yoga’s Power to Cure Depression</li>
                            <li>Tips For Getting Started</li>
                            <li>Yoga Mistakes To Avoid</li>
                            <li>6 Yoga Poses For Lower Back Pain</li>
                            <li>The Best Yoga Poses To Relieve Soreness</li>
                        </ul>
                        <div className="map mt-4">
                            <a href="#react">VIEW MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Info