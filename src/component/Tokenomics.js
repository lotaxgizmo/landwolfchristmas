import React from 'react'
import tokenomics from '../assets/tokenomics.png'
import contract from '../assets/contract.png'
import lp from '../assets/lp.png'
import supply from '../assets/supply.png'
import chain from '../assets/chain.png'

function Tokenomics() {
    return (
        <div className='flex flex-col items-center justify-center relative'>
            <img src={tokenomics} alt="tokenomics" className='w-10/12' />


            <div className="tokenomics flex flex-row flex-wrap justify-center items-center lg:flex-row lg:gap-4 gap-0">
                <img src={supply} alt="supply" className='lg:p-5 p-2 lg:w-80 w-[48%]' />
                <img src={contract} alt="contract" className='lg:p-5 p-2 lg:w-80 w-[48%]' />
                <img src={lp} alt="lp" className='lg:p-5 p-2 lg:w-80 w-[48%]' />
                <img src={chain} alt="chain" className='lg:p-5 p-2 lg:w-80 w-[48%]' />
            </div>
        </div>
    )
}

export default Tokenomics