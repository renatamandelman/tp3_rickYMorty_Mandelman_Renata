import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Image src={"/assets/gif1.gif"} width={500} height={500} alt={"loading..."} />
    </div>
  )
}

export default Loading