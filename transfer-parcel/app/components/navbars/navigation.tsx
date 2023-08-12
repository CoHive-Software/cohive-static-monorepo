'use client'
import { useLayoutEffect, useEffect, useState } from 'react';
import DeskNav from './deskNav';
import MobNav from './mobNav';

// This is the desktop navbar with most of the layout done //
export default function TestNav() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useLayoutEffect(() => {
    setIsLoading(false);
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > prevScrollY && !isNavHidden) {
        setIsNavHidden(true);
      } else if (scrollY < prevScrollY && isNavHidden) {
        setIsNavHidden(false);
      }

      setPrevScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavHidden, prevScrollY]);

  if (isLoading) {
    return null;
  }

  return (
    <div className='z-50'>
      <div className='hidden md:block'>
        <DeskNav isNavHidden={isNavHidden} />
      </div>
      <div className='md:hidden z-10'>
        <MobNav isNavHidden={isNavHidden} />
      </div>
    </div>
  )
}