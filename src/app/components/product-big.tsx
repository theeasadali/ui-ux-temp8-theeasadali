import React from 'react'

const ProductBig = () => {
  return (
    <>
        <div className='flex flex-col gap-[22px]'>
            <img className="bg-image max-w-full" src={`/img/Image.png`} alt={`Product Image`}/>
            <div className='flex flex-col gap-2 justify-between w-[270px] text-secondary'>
                <h5 className='text-xl'>{`Library Stool Chair`}</h5>
                <span className='text-[18px]'>{`$99`}</span>
            </div>
        </div>
    </>
  )
}

export default ProductBig