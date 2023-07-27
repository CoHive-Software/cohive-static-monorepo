import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className='flex-row justify-center'
      style={{
        backgroundColor: '#282a38',
        color: '#FAB222',
        marginTop: 'auto',
      }}
    >
      <div className='w-full flex-column justify-center px-96'>
        <div className='w-full flex flex-row justify-between text-md px-3 py-3 mb-3'>
          <Image
            src='/wideLogo.png'
            alt='wideCohive'
            width={192}
            height={192}
          />
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
        </div>
        <div className='w-full flex justify-between text-xl px-3 py-3 border-t'>
          <div className='text-xs'>All Rights Reserved</div>
          <div className='flex items-center'>
            <ul className='list-none flex'>
              <li>
                <a href='https://www.linkedin.com/company/cohive-software/'>
                  <Image
                    src='/linkedIn.png'
                    alt='linkedIn'
                    width={32}
                    height={32}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
}
