import React from 'react'
import Image from 'next/image'
const TopNav = () => {
  return (
    <div className='bg-secondary'>
        <div className='py-[14px] flex justify-between gap-2 container'>
            <div className='flex gap-2'>
                <Image src={`/img/tick.svg`} height={10} width={10} alt='tick-icon'/>
                <p className='text-[13px] text-white'>Free shipping on all orders over $50</p>
            </div>

            <div>
                <div className='text-[13px] text-white flex gap-6'>
                    <p className='flex gap-[6px] items-center'>Eng <Image src={`/img/chevron.svg`} height={10} width={10} alt='cart-icon'/></p>
                    <p>Faqs</p>
                    <p className='flex gap-[6px] items-center'><Image src={`/img/help.svg`} height={10} width={10} alt='help-icon'/> Need Help</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopNav