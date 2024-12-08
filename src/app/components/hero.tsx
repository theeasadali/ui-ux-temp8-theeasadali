import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div>
        <div className='flex justify-between gap-2 container px-[73px] h-[850px] items-center bg-background rounded-bl-[48px]'>
            <div className='text-secondary flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <span className='text-[14px] uppercase tracking-widest'>Welcome to chairy</span>
                    <h1 className='text-[60px] font-bold leading-[70px]'>Best Furniture <br /> Collection for your <br /> interior.</h1>
                </div>
                <button className='flex gap-[20px] items-center rounded-lg w-fit bg-primary text-white font-semibold text-xl px-6 py-[14px] transition-colors duration-200 hover:bg-primaryText'>
                    <span>{`Shop Now`}</span>
                    <Image src={`/img/line.svg`} height={16} width={16} alt='cart-icon'/>
                </button>
            </div>
            <Image src={`/img/Product\ Image.png`} height={584} width={434} alt='chair-hero'/>

        </div>
    </div>
  )
}

export default Hero