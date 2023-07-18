import React from 'react'
import timetable from '../data/timetable'
const TimeTable = () => {
  return (
  <>
  <section className="timetable pb-5">
 <p className='text-center pt-5 classesp'>Classes Timetable</p>
 <div className="filterBox mb-3">
{/* <div className="d-flex justify-content-center" style={{"cursor":"pointer"}}>
    <h6>All events</h6>
    <h6 className='mx-3'>Hatha Yoga</h6>
    <h6 className='mx-3'>Yoga Dance</h6>
    <h6 className='mx-3'>Ashtanga Yoga</h6>
    <h6 className='mx-3'>Kundalini Yoga</h6>
    <h6 className='mx-3'>Morning Flow</h6>
</div> */}
   </div>
<div className="d-flex justify-content-center mt-5">
    
<table>
 
      <tr>
        <th></th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        <th>Sunday</th>
      </tr>
              
              
                <tr>
                    <td className='time'>09.00</td>
                    <th className='txt'><p className='mt-2'>Morning <br /> Flow</p>
                    <p className='tablep text-center'>Advanced <br /> Sequence</p>
                    <p className='tablep2 text-center'>09.00 - 10.00</p>
                    <p className='tablep3 text-center'>Lily Carter</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Morning <br /> Flow</p>
                    <p className='tablep text-center'>Morning <br /> relaxation and <br /> stretching</p>
                    </div>
                    </th>
                    <th className='txt3'><p className='pb-1'>Kundalini <br /> Yoga</p>
                    <p className='tablep text-center'>Basic Kundalini</p>
                    <p className='tablep2 text-center'>11.00 - 12.00</p>
                    <p className='tablep3 text-center'>Grace Dean</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Kundalini <br /> Yoga</p>
                    <p className='tablep text-center '>Kundalini <br /> Workflow for <br /> weight loss</p>
                    </div>
                    </th>
                    <th className='txt'><p className='mt-2'>Morning <br /> Flow</p>
                    <p className='tablep text-center'>Advanced <br /> Sequence</p>
                    <p className='tablep2 text-center'>09.00 - 10.00</p>
                    <p className='tablep3 text-center'>Lily Carter</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Morning <br /> Flow</p>
                    <p className='tablep text-center'>Morning <br /> relaxation and <br /> stretching</p>
                    </div>
                    </th>
                    <th className='txt3'><p className='pb-1'>Kundalini <br /> Yoga</p>
                    <p className='tablep text-center'>Basic Kundalini</p>
                    <p className='tablep2 text-center'>11.00 - 12.00</p>
                    <p className='tablep3 text-center'>Grace Dean</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Kundalini <br /> Yoga</p>
                    <p className='tablep text-center '>Kundalini <br /> Workflow for <br /> weight loss</p>
                    </div>
                    </th>
                    <th className='txt'><p className='mt-2'>Morning <br /> Flow</p>
                    <p className='tablep text-center'>Advanced <br /> Sequence</p>
                    <p className='tablep2 text-center'>09.00 - 10.00</p>
                    <p className='tablep3 text-center'>Lily Carter</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Morning <br /> Flow</p>
                    <p className='tablep text-center'>Morning <br /> relaxation and <br /> stretching</p>
                    </div>
                    </th>
                    <th className='txt3'><p className='pb-1'>Kundalini <br /> Yoga</p>
                    <p className='tablep text-center'>Basic Kundalini</p>
                    <p className='tablep2 text-center'>11.00 - 12.00</p>
                    <p className='tablep3 text-center'>Grace Dean</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Kundalini <br /> Yoga</p>
                    <p className='tablep text-center '>Kundalini <br /> Workflow for <br /> weight loss</p>
                    </div>
                    </th>
                    <th className='txt'><p className='mt-2'>Morning <br /> Flow</p>
                    <p className='tablep text-center'>Advanced <br /> Sequence</p>
                    <p className='tablep2 text-center'>09.00 - 10.00</p>
                    <p className='tablep3 text-center'>Lily Carter</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Morning <br /> Flow</p>
                    <p className='tablep text-center'>Morning <br /> relaxation and <br /> stretching</p>
                    </div>
                    </th>
                </tr>
              
              
                <tr>
                    <td className='time2'>10.00</td> 
                    <th className='txt2'><p className='mt-2'>Ashtanga <br /> Yoga</p>
                    <p className='tablep text-center'>Weight <br /> Loss</p>
                    <p className='tablep2 text-center'>10.00 - 11.00</p>
                    <p className='tablep3 text-center'>Sophia Keat</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Ashtanga <br /> Yoga</p>
                    <p className='tablep text-center pt-2'>Cardio <br /> Workflow for <br /> weight loss</p>
                    </div>
                    </th>
                    <th style={{"backroundColor":"#fff"}}></th>
                    <th className='txt2'><p className='mt-2'>Ashtanga <br /> Yoga</p>
                    <p className='tablep text-center'>Weight <br /> Loss</p>
                    <p className='tablep2 text-center'>10.00 - 11.00</p>
                    <p className='tablep3 text-center'>Sophia Keat</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Ashtanga <br /> Yoga</p>
                    <p className='tablep text-center pt-2'>Cardio <br /> Workflow for <br /> weight loss</p>
                    </div>
                    </th>
                    <th style={{"backroundColor":"#fff"}}></th>
                    <th className='txt2'><p className='mt-2'>Ashtanga <br /> Yoga</p>
                    <p className='tablep text-center'>Weight <br /> Loss</p>
                    <p className='tablep2 text-center'>10.00 - 11.00</p>
                    <p className='tablep3 text-center'>Sophia Keat</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Ashtanga <br /> Yoga</p>
                    <p className='tablep text-center pt-2'>Cardio <br /> Workflow for <br /> weight loss</p>
                    </div>
                    </th>
                    <th style={{"backroundColor":"#fff"}}></th>
                    <th className='txt2'><p className='mt-2'>Ashtanga <br /> Yoga</p>
                    <p className='tablep text-center'>Weight <br /> Loss</p>
                    <p className='tablep2 text-center'>10.00 - 11.00</p>
                    <p className='tablep3 text-center'>Sophia Keat</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Ashtanga <br /> Yoga</p>
                    <p className='tablep text-center pt-2'>Cardio <br /> Workflow for <br /> weight loss</p>
                    </div>
                    </th>
                </tr>
              
                <tr>
                    <td className='time'>11.00</td> 
                    <th className='txt3'><p className='mt-2'>Kundalini <br /> Yoga</p>
                    <p className='tablep text-center'>Basic Kundalini</p>
                    <p className='tablep2 text-center'>11.00 - 12.00</p>
                    <p className='tablep3 text-center'>Grace Dean</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Kundalini <br /> Yoga</p>
                    <p className='tablep text-center '>Kundalini <br /> Workflow for <br /> weight loss</p>
                    </div>
                    </th>
                    <th className='txt5'><p className='mt-2'>Yoga  Dance</p>
                    <p className='tablep text-center'>Cardio Fit</p>
                    <p className='tablep2 text-center'>11.00 - 12.00</p>
                    <p className='tablep3 text-center'>Daniels Brooks</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Yoga <br /> Dance</p>
                    <p className='tablep text-center'>Yoga Sequence <br /> with dancing <br /> moves</p>
                    </div>
                    </th>
                 <br />
                    <th className='txt5'><p className='mt-2'>Yoga  Dance</p>
                    <p className='tablep text-center'>Cardio Fit</p>
                    <p className='tablep2 text-center'>11.00 - 12.00</p>
                    <p className='tablep3 text-center'>Daniels Brooks</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Yoga <br /> Dance</p>
                    <p className='tablep text-center'>Yoga Sequence <br /> with dancing <br /> moves</p>
                    </div>
                    </th>
                    <br />
                    <th className='txt5'><p className='mt-2'>Yoga  Dance</p>
                    <p className='tablep text-center'>Cardio Fit</p>
                    <p className='tablep2 text-center'>11.00 - 12.00</p>
                    <p className='tablep3 text-center'>Daniels Brooks</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Yoga <br /> Dance</p>
                    <p className='tablep text-center'>Yoga Sequence <br /> with dancing <br /> moves</p>
                    </div>
                    </th>
                    <th className='txt3'><p className='mt-2'>Kundalini <br /> Yoga</p>
                    <p className='tablep text-center'>Basic Kundalini</p>
                    <p className='tablep2 text-center'>11.00 - 12.00</p>
                    <p className='tablep3 text-center'>Grace Dean</p>
                    <div className="overlayTxt">
                    <p className='mt-3'>Kundalini <br /> Yoga</p>
                    <p className='tablep text-center '>Kundalini <br /> Workflow for <br /> weight loss</p>
                    </div>
                    </th>
                </tr>
              
                <tr>
                    <td className='time2'>12.00</td> 
                    <th className='txt4'><p className='mt-2'>Hatha <br /> Yoga</p>
                    <p className='tablep text-center'>Weekend Class</p>
                    <p className='tablep2 text-center'>12.00 - 13.00</p>
                    <p className='tablep3 text-center'>Mary Sheldon</p>
                    <div className="overlayTxt">
                    <p className='mt-4'>Hatha <br /> Yoga</p>
                    <p className='tablep text-center '>Hatha  Yoga  <br /> advanced <br /> workflow loss</p>
                    </div>
                    </th>
                    <th style={{"backroundColor":"#fff"}}></th>
                    <th className='txt4'><p className='mt-2'>Hatha <br /> Yoga</p>
                    <p className='tablep text-center'>Weekend Class</p>
                    <p className='tablep2 text-center'>12.00 - 13.00</p>
                    <p className='tablep3 text-center'>Mary Sheldon</p>
                    <div className="overlayTxt">
                    <p className='mt-4'>Hatha <br /> Yoga</p>
                    <p className='tablep text-center '>Hatha  Yoga  <br /> advanced <br /> workflow loss</p>
                    </div>
                    </th>
                    <th style={{"backroundColor":"#fff"}}></th>
                    <th className='txt4'><p className='mt-2'>Hatha <br /> Yoga</p>
                    <p className='tablep text-center'>Weekend Class</p>
                    <p className='tablep2 text-center'>12.00 - 13.00</p>
                    <p className='tablep3 text-center'>Mary Sheldon</p>
                    <div className="overlayTxt">
                    <p className='mt-4'>Hatha <br /> Yoga</p>
                    <p className='tablep text-center '>Hatha  Yoga  <br /> advanced <br /> workflow loss</p>
                    </div>
                    </th>
                    <th style={{"backroundColor":"#fff"}}></th>
                     <th className='txt4'><p className='mt-2'>Hatha <br /> Yoga</p>
                    <p className='tablep text-center'>Weekend Class</p>
                    <p className='tablep2 text-center'>12.00 - 13.00</p>
                    <p className='tablep3 text-center'>Mary Sheldon</p>
                    <div className="overlayTxt">
                    <p className='mt-4'>Hatha <br /> Yoga</p>
                    <p className='tablep text-center '>Hatha  Yoga  <br /> advanced <br /> workflow loss</p>
                    </div>
                    </th>
                </tr>
            </table> 
</div>











<div className="container">
  <div className="row justify-content-sm-center">
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
      <p className='day'>Monday</p>
     <div className="d-flex justify-content-between timeBox">
      <p className='center ms-2'>Morning Flow</p>
      <p className='me-2'>09.00 - 10.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Ashtanga Yoga</p>
      <p className='me-2'>10.00 - 11.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Kundalini Yoga</p>
      <p className='me-2'>11.00 - 12.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Hatha Yoga</p>
      <p className='me-2'>12.00 - 13.00</p>
     </div>
    </div>


    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
      <p className='day my-3'>Tuesday</p>
     <div className="d-flex justify-content-between timeBox">
      <p className='center ms-2'>Kundalini Yoga</p>
      <p className='me-2'>09.00 - 10.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Yoga Dance</p>
      <p className='me-2'>11.00 - 12.00</p>
     </div>
    </div>


    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
      <p className='day my-3'>Wednesday</p>
     <div className="d-flex justify-content-between timeBox">
      <p className='center ms-2'>Morning Flow</p>
      <p className='me-2'>09.00 - 10.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Ashtanga Yoga</p>
      <p className='me-2'>10.00 - 11.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Hatha Yoga</p>
      <p className='me-2'>12.00 - 13.00</p>
     </div>
    </div>

    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
      <p className='day my-3'>Thursday</p>
     <div className="d-flex justify-content-between timeBox">
      <p className='center ms-2'>Kundalini Yoga</p>
      <p className='me-2'>09.00 - 10.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Yoga Dance</p>
      <p className='me-2'>11.00 - 12.00</p>
     </div>
    </div>

    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
      <p className='day my-3'>Friday</p>
     <div className="d-flex justify-content-between timeBox">
      <p className='center ms-2'>Morgning Flow</p>
      <p className='me-2'>09.00 - 10.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Ashtanga Yoga</p>
      <p className='me-2'>10.00 - 11.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Hatha Yoga</p>
      <p className='me-2'>12.00 - 13.00</p>
     </div>
    </div>

    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
      <p className='day my-3'>Saturday</p>
     <div className="d-flex justify-content-between timeBox">
      <p className='center ms-2'>Kundalina Yoga</p>
      <p className='me-2'>09.00 - 10.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Yoga Dance</p>
      <p className='me-2'>11.00 - 12.00</p>
     </div>
    </div>

    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
      <p className='day my-3'>Sunday</p>
     <div className="d-flex justify-content-between timeBox">
      <p className='center ms-2'>Morning Flow</p>
      <p className='me-2'>09.00 - 10.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Ashtanga Yoga</p>
      <p className='me-2'>10.00 - 11.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Kundalini Yoga</p>
      <p className='me-2'>11.00 - 12.00</p>
     </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-10">
     <div className="d-flex justify-content-between timeBox mt-3">
      <p className='center ms-2'>Hatha Yoga</p>
      <p className='me-2'>12.00 - 13.00</p>
     </div>
    </div>


    

  </div>
 
</div>

  </section>
  </>
  )
}

export default TimeTable