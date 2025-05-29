import React from 'react'
import myImage from '../assets/logo2.png'
function Footer() {
  return (
    <div>
      <section className="wrapp">
        <div className="container flex justify-between items-start ">
          <div className="Left">
             <img src={myImage} alt="" width={150}/>

             <span className="text text-sm text-slate-600">
              Our vision is to make all people
               <br/>the best place to live for them.
             </span>
          </div>

          <div className="Right">
             <h1 className='text-4xl font-bold text-blue-950'>Information</h1>
             <span className='text text-sm text-slate-600'>145 New York, FL 5467, USA</span>

             <div className='flex justify-around items-center gap-8 font-semibold'>
              <p className=''>Property</p>
              <p>Services</p>
              <p>Products</p>
              <p>About Us</p>
             </div>
          </div>


        
        </div>
      </section>
    </div>
  )
}

export default Footer