import Image from 'next/image'


import Link from 'next/link'
import Navbar from './components/Navbar'
import Samantha from './components/Samantha.jpg'


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-red-100 min-h-screen flex ">
        <div className="w-1/2 h-100 bg-black overflow-hidden">
          <div className="w-1/2 ml-52 rounded-full mt-16 drop-shadow-2xl rotate-12">
          <Image src={Samantha} alt="Picture of the author" className='object-cover rounded-2xl' />
          </div> 
        </div>
        <div className="w-1/2 h-100 bg-black text-[#eeba2b]  flex flex-col items-center justify-center ">
          <div className="text-6xl font-serif">I'm Samantha</div> 
          <div className="text-2xl mt-2 font-sans"> ~A software designer in training~</div>
        </div>
      </div>
    </div>
    
  )
}
