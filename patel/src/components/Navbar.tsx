import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    
  return (
    <div className='container p-8 flex justify-between mx-auto'>
        <Link href ='/' className='text-2xl font-bold'>Home</Link>
        <div className='flex gap-2'>
            <Link href='/about' className='text-xl'>About</Link>
            <Link href='/contact' className='text-xl'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar