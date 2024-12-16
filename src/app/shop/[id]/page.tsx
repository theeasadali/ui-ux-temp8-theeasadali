import React from 'react'
import {products} from "@/app/data/products"
import Image from 'next/image';
import ButtonText from '@/app/components/buttonText';
import { ShoppingCart, Star } from 'lucide-react';
import Product2 from '@/app/components/product-2';
import SectionTitle from '@/app/components/section-title';
import Link from 'next/link';
const ProductDetails = ({params} : {params: {id:number}}) => {
  const product = products.filter(product => product.id == params.id);
  return (
    <>
      {product ? product.map(item => (
        <div key={item.id} className='container flex gap-28 py-[132px]'>
          <Image src={item.image} height={607} width={675} alt={item.name} />

          <div className='flex flex-col gap-[37px]'>
            <div className='flex flex-col gap-11'>
              <h2 className='text-[60px] font-bold text-secondary leading-tight'>{item.name}</h2>
              <div className='flex gap-5'>
                <span className='font-semibold text-[20px] text-white bg-primary py-2 px-4 rounded-full w-fit'>${item.price}</span>
                {item.featured === true ? 
                  <span className='flex gap-2 items-center font-semibold text-[20px] text-white bg-secondary py-2 px-4 rounded-full w-fit'>Featured <Star/></span>
                  :""  
                }
              </div>
            </div>
            <hr className='border-[#d9d9d9]'/>
            <div className='flex flex-col gap-8'>
              <p className='text-[22px] text-secondary'>{item.description}</p>
              <button className='w-fit text-white bg-primary px-[24px] flex gap-2 py-[14px] font-semibold text-[20px] rounded-lg transition-colors duration-200 hover:bg-primaryText'><ShoppingCart className='h-[29px] w-[29px]' /> Add To Cart</button>
            </div>
          </div>
        </div>
      ))
      : <h3>"Nothing Found"</h3>
      }

      <div className='flex flex-col gap-[69px] container pb-[141px]'>
        <div className='flex justify-between gap-8'>
          <SectionTitle title='Featured Products'/>
          <Link href={`/shop`} className='text-lg font-bold text-black border-b-2 pb-2 border-black'>View all</Link>
        </div>
        <div className='flex gap-[26px] flex-wrap'>
          {products && products.filter(product => product.featured === true).map(product => (
            <span key={product.id}><Link href={`/shop/${product.id}`}><Product2 name={product.name} image={product.image} price={product.price}/></Link></span>
          )).slice(0,5)}
        </div>
      </div>
    </>
  )
}

export default ProductDetails