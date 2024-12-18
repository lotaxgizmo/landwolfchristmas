import React from 'react'
import eyeglass from '../assets/eyeglass.png'
import telbot from '../assets/telbot.png'
import xbot from '../assets/xbot.png'
import line from '../assets/line.png'
import bottompic from '../assets/bottompic.png'
import bigdude from '../assets/bigdude.svg'


function Joinus() {
    return (
        <div className='flex flex-col justify-center items-center text-[#404040]'>
            <img src={bigdude} alt="" className='w-1/2  z-10' />
            <div className="relative bgjoin w-11/12 lg:rounded-[40px] rounded-3xl border-4 border-[#404040] box bg-white flex  flex-col justify-around items-center lg:p-10 p-5">
                <h2 className='lg:text-8xl text-4xl font-bold lg:my-8 my-2 text-center'>JOIN US ON SOL</h2>
                <p className='lg:text-xl text-center'>CATCH A RIDE WITH US...</p>


                <div className="social flex flex-row justify-center items-center gap-4 lg:mt-10 mt-4 flex-wrap">
                    <a href="https://t.me/#" target="_blank" rel="noreferrer" className='lg:w-16 w-10 transition-transform hover:scale-95 active:scale-90'>
                        <img src={telbot} alt="" className='w-full' />
                    </a>
                    <a href="https://x.com/#" target="_blank" rel="noreferrer" className='lg:w-16 w-10 transition-transform hover:scale-95 active:scale-90'>
                        <img src={xbot} alt="" className='w-full' />
                    </a>
                    <img src={eyeglass} alt="" className='lg:w-40 w-32 lg:ml-3  rounded-full' />
                </div>


                <img src={line} alt="" className=' w-11/12 lg:my-10 my-5
             ' />

                <img src={bottompic} alt="" className='lg:w-52 w-20 lg:absolute bottom-10 right-10 z-20 lg:m-5 m-1' />

                <p className='lg:text-xl text-sm text-center '>2024 $LANDWOLF ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}

export default Joinus