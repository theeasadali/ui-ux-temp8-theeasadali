import React from 'react'
import Image from 'next/image'
const MiddleNav = () => {
  return (
    <div className='bg-background'>
      <div className='flex justify-between items-center gap-5 h-[84px] container'>
          <Image src={`/img/comforty.svg`} height={40} width={166} alt={`Comforty Logo`} />
          <button className='flex gap-[12px] items-center rounded-lg bg-white text-secondary font-medium text-xs transition-colors duration-200 h-fit px-4 py-[11px] hover:text-primaryText'>
              <Image src={`/img/cart.svg`} height={22} width={22} alt='cart-icon'/>
              <span>{`Cart`}</span>
              <span className='font-medium text-[10px]  bg-primaryText text-white rounded-full h-4 w-4'>2</span>
          </button>
      </div>
    </div>
  )
}

export default MiddleNav