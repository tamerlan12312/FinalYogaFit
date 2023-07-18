import React from 'react'
import BreadCrumb from './BreadCrumb'
import team3 from "../assets/team3.jpg"
import team5 from "../assets/team5.jpg"
import team6 from "../assets/team6.jpg"
const Faqs = () => {
  return (
    <>
    <BreadCrumb title="Faqs" crumb1="Home" crumb2="Faqs"/>
    <section className="faqs">
        <div className="container pb-5">
            <div className="row justify-content-sm-around">
                <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                    <p className="faqsp pt-5">Got Questions? We Have Answers</p>
                    <p className="faqsp1">For more information about YogaFit, please visit our <span>About Us</span> page</p>
               <div className="accordionBox">
               <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What Do I Wear To Class?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p className="accordionp">
      Sed tempor ipsum facilisis, placerat dui a, ultrices ligula. Quisque facilisis nisl placerat diam varius, sit amet pretium mauris blandit. Praesent luctus lobortis finibus. Pellentesque malesuada sem sed condimentum aliquet. Aliquam vel odio id massa gravida laoreet convallis eu eros. 
      </p>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/Eml2xnoLpYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What Do I Bring To Class?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p className="accordionp">
        Morbi vel leo interdum enim varius faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet leo sed commodo convallis. Praesent rutrum, est eu tempor scelerisque, lorem eros condimentum lectus, vel malesuada tortor enim nec ipsum. Sed suscipit maximus massa, at pulvinar erat vehicula sed. Curabitur at metus ornare, sollicitudin ante porta, imperdiet quam. Donec id ullamcorper justo. Vivamus id consectetur nibh. Nunc ut augue nec eros malesuada congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus nec dui quis massa maximus lobortis a facilisis purus. Praesent in maximus odio.
      </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Do I Need Any Prior Yoga Experience?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p className="accordionp">
      Fusce consequat maximus nunc ut condimentum. Nam ac volutpat lorem, ac commodo arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec imperdiet quam ac ex sodales tristique. Aenean eu eros consequat, aliquet mauris quis, gravida massa. Fusce eu ante neque. Vestibulum elit augue, suscipit ac lacus faucibus, laoreet efficitur nibh.
      </p>
      <ul>
        <li>Quisque pretium est a pretium placerat.</li>
        <li>Aenean et libero non purus finibus fringilla ac quis nunc.</li>
        <li>Cras non est vitae nunc ultricies dapibus rutrum vitae magna.</li>
        <li>Vivamus interdum nisl ac elementum accumsan.</li>
        <li>Aenean commodo massa eu auctor blandit.</li>
      </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree">
      What If I Get Tired?
      </button>
    </h2>
    <div id="collapseThree2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p className="accordionp">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a ex ut enim pellentesque como modo. Nullam in ante lobortis, posuere velit eu, tincidunt sem. Aenean vel ligula dapibus. Donec volutpat elit id porttitor dapibus. Suspendisse vehicula pharetra dui, eu faucibus ante mattis vel. Sed tristique sem at est ultricies luctus. Vestibulum sit amet dui risus. Ut iaculis lacus sed leo rutrum auctor.
      </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3  " aria-expanded="false" aria-controls="collapseThree">
      Where Do I Put My Keys And Cell Phone?
      </button>
    </h2>
    <div id="collapseThree3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p className="accordionp">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a ex ut enim pellentesque como modo. Nullam in ante lobortis, posuere velit eu, tincidunt sem. Aenean vel ligula dapibus. Donec volutpat elit id porttitor dapibus. Suspendisse vehicula pharetra dui, eu faucibus ante mattis vel. Sed tristique sem at est ultricies luctus. Vestibulum sit amet dui risus. Ut iaculis lacus sed leo rutrum auctor.
      </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree4" aria-expanded="false" aria-controls="collapseThree">
      I Have A Medical Condition Or Injure. Can I Still Participate In Class?
      </button>
    </h2>
    <div id="collapseThree4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p className="accordionp">
      Morbi vel leo interdum enim varius faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet leo sed commodo convallis. Praesent rutrum, est eu tempor scelerisque, lorem eros condimentum lectus, vel malesuada tortor enim nec ipsum. Sed suscipit maximus massa, at pulvinar erat vehicula sed. Curabitur at metus ornare, sollicitudin ante porta, imperdiet quam. Donec id ullamcorper justo. Vivamus id consectetur nibh. Nunc ut augue nec eros malesuada congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus nec dui quis massa maximus lobortis a facilisis purus. Praesent in maximus odio.
      </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false" aria-controls="collapseThree">
      Is There A Set Class Schedule?
      </button>
    </h2>
    <div id="collapseThree5" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p className="accordionp">
      Morbi vel leo interdum enim varius faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet leo sed commodo convallis. Praesent rutrum, est eu tempor scelerisque, lorem eros condimentum lectus, vel malesuada tortor enim nec ipsum. Sed suscipit maximus massa, at pulvinar erat vehicula sed. Curabitur at metus ornare, sollicitudin ante porta, imperdiet quam. Donec id ullamcorper justo. Vivamus id consectetur nibh. Nunc ut augue nec eros malesuada congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus nec dui quis massa maximus lobortis a facilisis purus. Praesent in maximus odio.
      </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree6" aria-expanded="false" aria-controls="collapseThree">
      What If I Have To Leave Early?
      </button>
    </h2>
    <div id="collapseThree6" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p className="accordionp">
      Morbi vel leo interdum enim varius faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet leo sed commodo convallis. Praesent rutrum, est eu tempor scelerisque, lorem eros condimentum lectus, vel malesuada tortor enim nec ipsum. Sed suscipit maximus massa, at pulvinar erat vehicula sed. Curabitur at metus ornare, sollicitudin ante porta, imperdiet quam. Donec id ullamcorper justo. Vivamus id consectetur nibh. Nunc ut augue nec eros malesuada congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus nec dui quis massa maximus lobortis a facilisis purus. Praesent in maximus odio.
      </p>
      </div>
    </div>
  </div>
</div>
               </div>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 ">
                    <p className="faqsp2 pt-5">Want to Know More?</p>
                    <p className="faqsp1">Feel free to contact us any time</p>
                    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label ms-1">Name <span>*</span></label>
  <input type="text" className="form-control" id="exampleFormControlInput1" />
</div>
                    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label ms-1">Email<span>*</span></label>
  <input type="email" className="form-control" id="exampleFormControlInput1" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Question<span>*</span> </label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={8} defaultValue={""} />
</div>
 
                    <button className='sendbtn'>ASK</button>
                   
                </div>
            </div>
        </div>
    </section>

   <section className="comments">
    <p className="text-center commentsp pt-5 pb-4">Comments on Yoga Fit</p>
    <div className="container pb-5">
      <div className="row justify-content-sm-center g-4">
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
          <div className="commentBox">
            <div className="imgBox ">
            <img src={team5} alt="" className="img-fluid" />
            </div>
           
            <p className="commentp my-2">
            Linda Dowson
            </p>
            <p className="commentp2 me-2">
            Pilates Trainer
            </p>
            <p className="commentp3 me-2">
            I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
            </p>
          </div>
        </div>
     

        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
          <div className="commentBox">
            <div className="imgBox">
            <img src={team6} alt="" className="img-fluid" />
            </div>
            <p className="commentp my-2">
            Isabella Clifford
            </p>
            <p className="commentp2 me-2">
            Yoga Instructor
            </p>
            <p className="commentp3 me-2">
            I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
            </p>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
          <div className="commentBox">
            <div className="imgBox">
            <img src={team3} alt="" className="img-fluid" />
            </div>
            <p className="commentp my-2">
            Jack Porter
            </p>
            <p className="commentp2 me-2">
            Happy Client
            </p>
            <p className="commentp3 me-2">
            I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
            </p>
          </div>
        </div>
      </div>
    </div>
   </section>
    </>
  )
}

export default Faqs