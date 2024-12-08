import Image from 'next/image'
import React from 'react'

const Product2 = () => {
  return (
    <>
        <div className='flex flex-col gap-[22px]'>
            <Image className="bg-image" src={`/img/Image.png`} height={263} width={270} alt={`Product Image`}/>
            <div className='flex gap[10px] justify-between w-[270px]'>
                <h5 className='text-base text-secondary'>{`Library Stool Chair`}</h5>
                <span className='font-bold text-[14px] text-black'>{`$99`}</span>
            </div>
        </div>
    </>
  )
}

export default Product2