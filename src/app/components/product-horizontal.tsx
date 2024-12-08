import React from 'react'
import Image from 'next/image'
import ButtonText from './buttonText'
const productHorizontal = () => {
  return (
    <>
        <div>
            {/* Image */}
            <Image className="rounded-0" src={`/img/Image\ (2).png`} height={150} width={150} alt={`Product Image`}/>

            {/* Content */}
            <div className='flex flex-col gap-8'>
                <h2 className='text-6xl font-bold text-secondary'>
                    Library Stool Chair
                </h2>
                <span className='p-14 '></span>
            </div>
            <hr className='py-10 border-[#d9d9d9]' />
            <div className='flex flex-col gap-8'>
                <p className='text-[22px] text-secondary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <ButtonText/>
            </div>
        </div>
    </>
  )
}

export default productHorizontal