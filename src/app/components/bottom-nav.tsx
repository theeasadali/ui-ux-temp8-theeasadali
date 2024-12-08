import Link from 'next/link'
import React from 'react'
const BottomNav = () => {
  return (
    <div className='bg-white shadow-[0_1px_0_0_#E1E3E5]'>
        <div className='py-[14px] flex justify-between gap-2 container h-[74px] items-center'>
            <nav className='flex gap-8 text-[#636270] font-medium text-[14px]'>
                <Link className='text-primaryText' href={`#`}>Home</Link>
                <Link href={`#`}>Shop</Link>
                <Link href={`#`}>Product</Link>
                <Link href={`#`}>Pages</Link>
                <Link href={`#`}>About</Link>
            </nav>

            <div>
                <Link className='text-[#636270] font-medium text-[14px]' href={`#`}>Contact: <span className='text-secondary '>(808) 555-0111</span></Link>
            </div>
        </div>
    </div>
  )
}

export default BottomNav