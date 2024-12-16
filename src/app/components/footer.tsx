import { Instagram, LucideFacebook, Twitter, Linkedin, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-white shadow-[inset_0_1px_0_#E1E3E6]'>
          <div className=' container flex justify-evenly py-[65px]'>

              {/* Logo & Details */}
              <div className='flex flex-col gap-6 pr-[97px]'>
                  <Image src={`/img/comforty.svg`} alt={`Comforty/Chairy Logo`} width={168} height={40}/>
                  <p className='text-base text-secondary'>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                  Cras egestas purus </p>
                  <div className='flex gap-1'>
                      <Link href={`#`}>
                        <LucideFacebook className='p-[10px] text-gray-600 border border-transparent transition-colors duration-200 hover:border-primaryText hover:text-primaryText rounded-full h-[38px] w-[38px]'/>
                      </Link>

                      <Link href={`#`}>
                        <Twitter className='p-[10px] text-gray-600 border border-transparent transition-colors duration-200 hover:border-primaryText hover:text-primaryText rounded-full h-[38px] w-[38px]'/>
                      </Link>

                      <Link href={`#`}>
                        <Instagram className='p-[10px] text-gray-600 border border-transparent transition-colors duration-200 hover:border-primaryText hover:text-primaryText rounded-full h-[38px] w-[38px]'/>

                      </Link>

                      <Link href={`#`}>
                        <Youtube className='p-[10px] text-gray-600 border border-transparent transition-colors duration-200 hover:border-primaryText hover:text-primaryText rounded-full h-[38px] w-[38px]'/>
                      </Link>

                      <Link href={`#`}>
                        <Linkedin  className='p-[10px] text-gray-600 border border-transparent transition-colors duration-200 hover:border-primaryText hover:text-primaryText rounded-full h-[38px] w-[38px]'/>
                      </Link>
                  </div>
              </div>

              {/* Category Links */}
              <div className='flex flex-col gap-5 pr-[120px]'>
                <h4 className='uppercase text-sm font-medium text-[#9a9caa] tracking-widest'>Category</h4>
                <div className='flex flex-col gap-3 text-base text-secondary'>
                  <span className='transition-colors duration-200 hover:text-primaryText hover:underline underline-offset-2 hover:cursor-pointer'>Sofa</span>
                  <span className='transition-colors duration-200 hover:text-primaryText hover:underline underline-offset-2 hover:cursor-pointer'>Armchair</span>
                  <span className='transition-colors duration-200 hover:text-primaryText hover:underline underline-offset-2 hover:cursor-pointer'>Wing Chair</span>
                  <span className='transition-colors duration-200 hover:text-primaryText hover:underline underline-offset-2 hover:cursor-pointer'>Desk Chair</span>
                  <span className='transition-colors duration-200 hover:text-primaryText hover:underline underline-offset-2 hover:cursor-pointer'>Wooden Chair</span>
                  <span className='transition-colors duration-200 hover:text-primaryText hover:underline underline-offset-2 hover:cursor-pointer'>Park Bench</span>
                </div>
              </div>

              {/* Support Links */}
              <div className='flex flex-col gap-5 pr-[69px]'>
                <h4 className='uppercase text-sm font-medium text-[#9a9caa] tracking-widest'>Support</h4>
                <div className='flex flex-col gap-3 text-base text-secondary'>
                  <span className='transition-colors duration-200 underline-offset-2 hover:text-primaryText hover:underline hover:cursor-pointer'>Help & Support</span>
                  <span className='transition-colors duration-200 underline-offset-2 hover:text-primaryText hover:underline  hover:cursor-pointer'>Tearms & Conditions</span>
                  <span className='transition-colors duration-200 underline-offset-2 hover:text-primaryText hover:underline  hover:cursor-pointer'>Privacy Policy</span>
                  <span className='transition-colors duration-200 underline-offset-2 hover:text-primaryText hover:underline  hover:cursor-pointer'>Help</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className='flex flex-col gap-5'>
                <h4 className='uppercase text-sm font-medium text-[#9a9caa] tracking-widest'>Newsletter</h4>
                <div className='flex gap-3'>
                  <input type="text" placeholder='Your email' className='text-base text-[#9a9caa] rounded-lg border border-[#e1e3e5] py-4 px-5 h-[46px]' />
                  <button className='text-base font-semibold text-white bg-primary transition-colors duration-200 hover:bg-primaryText rounded-lg border border-[#e1e3e5] py-[14px] px-6 h-[46px] flex justify-center items-center'>Subscribe</button>
                </div>
                <p className='text-base text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
              </div>
          </div>
      </footer>
      <div className='bg-white shadow-[inset_0_1px_0_#E1E3E6] '>
        <div className="container py-6 flex justify-between gap-3">
          <p className='text-base text-[#9a9caa]'>@ 2021 - Blogy - Designed & Develop by <span className='text-secondary'>Zakirsoft</span></p>

          <div className='flex gap-1 items-center'>
            <Link href={`#`}>
              <Image className="grayscale" src={`/img/mastercard.svg`} alt={`Mastercard`} width={36} height={27}/>
            </Link>

            <Link href={`#`}>
              <Image className="grayscale" src={`/img/paypal.svg`} alt={`Paypal`} width={56} height={27}/>
            </Link>

            <Link href={`#`}>
              <Image className="grayscale" src={`/img/americanexpress.svg`} alt={`American Express`} width={50} height={27}/>
            </Link>

            <Link href={`#`}>
              <Image className="grayscale" src={`/img/visa.svg`} alt={`Visa`} width={55} height={27}/>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer