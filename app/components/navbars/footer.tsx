import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className='flex flex-row justify-between border-t-2 text-xl px-3 py-3 mt-3'
      style={{ backgroundColor: '#282a38', color: '#FAB222' }}
    >
      <div>Hello Footer</div>
    </footer>
  );
}
