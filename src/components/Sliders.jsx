import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { data } from '../utills/Slides'

function Sliders() {
    return (
        <section className="mt-5 px-10 overflow-x-hidden">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-yellow-500">Best Choice</h2>
                <h1 className="text-3xl font-bold text-blue-950">Popular Residencies</h1>
            </div>

            <div className="max-w-[1600px] mx-auto relative">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        480: { slidesPerView: 1 },
                        600: { slidesPerView: 2 },
                        750: { slidesPerView: 3 },
                        1100: { slidesPerView: 4 }
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    allowTouchMove={true}
                    grabCursor={true}
                >
                    <SliderButtons /> {/* Move this here */}
                    {data.map((items, index) => (
                        <SwiperSlide key={index}>
                            <SlideItem slides={items} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </section >
    )
}

const SlideItem = ({ slides }) => {
    return (
        <div className=" p-5 w-full hover:scale-105 cursor-pointer transition-all ease-in duration-300 hover:bg-slate-200 hover:shadow-lg rounded-xl ">
            <img src={slides.img} alt={slides.name} className="w-full h-auto rounded-lg mb-4" />
            <span className="secondaryText text-xl font-bold text-slate-500 block">
                <span className="text-yellow-400">$</span><span>{slides.price}</span>
            </span>
            <span className="text-2xl font-bold text-blue-950 block">{slides.name}</span>
            <span className="text-sm text-blue-900 block">{slides.details}</span>
        </div>
    )
}


const SliderButtons = () => {
    const swiper = useSwiper()
    return (
        <div className="absolute top-1/2 flex justify-between p-3 -translate-y-1/2 w-full z-10">
            <button onClick={() => swiper.slidePrev()} className="bg-white p-2 rounded-full shadow-lg hover:bg-yellow-300">
                <i className="fa-solid fa-chevron-left text-blue-900"></i>
            </button>
            <button onClick={() => swiper.slideNext()} className="bg-white p-2 rounded-full shadow-lg hover:bg-yellow-300">
                <i className="fa-solid fa-chevron-right text-blue-900"></i>
            </button>
        </div>
    )
}

export default Sliders
