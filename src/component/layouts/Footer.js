import React from 'react'
function Footer() {
    return (
      <>
        <footer className='mt-4'>
      <div className="container-fluid f-1">
        <div className="row">
          <div className="col-md-5 text-center">
            
            <img  src="https://www.firstfiddle.in/assets/images/ff-logo-02.png" alt="" className="img mt-7"/>
          </div>
          <div className="col-md-7">
            <h1 className="display-6 mt-5 h-cl4"><b className='f-2'>CONTACT</b> US</h1>
            <p className="p f-3" >We're a team focusing on redefining the way the hospitality industry works by bringing in concept based restaurants across India. We are truly committed to catering to the ever-changing cosmopolitan taste of the customer and revolutioning the F & B industry!</p>
            <div className="container-fluid">
              <div className="row">
              <div className="col-md-6">
                <p  className='f-4'>Address</p>
                <p className='f-6'>6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021</p>
              </div>
              <div class="col-md-6">
                <p  className='f-5'>Franchise Enquiry</p>
                <p className='f-6'>Mobile: <b className='f-7'>+91 9313663486</b></p>
                <p className='f-6'>Email: <b className='f-7'>franchise@firstfiddle.in</b></p>
              </div>
              </div>
            </div>  
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6">
                  <p  className='f-5'>HR Enquiry</p>
                  <p className='f-6'>Mobile: <b className='f-7'>+91 9999304427</b></p>
                <p className='f-6'>Email: <b className='f-7'>hr@firstfiddle.in</b></p>
                </div>
                <div class="col-md-6">
                  <p className='f-5'>Other Enquiry</p>
                  <p className='f-6'>Email: <b className='f-7'>customercare@firstfiddle.in</b></p>
                </div>
              </div> 
            </div> 
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <i class="fa-brands fa-linkedin i"></i>
                  <i class="fa-brands fa-square-facebook i"></i>
                  <i class="fa-brands fa-twitter i"></i>
                  <i class="fa-brands fa-instagram i"></i>
                </div>
              </div>
            </div>       
          </div>
        </div> 
      </div> 
    
    </footer>
    <div class="container-fluid f-8" >
     <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <p  class="text-white p f-9">EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS | BLOG
          COPYRIGHT © 2021 FIRST FIDDLE F&B PRIVATE LIMITED</p>
      </div>
      <div class="col-md-3"></div>
     </div>
    </div>
      </>
    )
}
export default Footer