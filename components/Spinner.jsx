import React from 'react'
import Image from 'next/image'
import blue_spinner from '../public/blue_spinner.gif'

const Spinner = () => {
  return (
    <div><Image className="w-[200px] m-auto block" alt='loading...' /></div>
  )
}

export default Spinner