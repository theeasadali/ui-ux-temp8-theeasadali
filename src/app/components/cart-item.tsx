import Image from 'next/image'
import React from 'react'

const cartItem = () => {
  return (
    <>
        <div className='flex gap-[30px] w-full'>
            <Image className="rounded-0" src={`/img/Image\ (2).png`} height={150} width={150} alt={`Product Image`}/>
            <div className='flex gap-8 justify-between items-start'>
                <div className='flex flex-col justify-between h-full'>
                    {/* Product Name */}
                    <h5 className='text-base text-secondary'>{`Library Stool Chair`}</h5>
                    
                    {/* product info */}
                    <div>
                        <p className='text-[15px] text-[#757575]'>{`Ashen Slate/Cobalt Bliss`}</p>
                        <div className='flex gap-2'>
                            <p className='text-[15px] text-[#757575]'>Size <span className='text-[14px] font-semibold border-b border-[#757575]'>L</span></p>
                            <p className='text-[15px] text-[#757575]'>Quantity <span className='text-[14px] font-semibold border-b border-[#757575]'>1</span></p>
                        </div>
                    </div>

                    {/* Product Action */}
                    <div className='flex gap-4'>
                        <Image src={`/img/favourite.svg`} height={22} width={22} alt={`Product Image`}/>
                        <Image src={`/img/delete.svg`} height={22} width={22} alt={`Product Image`}/>
                    </div>
                </div>

                {/* Product Price */}
                <span className='text-[#111111] text-[15px] leading-7'>{`MRP: $99`}</span>
            </div>
        </div>
    </>
  )
}

export default cartItem