import React from 'react'
import myImage from '../assets/contact.jpg'
function Contact() {
    const data = [
        {
            "icon": "fa-solid fa-phone",
            "title": "Call",
            "num": "021 123 145 14",
            "bt": "Call Now"
        },
                {
            "icon": "fa-solid fa-comments",
            "title": "Chat",
            "num": "021 123 145 14",
            "bt": "Chat Now"
        },
                {
            "icon": "fa-solid fa-comments",
            "title": "Video",
            "num": "021 123 145 14",
            "bt": "Video Now"
        },
                {
            "icon": "fa-solid fa-message",
            "title": "Message",
            "num": "021 123 145 14",
            "bt": "Message Now"
        },
    ]
    return (
        <div>
            <section className="w-full">
                <div className="flex justify-between items-center w-full gap-10 p-8 flex-wrap max-w-full">
                    <div className="Left flex-1 flex flex-col gap-3 min-w-[300px]">

                        <span className='text-2xl font-bold text-yellow-500'>Our Contact Us</span>
                        <span className='text-3xl font-bold text-blue-950'>Easy to contact us</span>
                        <span className='text-sm text-slate-500'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>

                        <ContactItems value={data} />
                    </div>


                    <div className="Right flex-1 min-w-[300px] flex justify-end ">
                        <div className="imageContainer w-[30rem] h-[35rem]  rounded-tl-[15rem] rounded-tr-[15rem] rounded-bl-[0] rounded-br-[0] border-[5px] bg-slate-300 overflow-hidden m-9 ">
                            <img src={myImage} alt="" width={100} className='w-full h-full object-cover' />


                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}
const ContactItems = ({ value }) => {
    return (
        <div className='flex flex-wrap gap-4 w-full mt-4'>
            {
                value.map((items) => {
                    return (
                        <div className=' bg-white border-[3px] border-gray-100 rounded-lg w-[45%]  px-4 py-2 hover:shadow-md shadow-slate-300 hover:scale-105 hover:cursor-pointer flex flex-col justify-center items-center gap-4 transition-all duration-300 ease-in flex-wrap '>
                            <div className='flex justify-between items-center gap-8 '>
                                <div className='px-5 py-3 bg-slate-100 rounded-lg'>
                                    <i className={`${items.icon} text-blue-500`}></i>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xl font-bold text-blue-950'>{items.title} </span>
                                    <span className='text-sm text-slate-400'>{items.num} </span>
                                </div>
                            </div>

                            <button className='w-[80%] bg-slate-100 px-2 py-3 text-blue-500 font-bold text-lg'>
                                {items.bt}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Contact