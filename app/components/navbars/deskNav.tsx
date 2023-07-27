"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// This is the desktop navbar with most of the layout done //
export default function DeskNav() {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

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

  return (
    <>
      {isNavHidden && (
        <nav
          className="w-full flex fixed justify-between border-b-2 text-md px-3 py-3 top-0 left-0"
          style={{ backgroundColor: '#282a38', color: '#FAB222', animation: 'slideOut 0.3s ease-out forwards' }}
        >
          <div className='flex items-center'>
            <Link
              href='/'
              className='text-3xl'
              style={{ fontFamily: 'var(--font-abril)' }}
            >
              CoHive Software
            </Link>
          </div>
          <div className='flex items-center'>
            <Image src='/Cohive.png' alt='cohiveLogo' width={64} height={64} />
          </div>
          <div className='flex items-center'>
            <ul className='list-none flex'>
              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li className='mx-4'>
                <Link href='/services'>Services</Link>
              </li>
              <li>
                <Link href='/projects'>Projects</Link>
              </li>
              <li className='mx-4'>
                <Link href='/blog'>Blogs</Link>
              </li>
              <li>
                <Link href='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
      {!isNavHidden && (
        <nav
          className="w-full flex fixed justify-between border-b-2 text-md px-3 py-3 top-0 left-0"
          style={{ backgroundColor: '#282a38', color: '#FAB222', animation: 'slideIn 0.3s ease-out forwards' }}
        >
          <div className='flex items-center'>
            <Link
              href='/'
              className='text-3xl'
              style={{ fontFamily: 'var(--font-abril)' }}
            >
              CoHive Software
            </Link>
          </div>
          <div className='flex items-center'>
            <Image src='/Cohive.png' alt='cohiveLogo' width={64} height={64} />
          </div>
          <div className='flex items-center'>
            <ul className='list-none flex'>
              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li className='mx-4'>
                <Link href='/services'>Services</Link>
              </li>
              <li>
                <Link href='/projects'>Projects</Link>
              </li>
              <li className='mx-4'>
                <Link href='/blog'>Blogs</Link>
              </li>
              <li>
                <Link href='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
