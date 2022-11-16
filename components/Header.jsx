import React,{ useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

// external imports
import images from '../assets/app'

const MenuItems = ({ isMobile, active, setActive, setIsOpen }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0: return '/';
      case 1: return `${'/art' || '/art/#id'}`;
      case 2: return `${'/sale' || '/sale/#id'}`;
      case 3: return `${'/free-graffiti' || '/free-graffiti/#id'}`;
    }
  }

  return (
    <ul className="flex gap-10 text-xl justify-center items-center list-none flex-row ">
      {['Produkty', 'Art', 'Promocje', 'Free Graffiti'].map((item,i) =>(
        <li
         key={i}
         onClick={() => {
          setActive(item);
          if (isMobile) setIsOpen(false);
         }}
         className={`${active === item ? 'underline decoration-[#F7AB0A]/50 underline-offset-8' : 'text-gray-600/80 dark:text-white/75' }`}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))

      }
    </ul>
  )

}

const checkActive = (active, setActive, router) => {
    switch (router.pathname) {
        case `${'/' && '/[id]'}`:
            if (active !== 'Produkty') setActive('Produkty');
            break;
        case `${'/art' || '/art/#id'}`:
            if (active !== 'Art') setActive('Art');
            break;
        case `${'/sale' || '/sale/#id'}`:
            if (active !== 'Promocje') setActive('Promocje');
            break;
        case `${'/free-graffiti' || '/free-graffiti/#id'}`:
            if (active !== 'Free Graffiti') setActive('Free Graffiti');
            break;
    }
}


const Header = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [ active, setActive ] = useState('Produkty');

  useEffect(() => {
    checkActive(active, setActive, router)
  }, [router.pathname]);

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between p-4 pb-0 dark:bg-[#0f0f12] bg-[#E7ECEE]">
    <div className="flex items-center justify-center md:w-1/5">
      <Link href="/">
      <div 
       className="relative h-[90px] w-[90px] cursor-pointer opacity-80 transition hover:opacity-100"
       onClick={() => {
        setActive('Produkty')
       }}
       >
        <Image src={images.logo} className={theme === 'light' ? 'filter invert' : ''} layout="fill" objectFit="contain" alt="logo"/>
      </div>
    </Link>
    </div>
    <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
      <MenuItems active={active} setActive={setActive}/>
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