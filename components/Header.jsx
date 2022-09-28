import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes';

// external imports
import images from '../assets/app'


const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between p-4 dark:bg-[#0f0f12] bg-[#E7ECEE]">
    <div className="flex items-center justify-center md:w-1/5">
      <Link href="/">
      <div className="relative h-[90px] w-[90px] cursor-pointer opacity-80 transition hover:opacity-100">
        <Image src={images.logo} className={theme === 'light' ? 'filter invert' : ''} layout="fill" objectFit="contain" alt="logo"/>
      </div>
    </Link>
    </div>
    <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
      <a className="headerLink">Produkty</a>
      <a className="headerLink">Nowości</a>
      <a className="headerLink">Wkrótce</a>
      <a className="headerLink">Free Graffiti</a>
    </div>
    <div className="flex items-center justify-center gap-x-4 md:w-1/5">
      <div className="flex items-center ml-3">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label">
          <i className="fas fa-sun" />
          <i className="fas fa-moon" />
          <div className="w-3 h-3 absolute bg-white rounded-full ball" />
        </label>
      </div>
    </div>    
  </header>
  )
}

export default Header