import { useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// function useMobileMenu() {
//   useLayoutEffect(() => {
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('.nav-menu');

//     if (hamburger && navMenu) {
//       hamburger.addEventListener('click', mobileMenu);
//       const navLinks = document.querySelectorAll('.nav-item');
//       navLinks.forEach((n) => n.addEventListener('click', closeMenu));
//     }

//     function mobileMenu() {
//       if (hamburger) {
//         hamburger.classList.toggle('active');
//       }
//       if (navMenu) {
//         navMenu.classList.toggle('active');
//       }
//     }

//     function closeMenu() {
//       if (hamburger) {
//         hamburger.classList.remove('active');
//       }
//       if (navMenu) {
//         navMenu.classList.remove('active');
//       }
//     }
//   }, []);
// }

export default function MobNav({ isNavHidden }) {
  // This is what give the Hamburger menu its functionality //
  // useMobileMenu();
  /////////////////////////////////////////////////////////////

  const animationClassName = isNavHidden
    ? 'slideOut 0.3s ease-out forwards'
    : 'slideIn 0.3s ease-out forwards';

  return (
    <>
      <nav
        className='w-full flex fixed justify-between items-center text-md px-6 py-5 top-0 left-0'
        style={{
          backgroundColor: '#282a38',
          borderBottom: '2px solid #FFFFFF',
          animation: `${animationClassName}`,
        }}
      >
        <a href='/' className='z-50'>
          <Image
            className='z-50'
            src='/whiteLogo.svg'
            alt='cohiveLogo'
            width={64}
            height={64}
          />
        </a>
        <ul className='nav-menu'>
          {/* <li className='nav-item'>
            <Link href='/projects'>projects</Link>
          </li>
          <li className='nav-item'>
            <Link href='/blog'>blog</Link>
          </li> */}
          {/* <li className='nav-item'>
            <Link className='navLink' href='#contact'>contact</Link>
          </li> */}
        </ul>
        <ul className='list-none flex text-pearl '>
          <li>
            <Link href='#contact'>Contact Us</Link>
            </li>
        </ul>

        {/* <div className='hamburger'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div> */}
      </nav>
    </>
  );
}
