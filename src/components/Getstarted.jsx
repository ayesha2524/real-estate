import React from 'react'

function Getstarted() {
  return (
    <div>
        <section className="wrapper w-full">
            <div className="container relative w-full gap-10 p-8 max-w-full">
                <div className="innerContainer flex flex-col gap-5 bg-blue-700 p-8 rounded-xl border-[5px] border-blue-300 text-center">
                    <span className='text-white text-3xl font-bold'>Get started with Homyz</span>
                    <span className=' text-base text-white  text-center w-[30%] self-center '>Subscribe and find super attractive price quotes from us. Find your residence soon</span>

                    <button className='bg-transparent text-white border-[2px] border-white w-48 h-12 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition duration-300 self-center'>Get Started</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Getstarted