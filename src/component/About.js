import React from 'react'
import trees from '../assets/trees.png';
import buybtnn from '../assets/buybtnn.png';
import santacoke from '../assets/santacoke.png';

function About() {
    return (
        <div className='flex flex-col items-center justify-center relative'>
            <div className="innerdiv flex lg:flex-row flex-col items-center justify-center w-[90%] lg:bg-black/50 bg-black/60 rounded-3xl lg:rounded-[107px] p-4 backdrop-blur-sm overflow-clip relative">

                <div className="leftdiv lg:w-1/2 w-full flex flex-col items-center justify-center p-4 lg:p-20 z-20">
                    <img src={santacoke} alt="trees" className='lg:w-[700px] w-[90%]' />
                </div>

                <div className="rightdiv lg:w-1/2 w-full flex flex-col items-center justify-center lg:p-20 py-5  lg:gap-7 gap-4 z-20">
                    <h1 className='text-[#F7FFFF] lg:text-8xl text-5xl  text-center  '>ABOUT</h1>

                    <p className='text-[#F7FFFF] lg:text-2xl text-base   text-center  '>LandWolf emerges as a fresh start, inspired by the story of Solana Wolf. The previous project, tarnished by influencers like Rex, who scammed the community and profited at the expense of others, left many feeling betrayed, with some even losing their savings. LandWolf is here to change that narrative.</p>


                    <img src={buybtnn} alt="buybtnn" className='w-96 [500px]  ' />
                </div>

                <img src={trees} alt="trees" className='absolute  w-[110%]  bottom-0  max-w-none' />
            </div>
        </div>
    )
}

export default About