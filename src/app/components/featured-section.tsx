import React from 'react'
import { Product as ProductInterface } from '../interfaces/Product'
import { products } from '../data/products'
import Product from './product'
import SectionTitle from './section-title'

const FeaturedSection = () => {
    const featuredProducts = products.filter(product => product.featured === true || product.label !== undefined)
    return (
        <div className='container flex flex-col gap-10 py-6'>
            <SectionTitle title={`Featured Products`}/>
            <div className='flex gap-6 '>
                {featuredProducts && featuredProducts.map(({id, name, label, image, price}) => (
                    <Product key={id} title={name} label={label} image={image} price={price}/>
                )).slice(0, 4)}
            </div>
        </div>
    )
}

export default FeaturedSection