import React from 'react'
import santago from '../assets/santago.png';
import ca from '../assets/ca.png';


function Otherabout() {
    return (
        <div className='flex flex-col justify-center items-center relative my-10'>
            <img src={santago} alt="" className='lg:w-11/12 w-12/12  border-black hidden lg:flex border-[6px] lg:rounded-[200px]' />

            <div className="hello flex flex-col justify-center items-center lg:absolute lg:bottom-20 bottom-5 bg-black/40 lg:gap-5 lg:w-9/12 w-11/12 lg:p-20 p-3 backdrop-blur-lg">

                <p className='text-[#F7FFFF] lg:text-4xl text-base  text-center  '>This project is built on trust, transparency, and long-term goals. A team of talented artists and marketers is driving LandWolf forward, ensuring it surpasses expectations and delivers genuine value to the community. Launching with a festive holiday theme, LandWolf will transition to its permanent home on Pump.fun, offering stability and renewed hope.</p>

                <img
                    src={ca}
                    alt=""
                    className='lg:w-9/12 w-12/12 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95'
                    onClick={() => {
                        navigator.clipboard.writeText('??????????????????????');
                    }}
                />

            </div>

        </div>
    )
}

export default Otherabout