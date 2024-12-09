import React from 'react'
import { Product as ProductInterface } from '../interfaces/Product'
import { products } from '../data/products'
import Category from './category'
import SectionTitle from './section-title'

// interface FeaturedPropsData {
//     product: ProductInterface[];

// cateogories with many products (products which are using specific category all in an array and their number of count)
// that category name which has most number of products associated with

// }

const CategorySection = () => {
    const categoryArr = (arr: ProductInterface[], categoryName:string) => {
        return arr.filter(item => item.category === categoryName)
    }
    
    const wingChair = categoryArr(products, "Wing Chair");

    const CategoryProducts = products.filter(product => product.category === "")
    return (
        <div className='container flex flex-col gap-10 py-6'>
            <SectionTitle title={`Top Categories`}/>
            <div className='flex gap-6 '>
                {CategoryProducts && wingChair.map(({id, name, image}) => (
                    <Category key={id} name={name} image={image} noOfItems={1}/>
                )).slice(0, 3)}
            </div>
        </div>
    )
}

export default CategorySection