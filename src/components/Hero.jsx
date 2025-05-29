import heroImage from '../assets/hero-image.png'
import { hero } from './css/hero'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Hero() {
    const [count, setCount] = useState(8800);
    const [count1, setCount1] = useState(1950);
    const [count2, setCount2] = useState(16);

    useEffect(() => {
        const animateCount = (start, end, setter) => {
            const duration = 4000;
            const incrementTime = 30;
            const steps = Math.floor(duration / incrementTime);
            const increment = (end - start) / steps;

            const counter = setInterval(() => {
                setter(prev => {
                    const next = prev + increment;
                    if (next >= end) {
                        clearInterval(counter);
                        return end;
                    }
                    return next;
                });
            }, incrementTime);
        };

        animateCount(8800, 9000, setCount);
        animateCount(1950, 2000, setCount1);
        animateCount(16, 26, setCount2);
    }, []);

    return (
        <div>
            <section className={hero.heroWrapp}>
                <div className={hero.heroContainer}>
                    {/* left side */}
                    <div className={hero.heroLeft}>
                        <div className={hero.orangeCircle}></div>

                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="title font-bold text-7xl z-10"
                        >
                            <h1>
                                Discover <br /> Most Suitable <br /> Property
                            </h1>
                        </motion.div>

                        <motion.div
                            className={hero.heroDesc}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <span>Find a variety of properties that suit you very easily</span>
                            <span>Forget all difficulties in finding a residence for you</span>
                        </motion.div>

                        <motion.div
                            className={hero.search}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            <i className="fa-solid fa-location-dot text-blue-600"></i>
                            <input type="text" className='border-none outline-none text-black' />
                            <button className={hero.button}>Search</button>
                        </motion.div>

                        <motion.div
                            className={hero.heroNum}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            <div className={hero.Nums}>
                                <span className='text-4xl'>
                                    {Math.floor(count)} <span className='text-yellow-300'>+</span>
                                </span>
                                <span className='font-normal text-sm text-slate-400'>Premium Product</span>
                            </div>
                            <div className="Nums flex flex-col justify-center items-start">
                                <span className='text-4xl'>
                                    {Math.floor(count1)} <span className='text-yellow-300'>+</span>
                                </span>
                                <span className='font-normal text-sm text-slate-400'>Happy Customer</span>
                            </div>
                            <div className="Nums flex flex-col justify-center items-start">
                                <span className='text-4xl'>
                                    {Math.floor(count2)} <span className='text-yellow-300'>+</span>
                                </span>
                                <span className='font-normal text-sm text-slate-400'>Awards Winning</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side */}
                    <motion.div
                        className="heroRight"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className={hero.imagrContainer}>
                            <img src={heroImage} alt="Property" />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Hero;
