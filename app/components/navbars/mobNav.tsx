import Image from 'next/image';
import Link from 'next/link';

export default function MobNav() {
  return (
    <>
      <nav
        className='flex justify-between item-center p-4'
        style={{ backgroundColor: '#282a38' }}
      >
        <a href='/'>
          <Image src='/Cohive.png' alt='cohiveLogo' width={64} height={64} />
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
