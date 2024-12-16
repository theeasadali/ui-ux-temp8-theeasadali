import React from 'react'
import { Product as ProductInterface } from '../interfaces/Product'
import { products } from '../data/products'
import Product from './product'
import SectionTitle from './section-title'
import Image from 'next/image'
import { roboto } from './fonts'

const StylesSection = () => {
    return (
        <div className='container flex flex-col gap-10 py-6 relative pt-[229px]'>
            <span className={`${roboto.className} font-normal text-[32px] -rotate-90 relative -left-[580px] -bottom-24 uppercase`}>Explore new and popular styles</span>
            <div className='flex gap-6 '>
                <Image className="flex-shrink-0" src={products[0].image} alt={products[0].name} height={468} width={468}/>
                <div className='grid grid-cols-2 grid-rows-2 gap-6'>
                    {products && products.map(({id, name, image}) => (
                        <Image key={id} src={image} alt={name} height={312} width={312}/>
                    )).slice(1, 5)}
                </div>
            </div>
        </div>
    )
}

export default StylesSection