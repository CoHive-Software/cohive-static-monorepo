import Image from 'next/image';
import Link from 'next/link';

export default function DeskNav({ isNavHidden }) {
  const animationClassName = isNavHidden ? 'slideOut 0.3s ease-out forwards' : 'slideIn 0.3s ease-out forwards';

  return (
    <nav
      className="w-full flex fixed justify-between border-b-2 text-md px-3 py-3 top-0 left-0"
      style={{ backgroundColor: '#282a38', color: '#FAB222', animation: `${animationClassName}` }}
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
