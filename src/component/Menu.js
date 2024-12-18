import React from 'react'
import dexscreener from '../assets/dexscreener.png';
import dextools from '../assets/dextools.png';
import tgbox from '../assets/tgbox.png';
import xbox from '../assets/xbox.png';
import buywolf from '../assets/buywolf.png';
import chart from '../assets/chart.png';
import Socialcomponent from './Socialcomponent';
import Buycomponent from './Buycomponent';

function Menu() {
    return (
        <div className='lg:flex z-[60] fixed hidden lg:flex-row flex-col items-center justify-between w-full lg:px-10 px-3 bottom-20 gap-4'>

            <Socialcomponent />
            <Buycomponent />



        </div>
    )
}

export default Menu