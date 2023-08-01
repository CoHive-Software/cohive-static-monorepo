import Link from 'next/link';
import Image from 'next/image';
import Contact from '../contact/contact'

export default function Footer() {
  return (
    <footer
      className='flex flex-column justify-center w-full'
      style={{
        backgroundColor: '#282a38',
        color: '#FFFFFF',
      }}
    >
      <div className='w-7/12 flex flex-col justify-center border-t mx-auto'>
        <div className='w-full flex flex-col md:flex-row justify-center md:justify-between flex-wrap text-md py-3 mb-3'>
          <div className='md:w-auto md:order-1'>
            <div className='flex items-center justify-center md:justify-start'>
              <Link href='/' className='flex items-center'>
                <Image
                  className='mr-2'
                  src='/whiteLogo.svg'
                  alt='cohiveLogo'
                  width={64}
                  height={64}
                />
                <Image
                  className='ml-2'
                  src='/CoHiveWhiteText.svg'
                  alt='CoHiveName'
                  width={150}
                  height={28}
                />
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap justify-center md:justify-start md:items-center md:order-2'>
            <Link className='mx-4 my-2' href='/projects'>
              projects
            </Link>
            <Link className='mx-4 my-2' href='/blog'>
              blog
            </Link>
            <Link className='mx-4 my-2' href='/contact'>
              contact
            </Link>
          </div>
        </div>
        <Contact />
        <div className='w-full flex justify-between text-xl px-3 py-3'>
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
      </div>
    </footer>
  );
}
