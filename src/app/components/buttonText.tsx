import Image from 'next/image'
import React from 'react'

const ButtonText = () => {
  return (
    <>
      <button className='flex gap-[20px] items-center rounded-lg bg-primary text-white font-semibold text-xl px-6 py-[14px] transition-colors duration-200 hover:bg-primaryText'>
        <Image src={`/img/cart-white.svg`} height={22} width={22} alt='cart-icon'/>
        <span>{`Add To Cart`}</span>
      </button>
    </>
  )
}

export default ButtonText