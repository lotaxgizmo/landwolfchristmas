import React from 'react'
import tgbox from '../assets/tgbox.png';
import xbox from '../assets/xbox.png';
import dextools from '../assets/dextools.png';
import dexscreener from '../assets/dexscreener.png';


function Socialcomponent() {
    return (
        <div className="left flex flex-row items-center justify-center bg-black/50 rounded-lg p-4 backdrop-blur-sm gap-4 z-50s m-3">
            <img src={tgbox} alt="tgbox" className='w-11' />
            <img src={xbox} alt="xbox" className='w-11' />
            <img src={dextools} alt="dextools" className='w-11' />
            <img src={dexscreener} alt="dexscreener" className='w-11' />
        </div>
    )
}

export default Socialcomponent