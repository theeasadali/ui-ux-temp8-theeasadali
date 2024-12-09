import React from 'react'
import Image from 'next/image'

interface Category{
  name: string,
  image: string,
  noOfItems: number
}

const Category:React.FC<Category> = ({name, image, noOfItems}) => {
  return (
    <div className='rounder-[10px] relative max-w-[400px]'>
        <Image src={image} height={424} width={424} alt={name}/>
        <div className='flex flex-col gap-2 absolute bottom-0 left-0 bg-overlary p-5 rounded-b-[10px]'>
            <span className='font-semibold text-xl text-white'>{name}</span>
            <span className='text-sm text-white opacity-70'>{`${noOfItems}Products`}</span>
        </div>
    </div>
  )
}

export default Category