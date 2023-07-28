import { Metadata } from 'next';
import { lato, abril } from '../public/fonts';
import { Abril_Fatface, Lato, Roboto_Mono, Inter } from 'next/font/google';
import Navigation from './components/navbars/navigation';
import Footer from './components/navbars/footer';

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
        <Navigation />
        <main className='h-full my-8 mx-5'>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
