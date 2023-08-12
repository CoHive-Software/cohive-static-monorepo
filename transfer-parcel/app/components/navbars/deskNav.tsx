import Image from 'next/image';
import Link from 'next/link';

export default function DeskNav({ isNavHidden }) {
  const animationClassName = isNavHidden
    ? 'slideOut 0.3s ease-out forwards'
    : 'slideIn 0.3s ease-out forwards';

  return (
    <div className='flex justify-center bg-black text-pearl'>
      <nav
        className='w-full flex flex-col items-center fixed top-0 bg-black'
        style={{
          animation: `${animationClassName}`
        }}
      >
        <div className='flex flex-col items-center w-10/12  2xl:justify-around 2xl:w-full text-md'>
          <div className='flex flex-row justify-around w-full px-6 py-6'>
            <div className='flex items-center'>
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
            <div className='flex items-center'>
              <ul className='list-none flex'>
                <li>
                  <Link href='/projects'>projects</Link>
                </li>
                <li className='mx-12'>
                  <Link href='#contact'>contact</Link>
                </li>
                <li>
                  <Link href='/blog'>blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-b w-2/3 xl:w-7/12 2xl:w-1/2'>
          </div>
        </div>
      </nav>
    </div>
  );
}
