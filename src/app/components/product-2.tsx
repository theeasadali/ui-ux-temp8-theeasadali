import Image from 'next/image'
import React from 'react'

interface Product2 {
  image:string,
  name:string,
  price:number
}

const Product2: React.FC<Product2> = ({image, name, price}) => {
  return (
    <>
        <div className='flex flex-col gap-[22px]'>
            <Image className="bg-image" src={image} height={263} width={270} alt={name}/>
            <div className='flex gap[10px] justify-between w-[270px]'>
                <h5 className='text-base text-secondary'>{name}</h5>
                <span className='font-bold text-[14px] text-black'>${price}</span>
            </div>
        </div>
    </>
  )
}

export default Product2