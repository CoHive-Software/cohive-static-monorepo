'use client'
import { useLayoutEffect, useEffect, useState } from 'react';
import DeskNav from './deskNav';
import MobNav from './mobNav';

// This is the desktop navbar with most of the layout done //
export default function Navigation() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 1024
  );


  useLayoutEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }

    if (typeof window !== 'undefined') {
      handleResize();
    }

    window.addEventListener('resize', handleResize);
    return () => {
      // remove event listener when the component is unmounted to not cause any memory leaks
      // otherwise the event listener will continue to be active
      window.removeEventListener('resize', handleResize);
    };
    // add `isMobile` state variable as a dependency so that
    // it is called every time the window is resized
  }, [isMobile]);

  useLayoutEffect(() => {
    setIsLoading(false);
  }, [])

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

  if (isLoading) {
    return null;
  }

  return (
    <>
      {!isMobile ? <DeskNav isNavHidden={isNavHidden} /> : <MobNav isNavHidden={isNavHidden} />}
    </>
  );
}