import React from 'react'

function Contact() {
  return (
  <>
  <div className="container-fluid banner1-4">
        <div className="container">
           <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <h1
                className="text-white text-center text-2 display-1"
               
              >
              CONTACT US
              </h1> 
            </div>
            <div className="col-md-3"></div>
           </div> 
        </div>
              </div> 
              <div className="container-fluid mt-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h3 className='c-cl7'>SEND US MESSAGE</h3>
                   <form>
                    <div className="mb-3">
                      <label for="formGroupExampleInput"  className=" whi form-label"></label>
                      <input type="text" className="form-control h-cl4 " id="formGroupExampleInput" placeholder="Name" />
                      <label for="formGroupExampleInput"  className=" whi form-label"></label>
                      <input type="email" className="form-control h-cl4" id="formGroupExampleInput" placeholder="Email" />
                      <label for="formGroupExampleInput"  className=" whi form-label"></label>
                      <input type="number" className="form-control  h-cl4" id="formGroupExampleInput" placeholder="Phone" />
                      <label for="formGroupExampleInput"  className=" whi form-label"></label>
                      <textarea className="form-control c-cl10 " placeholder="Message" id="floatingTextarea2" ></textarea>
                      <label for="floatingTextarea2"></label>
                     <button className="btn c-bgg">submit</button>
                      <input type="submit" className="btn mt-3 c-cl9" value="submit"  />
                    </div>
                    
                   </form>
                  </div>
                 
                  <div className="col-md-6">
                    <h3 className='c-cl7'>CONTACT INFO</h3>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p  className='c-cl1'>Address</p>
                          <p className='c-cl8'>6, Chanakyapuri Shopping Complex, 48, Malcha Marg,<br/>New Delhi 110021</p>
                        </div> 
                        <div className="col-md-12 ">
                        <p  className='c-cl1'>For Franchise Enquiry</p>
                        
                        <h1 className='c-cl6'>Mobile: <span className='c-cl3'> +91 9313663486</span></h1>
                        
                       <h1 className='c-cl2'>Email: <span className='c-cl3'> franchise@firstfiddle.in</span> </h1>
                      </div>
                      <div className="col-md-12 mt-2">
                        <p className='c-cl1'>For HR Enquiry</p>
                        <h1 className='c-cl4'>Mobile: <span className='c-cl3'>  +91 9999304427</span></h1>
                        <h1 className='c-cl2'>Email: <span className='c-cl3'> hr@firstfiddle.in</span> </h1>
                      </div>
                      <div className="col-md-12 mt-3">
                        <p  className='c-cl1'>For Other Enquiry</p>
                        <h1 className='c-cl4'> Phone: <span className='c-cl3'>  7676380000</span></h1>
                        <h1 style={{fontSize : '20px'}}>Email: <span className='c-cl3'>  customercare@firstfiddle.in</span> </h1>
                        <h1 className='c-cl5'>Open: Monday – Saturday 10:30 – 19:30</h1>
                      </div>
                      </div>
                    </div> 
                  </div>
                </div>
              </div> 
              </div>
  </>
  )
}

export default Contact
