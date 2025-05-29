import React from 'react'
import myImage from '../assets/value.png'
import { useState } from 'react'
function Value() {

    const data = [
        {
            "title": "Best interest rates on the market",
            "text": "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim"
        },
        {
            title: "Prevent unstable prices",
            text: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
        },
        {
            title: "Best price on the market",
            text: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
        }
    ]
    return (
        <div>
            <section className="w-full ">
                <div className="flex justify-between items-center w-full gap-10 p-8 flex-wrap max-w-full">

                    <div className="Left flex-1">
                        <div className="imageContainer w-[30rem] h-[35rem]  rounded-tl-[15rem] rounded-tr-[15rem] rounded-bl-[0] rounded-br-[0] border-[5px] bg-slate-300 overflow-hidden m-9 ">
                            <img src={myImage} alt="" width={100} className='w-full h-full object-cover' />
                        </div>


                    </div>
                    <div className="right flex-1 flex flex-col gap-3">
                        <span className='text-2xl font-bold text-yellow-500'>Our Value</span>
                        <span className='text-3xl font-bold text-blue-950'>Value We Give to You</span>
                        <span className='text-sm text-slate-500'>We always ready to help by providijng the best services for you.
                            <br />We beleive a good blace to live can make your life better</span>


                        <ValueItems value={data} />
                    </div>
                </div>
            </section>
        </div>
    )
}

const ValueItems = ({ value }) => {
    return (
        <div className='flex flex-col gap-4'>
            {value.map((item, index) => (
                <SingleItem key={index} title={item.title} text={item.text} />
            ))}
        </div>
    );
};


const SingleItem = ({ title, text }) => {
    const [show, setShow] = React.useState(false);

    return (
        <div className='w-full bg-slate-100 rounded-lg px-6 py-4 shadow-md shadow-slate-300 hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-in '>
            <div className='flex justify-between items-center gap-5 p-4'>
                <h3 className='text-lg font-semibold text-blue-900'>{title}</h3>
                <button onClick={() => setShow(!show)} className='px-2 py-1 bg-slate-300'>
                    <i className={`fa-solid ${show ? 'fa-angle-up' : 'fa-angle-down'} text-blue-900`}></i>
                </button>
            </div>

            {show && (
                <p className={`text-sm text-gray-600 mt-2 transition-all duration-300 ease-in-out overflow-hidden`}>{text}</p>
            )}
        </div>
    );
};



export default Value