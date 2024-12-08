import Image from 'next/image'
import React from 'react'

interface ProductProps {
    title: string;
    label?: 'New' | 'Sales' | ''; // Optional and limited to 'New' or 'Sales'
    image: string; // Path or URL to the image
    price: number; // Product price
}

const Product: React.FC<ProductProps> = ({title, label, image, price}) => {
  return (
    <>
        <div className='flex flex-col gap-[14px] relative'>
            <div>
                <Image className='rounded-md' src={image} height={312} width={312} alt={title}/>
                {label && <span className={`${label === "New" ? 'bg-accentNew': 'bg-accentSales'} text-white text-[13px] font-medium p-[11px] rounded absolute left-5 top-5`}>{label}</span>}
            </div>
            <div className='flex justify-between items-center gap-3 w-[312px]'>
                <div className='flex flex-col gap[10px] '>
                    <h5 className='text-base text-primaryText'>{title}</h5>
                    <span className='font-semibold text-[18px] text-secondary'>{`$${price}`}</span>
                </div>
                <button className='bg-background rounded-lg p-3 flex justify-center item-center transition-colors duration-200 hover:bg-primary'>
                    <Image src={`/img/cart.svg`} height={18} width={18} alt={`cart icon`}/>
                </button>
            </div>
        </div>
    </>
  )
}

export default Product