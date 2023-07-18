import React from 'react'
import BreadCrumb from './BreadCrumb'
import timetable from '../data/timetable'
import { useParams } from 'react-router-dom'
const BlogDetails = () => {
    const {url} = useParams()
    const detailsItem = timetable.find(p=>p.id == url)
  return (
    <>
    <BreadCrumb title="Blog Details" crumb1="Home" crumb2="Blog Details" />
    <section className="blogdetails">
    <div className="container py-5">
    <div className="row justify-content-sm-center">
        <div className="col-12 col-sm-6 col-md-6 col-lg-7 ">
            <div className="classesImg">
                <img src={detailsItem.img} alt="" className='img-fluid' width="100%" />
                <p className="blogTitle mt-3">
                    {detailsItem.title}
                </p>
           <div className="d-flex">
            <p>April 15,2015</p>
            <span className='mx-1' style={{"fontSize":"12px","transform":"translateY(-1px)"}}>/</span>
            <p >by <span style={{"color":"#CE7C9F"}}>cmsmasters</span></p>
            <span className='mx-1' style={{"fontSize":"12px","transform":"translateY(-1px)"}}>/</span>
            <p> in <span style={{"color":"#CE7C9F"}}>Events,Position</span></p>
           </div>
           

                <p className="imgp">
                Nullam eget euismod nisi, in feugiat felis. Sed consequat aliquet augue, quis tincidunt sem porta quis. Suspendisse nulla nibh, viverra quis vulputate eu, ultricies suscipit nibh. Aenean ut pulvinar ex. Duis neque erat, dictum ut bibendum ut, scelerisque in quam. Donec tempor ex ut nisi rhoncus, nec efficitur enim commodo. Suspendisse a malesuada sapien. Praesent eget vulputate eros. Mauris arcu lacus, porta quis sagittis ac, tincidunt eu tortor. Morbi vitae nibh dapibus elit vestibulum interdum. Duis nec accumsan ex. In molestie ante ipsum. Ut eu mi a elit sagittis viverra. Cras ac auctor nunc, rhoncus vestibulum felis. Ut est lacus, bibendum ac pulvinar ut, sagittis at nisl. Aliquam leo libero, sollicitudin vel finibus quis, scelerisque rhoncus magna.
                <br /> <br />
Aliquam et ullamcorper velit. Mauris pretium id velit ut mattis. Donec ac ligula placerat, tempus turpis nec, varius nisl. Sed sit amet sem nec est molestie euismod vitae at lacus. Fusce pretium ex ligula, vel facilisis diam volutpat at. Aenean eget massa mattis, faucibus felis ac, malesuada metus. Duis sit amet elit ut augue consectetur faucibus. Vivamus condimentum bibendum tincidunt. Praesent ac nisi ut augue malesuada blandit in non velit.
<br /> <br />
Donec ac orci ac arcu rhoncus euismod in sed mi. Ut tincidunt purus et enim hendrerit, sit amet rhoncus nulla finibus. Fusce non enim vitae leo eleifend mattis nec non quam. Ut porttitor sem sit amet turpis rutrum pharetra. In ut sodales libero, sit amet tempor dui. Nunc quis lorem non nisi gravida porttitor. Donec posuere tempor sapien, sollicitudin dignissim mauris aliquet hendrerit. Maecenas in magna purus.
                </p>
                <div className="more">
                    <p className='my-3'>More Posts</p>
                </div>
            </div>
            <div className="row">
                {
                    timetable.slice(8,12).map(fd=>(
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6  g-4">
                           <div className="d-flex">
                           <img src={fd.img1} alt="" className='img-fluid' style={{"borderRadius":"50%"}} width="100px"/>
                           <span className=' mt-4 ms-3 morespan'>{fd.title}</span>
                           </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
          <div className="classesTxt">
            <p className='my-2'>Project details</p>
            <div className="d-flex justify-content-between">
                <div className="txt1"><p className='dflexp'>Date:</p></div>
                <div className="txt2"><span className='dflexSpan'>May 4,2015</span></div>
            </div>
            <div className="d-flex justify-content-between my-1">
                <div className="txt1"><p className='dflexp'>Categories:</p></div>
                <div className="txt2 text-end"><span className='dflexSpan1'>For you,Home, <br /> <span className=' dflexSpan1'>YogaFit</span></span></div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="txt1"><p className='dflexp'>Author:</p></div>
                <div className="txt2"><span className='dflexSpan'>backdoor</span></div>
            </div>
            <div className="d-flex mt-4">
                <div className="likeProject">
                    <p className='projectp'>Share This Post ?</p>
                </div>
            </div>
            <div className="d-flex justify-content-start">
                <div className="txtP">
                    <p className='txtp1'>Facebook</p>
                </div>
                <div className="txtP mx-3">
                    <p className='txtp1'>Twitter</p>
                </div>
                <div className="txtP">
                    <p className='txtp1'>Pinterest</p>
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

export default BlogDetails