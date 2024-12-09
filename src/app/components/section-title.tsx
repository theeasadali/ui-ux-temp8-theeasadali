import React from 'react'

type SecTitle = {title:string}

const SectionTitle:React.FC<SecTitle> = ({title}) => {
  return (
    <>
        <h2 className='text-[32px] leading-[110%] text-secondary font-semibold'>
            {title}
        </h2>
    </>
  )
}

export default SectionTitle