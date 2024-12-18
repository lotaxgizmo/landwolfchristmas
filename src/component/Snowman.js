import React from 'react'
import cliffsnow from '../assets/cliffsnow.png';
import landwolfroll from '../assets/landwolfroll.png';

function Snowman() {
    return (
        <div className='flex flex-col items-center justify-center relative'>
            <img src={cliffsnow} alt="cliffsnow" className='w-[100%] ' />
            <img src={landwolfroll} alt="landwolfroll" className='lg:w-[100%] w-[150%] -mt-3 max-w-none  z-30 ' />
        </div>
    )
}

export default Snowman