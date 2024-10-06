import Image from 'next/image'
import React from 'react'

const Icon = () => {
  return (
    <div className='dark:bg-neutral-700 p-2 rounded-lg bg-neutral-300'>
      <Image
        src="/images/logo/logo-singa.png"
        width={60}
        height={60}
        alt="logo"
      />
    </div>
  )
}

export default Icon