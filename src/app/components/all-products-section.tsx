import React from 'react'
import { Product as ProductInterface } from '../interfaces/Product'
import { products } from '../data/products'
import Product from './product'
import SectionTitle from './section-title'


const AllProductsSection = () => {
    return (
        <div className='container flex flex-col gap-10 py-[150px]'>
            <span className='text-center'>
                <SectionTitle title={`Our Products`}/>
            </span>
            <div className='grid grid-cols-4 gap-6 pt-[76px]'>
                {products && products.map(({id, name, label, image, price}) => (
                    <Product key={id} title={name} label={label} image={image} price={price}/>
                )).slice(0, 8)}
            </div>
        </div>
    )
}

export default AllProductsSection