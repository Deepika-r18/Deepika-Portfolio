import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){

    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between bg-four px-5 py-4 font-hero-font">
        <a className="font-bold sky-blue text-3xl" href="#">Portfolio</a>
        <nav className="hidden md:block">
            <ul className="flex text-white lap-nav hover:decoration-slice ">
                <li className=' hover:text-gray-900 text-2xl textone'><a href="#about">About</a></li>
                <li className=' hover:text-gray-900 text-2xl textone'><a href="#projects">Projects</a></li>
                <li className=' hover:text-gray-900 text-2xl textone'><a href="#skills">Skills</a></li>
                <li className=' hover:text-gray-900 text-2xl textone'><a href="#education">Education</a></li>
                {/* <li className=' hover:text-gray-400 text-2xl'><a href="#contact"><button>Contact</button></a></li> */}
            </ul>

        </nav>
        {toggleMenu && <nav className="block md:hidden " >
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav ">
                <li className=' hover:text-gray-900 textone'><a href="#about">About</a></li>
                <li className=' hover:text-gray-900 textone'><a href="#projects">Projects</a></li>
                <li className=' hover:text-gray-900 textone'><a href="#skills">Skills</a></li>
                <li className=' hover:text-gray-900 textone'><a href="#education">Education</a></li>
                <li className=' hover:text-gray-900 textone'><a href="#contact">Contact</a></li>
            </ul>

        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-gray-300 h-5'/></button>
        
    </header>
    
}