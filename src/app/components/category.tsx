import React from 'react'
import Image from 'next/image'

const Category = () => {
  return (
    <div className='rounder-[10px] relative'>
        <Image src={`/img/Image\ (4).png`} height={424} width={424} alt={`Product Image`}/>
        <div className='flex flex-col gap-2 absolute bottom-0 left-0 bg-overlary  w-[424] p-5 rounded-b-[10px]'>
            <span className='font-semibold text-xl text-white'>{`Wing Chair`}</span>
            <span className='text-sm text-white opacity-70'>{`3,584 Products`}</span>
        </div>
    </div>
  )
}

export default Category