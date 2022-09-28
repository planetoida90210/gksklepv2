import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// external imports
import images from '../assets/app'


const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between p-4 bg-[#E7ECEE] dark:bg-[#0F0F12]">
        <div className="flex items-center justify-center md:w-1/5">
            <Link href="/">
            <div className="relative h-[90px] w-[90px] cursor-pointer opacity-80 transition hover:opacity-100">
                <Image src={images.logo} layout="fill" objectFit="contain" alt="logo"/>
            </div>
            </Link>
            <div>
                <Link className="headerLink" href="/">Produkty</Link>
                <Link className="headerLink" href="/art">Art</Link>
                <Link className="headerLink" href="/sale">Promocje</Link>
                <Link className="headerLink" href="/free-graffiti">Free Graffiti</Link>
            </div>
        </div>
    </header>
  )
}

export default Header