import { Metadata } from 'next';
import { lato, abril } from '../public/fonts';
import { Abril_Fatface, Lato, Roboto_Mono, Inter } from 'next/font/google';

import 'app/globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CoHive Software',
  description:
    "Welcome to CoHive Software, a leading software engineering company empowering businesses with cutting-edge technology solutions. Our expert team of software engineers delivers exceptional software development, web development, mobile app development, and cloud services. With a focus on innovation and client satisfaction, we provide tailored solutions that optimize your digital presence, enhance efficiency, and drive growth. Contact us today for reliable, scalable, and secure software engineering services that unlock your business's true potential.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${lato.variable} ${abril.variable}`}>
      <body>
        {/* <h1>CoHive Software</h1> */}
        <nav
          className='flex flex-row justify-between border-b-2 text-xl px-3 py-3 mb-3'
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
            <img src='/Cohive.png' className='w-16 h-16' />
          </div>
          <div className='flex items-center'>
            <ul className='list-none flex'>
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
        <div>{children}</div>
      </body>
    </html>
  );
}
