import React, { useEffect, useState } from 'react'
import snow from '../assets/snow.svg';
import herotext from '../assets/herotext.png';
import reindeer from '../assets/reindeer.png';
import onpump from '../assets/onpump.png';
import landwolfroll from '../assets/landwolfroll.png';
import mistletoe1 from '../assets/mistletoe1.png';
import Socialcomponent from './Socialcomponent';
import Buycomponent from './Buycomponent';

function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='relative flex flex-col items-center justify-center '>
            <img src={herotext} alt="herotext" className='w-[95%] mt-5 lg:mt-0' />
            <img src={onpump} alt="onpump" className='lg:w-96 w-40 lg:-mt-32 -mt-6 lg:mb-0 mb-2 shakety' />

            <h1 className='text-[#F7FFFF] lg:text-3xl lg:-rotate-6 text-center z-10'>A New Beginning for the Community</h1>
            <h2 className='text-[#F7FFFF] lg:text-3xl text-sm lg:-rotate-6 text-center z-10'>66iuRVBNrm1ww2v3xPGqoCzkqYs7Wc2rPYfCPK8xpump</h2>

            <img
                src={reindeer}
                alt="reindeer"
                className='lg:w-[60%] w-[90%] lg:absolute -z-[1] mt-5 lg:mt-0'
                style={{
                    transform: `translateY(${scrollPosition * 0.5}px)`,
                    opacity: Math.max(0, 1 - scrollPosition / 1000)
                }}
            />

            <img src={mistletoe1} alt="mistletoe1" className='absolute w-10 lg:w-20 -top-10 lg:-top-20 left-0' />
            <div className="div flex flex-col lg:hidden">
                <Socialcomponent />
                <Buycomponent />
            </div>
            <img src={snow} alt="snow" className='w-full lg:mt-0 -mt-20 z-20' />
            <img src={landwolfroll} alt="landwolfroll" className='lg:w-[100%] w-[150%] -mt-3 max-w-none  z-30' />
        </div>
    )
}

export default Home