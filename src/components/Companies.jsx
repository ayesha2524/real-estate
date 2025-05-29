import React from 'react'
import Image1 from '../assets/prologis.png'
import Image2 from '../assets/tower.png'
import Image3 from '../assets/equinix.png'
import Image4 from '../assets/realty.png'
function Companies() {
    return (
        <div>
            <section className="cWrapp mt-4">
                <div className="cContainer flex justify-between items-center gap-5 ml-8">
                    <img src={Image1} alt="" width={150}/>
                    <img src={Image2} alt="" width={150}/>
                    <img src={Image3} alt="" width={150}/>
                    <img src={Image4} alt="" width={150}/>
                </div>
            </section>
        </div>
    )
}

export default Companies