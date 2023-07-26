"use client"
import { useEffect, useState } from 'react';
import DeskNav from './deskNav';
import MobNav from './mobNav';

// This is the desktop navbar with most of the layout done //
export default function Navigation() {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // const isMobile = ({ maxWidth = 639 } = {}) => {
  //   return (
  //     window.matchMedia("(pointer: coarse)").matches &&
  //     navigator.maxTouchPoints > 1 &&
  //     window.matchMedia(`(max-width: ${maxWidth}px)`).matches &&
  //     "ontouchstart" in document.documentElement
  //   )
  // }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleResize = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //     console.log(isMobile)
  //   };

  //   window.addEventListener('resize', handleResize);

  //   handleResize();

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // })

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > prevScrollY && !isNavHidden) {
        setIsNavHidden(true);
      } else if (scrollY < prevScrollY && isNavHidden) {
        setIsNavHidden(false);
      }

      setPrevScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavHidden, prevScrollY]);

  return (
    <>
      {!isMobile ? <DeskNav isNavHidden={isNavHidden} /> : <MobNav isNavHidden={isNavHidden} />}
    </>
  );
}