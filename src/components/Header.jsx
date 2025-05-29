import React, { useState } from 'react'
import myImage from '../assets/logo.png'
import { header } from './css/header'
import { BiMenuAltRight } from 'react-icons/bi'

function Header() {
    const [show, setShow] = useState(false)

    return (
        <div>
            <section className={header.hWrapp}>
                <div className={header.hContainer}>
                    {/* Logo */}
                    <img src={myImage} alt='' width={100} />

                    {/* Menu: hidden below md */}
                    <div className={`${header.hMenu} hidden md:flex`}>
                        <a href="">Residencies</a>
                        <a href="">Our Value</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className={header.hButton}>
                            <a href="">Contact</a>
                        </button>
                    </div>

                    {/* Menu icon: only visible on screens < 768px */}
                    <div className="block md:hidden cursor-pointer" onClick={() => setShow(!show)}>
                        <BiMenuAltRight size={30} />
                    </div>
                </div>

                
                {show && (
                    <div className="flex flex-col md:hidden bg-blue-100 px-4 py-3 gap-2 text-black">
                        <a href="components/Sliders.jsx
                        ">Residencies</a>
                        <a href="">Our Value</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className="bg-blue-700 text-white px-4 py-2 rounded">Contact</button>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Header
