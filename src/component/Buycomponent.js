import React from 'react'
import buywolf from '../assets/buywolf.png';
import chart from '../assets/chart.png';

function Buycomponent() {
    return (
        <div className="right flex flex-row items-center justify-center bg-black/50 rounded-lg p-4 backdrop-blur-sm gap-4  ">
            <img src={buywolf} alt="buywolf" className='w-32' />
            <img src={chart} alt="chart" className='w-32' />
        </div>
    )
}

export default Buycomponent