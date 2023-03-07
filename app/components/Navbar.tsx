import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='w-full bg-black flex justify-between items-center h-16'>
        <div className='text-[#eeba2b] text-4xl ml-10 font-bold cursor-pointer font-serif italic'><Link href="/food" >SC</Link></div>
        <div>
        <Link href="/" ><span className='text-[#D4AF37] text-2xl ml-10 cursor-pointer font-thin hover:text-[#eeba2b] italic font-serif'>home</span></Link>
        <Link href="/" className='text-[#D4AF37] text-2xl ml-10 cursor-pointer font-extralight hover:text-[#eeba2b] italic font-serif'>about</Link>
        <Link href="/contact" className='text-[#D4AF37] text-2xl ml-10 cursor-pointer font-extralight mr-10 hover:text-[#eeba2b] italic font-serif' >contact</Link>
        </div>
        
    </div>
  )
}

export default Navbar