"use client"
import { products } from '../data/products'
import Product from '@/app/components/product'
import SectionTitle from '@/app/components/section-title'
import { openSans, roboto } from '../components/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function AllProducts() {
    return(
        <>
            <div className='container flex flex-col gap-10 py-[57px]'>
                <SectionTitle title={`All Products`}/>
                <div className='grid grid-cols-4 gap-6 pt-[40px]'>
                    {products && products.map(({id, name, label, image, price}) => (
                        <Link href={`/shop/${id}`}><Product key={id}title={name} label={label} image={image} price={price}/></Link>
                    ))}
                </div>
            </div>
            <div className='py-[100px] bg-[#1e283224] flex flex-col gap-20 items-center'>
                <div className='w-[760px] flex flex-col gap-[74px] items-center'>
                    <h2 className={`${roboto.className} font-medium text-[50px]`}>Or Subscribe To The Newsletter</h2>
                    <div className='flex gap-[26px]'>
                        <input type="text" placeholder='Email Address...' className={`${roboto.className} font-semibold border-b-2 border-black text-[#1e283282] bg-transparent w-[663px] p-4`}/>
                        <button className={`${openSans.className} uppercase border-b-2 border-black text-[#1e2832] bg-transparent w-[91px] p-4`}>Submit</button>
                    </div>
                </div>

                <div className='flex flex-col gap-[60px] items-center'>
                    <h2 className={`${roboto.className} font-medium text-[50px]`}>Follow products and discounts on Instagram</h2>
                    <div className='flex gap-[26px]'>
                        {products && products.map(product =>(
                            <Image key={product.id} src={product.image} height={186} width={186} alt={product.name} />
                        )).slice(0,6)}
                    </div>
                </div>
            </div>
        </>
    )
}