import { useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function useMobileMenu() {
  useLayoutEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    }

    const navLink = document.querySelectorAll('.nav-link');

    navLink.forEach((n) => n.addEventListener('click', closeMenu));

    function closeMenu() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  }, []);
}

export default function MobNav({ isNavHidden }) {
  // This is what give the Hamburger menu its functionality //
  useMobileMenu();
  /////////////////////////////////////////////////////////////

  const animationClassName = isNavHidden
    ? 'slideOut 0.3s ease-out forwards'
    : 'slideIn 0.3s ease-out forwards';

  return (
    <>
      <nav
        className='w-full flex fixed justify-between items-center border-b-2 text-md px-6 py-5 top-0 left-0'
        style={{
          backgroundColor: '#282a38',
          animation: `${animationClassName}`,
        }}
      >
        <a href='/' className='z-50'>
          <Image src='/whiteLogo.svg' alt='cohiveLogo' width={64} height={64} />
        </a>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link href='/about'>About Us</Link>
          </li>
          <li className='nav-item'>
            <Link href='/services'>Services</Link>
          </li>
          <li className='nav-item'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='nav-item'>
            <Link href='/blog'>Blogs</Link>
          </li>
          <li className='nav-item'>
            <Link href='/contact'>Contact Us</Link>
          </li>
        </ul>
        <div className='hamburger'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    </>
  );
}
