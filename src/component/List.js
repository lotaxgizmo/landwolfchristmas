import React from 'react'
import naughtylist from '../assets/naughtylist.png';
import leftgift from '../assets/leftgift.png';
import middlegift from '../assets/middlegift.png';
import rightgift from '../assets/rightgift.png';

import mistletoe2 from '../assets/mistletoe2.png';

function List() {
    return (
        <div className='flex flex-col items-center justify-center relative'>
            <div className='flex flex-row items-center justify-between w-full z-30'>
                <img src={leftgift} alt="leftgift" className='lg:w-[30%] w-[20%]' />
                <img src={naughtylist} alt="naughtylist" className='lg:w-[30%] w-[60%] lg:-mt-[15%] -mt-[5%]' />
                <img src={rightgift} alt="rightgift" className='lg:w-[30%] w-[20%]' />

            </div>

            <img src={middlegift} alt="middlegift" className='lg:w-[40%] w-[60%]' />

            <img src={mistletoe2} alt="mistletoe1" className='absolute  w-full bottom-0  ' />

        </div>
    )
}

export default List