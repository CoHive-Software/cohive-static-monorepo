import Image from 'next/image';
import Link from 'next/link';

// This is the desktop navbar with most of the layout done //
export default function DeskNav() {
  return (
    <nav
      className='flex flex-row justify-between border-b-2 text-md px-3 py-3 mb-3'
      style={{ backgroundColor: '#282a38', color: '#FAB222' }}
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
  );
}
