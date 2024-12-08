import React from 'react'
import Image from 'next/image'
const LogosSection = () => {
  return (
    <div className='flex justify-between items-center gap-4 py-[54] container h-[134px]'>
        <Image src={`/img/logo1.png`} height={80} width={80} alt='Client Logo1'/>
        <Image src={`/img/Logo2.png`} height={80} width={80} alt='Client Logo2'/>
        <Image src={`/img/Logo3.png`} height={80} width={80} alt='Client Logo3'/>
        <Image src={`/img/Logo4.png`} height={80} width={80} alt='Client Logo4'/>
        <Image src={`/img/Logo5.png`} height={80} width={80} alt='Client Logo5'/>
        <Image src={`/img/Logo6.png`} height={80} width={80} alt='Client Logo6'/>
        <Image src={`/img/Logo7.png`} height={80} width={80} alt='Client Logo7'/>
    </div>
  )
}

export default LogosSection