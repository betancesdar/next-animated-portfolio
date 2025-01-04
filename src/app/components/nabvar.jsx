"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
        {url: "/", title: "Home"},
        {url: "/about", title: "About"},
        {url: "/portafolio", title: "Portafolio"},
        {url: "/contact", title: "Contact"},
];

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return(
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            <div className='hidden md:flex gap-4 w-1/3'>
                {links.map(link=>(
                    <NavLink link={link} key={link.title}/>
                ))}

            </div>
            {/* LOGO */}
            <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
                <Link 
                href='/' 
                className='text-sm bg-blue-800 rounded-md p-1 font-semibold flex items-center justify-center hover:drop-shadow-xl hover:animate-pulse'
                >
                    <span className='text-white mr-1'>DaBe</span>
                    <span className='w-12 h-8 rounded bg-white text-blue-800 flex items-center justify-center'>.dev</span>
                </Link>
            </div>
            <div className='hidden md:flex gap-4 w-1/3'>
                <Link href={'https://github.com/betancesdar'}>
                    <Image src="/github.png" alt="github" width={24} height={24} />
                </Link>
                <Link href={'https://www.instagram.com/alexbets08/'}>
                    <Image src="/instagram.png" alt="instagram" width={24} height={24} />
                </Link>
                <Link href={'https://dribbble.com/betancesdardev'}>
                    <Image src="/dribbble.png" alt="dribble" width={24} height={24} />
                </Link>
                <Link href={'https://www.facebook.com/alex.betances08'}>
                    <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                </Link>
                <Link href={'https://es.pinterest.com/betancesdar08/'}>
                    <Image src="/pinterest.png" alt="pinterest" width={24} height={24} />
                </Link>
                <Link href={'https://www.linkedin.com/in/betancesdar/'}>
                    <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className='md:hidden'>
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen((prev) => !prev)}>
                    <div className='w-10 h-1 bg-white rounded '></div>
                    <div className='w-10 h-1 bg-white rounded '></div>
                    <div className='w-10 h-1 bg-white rounded '></div>
                </button>
                {/* MENU LIST */}
                {open && (

                <div className='absolute top-0 left-0 w-screen h-screen bg-blue-800 text-white flex flex-col items-center justify-center gap-8 text-4xl'>
                    {links.map(link=>(
                        <Link href={link.url} key={link.title}>{link.title}</Link>
                    ))}
                </div>
                )}
            </div>
        </div>
    );
};

export default Navbar
