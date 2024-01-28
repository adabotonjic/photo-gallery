import React, { useEffect, useState } from 'react';
import { ScrollToTopButton } from './StyledComponents';

const ScrollToTop = () => {

  const [scrollPos, setScrollPos] = useState(0);
  const isScrolled = scrollPos > 420;

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      setScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smooth scrolling
    });
  };

  return (
    <>
    <ScrollToTopButton
      onClick={scrollToTop}
      title="Torna all'inizio"
      className={isScrolled ? 'scrolled' : ''}
    >
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.053"
      height="27.597"
      viewBox="0 0 19.053 27.597"
    >
      <g transform="translate(-1245.704 -682.763)">
        <path
          d="M1255.231,712.6l-9.527-9.527,1.414-1.414,8.112,8.112,8.112-8.112,1.414,1.414Z"
          transform="translate(0 -2.237)"
          fill="var(--color-primary)"
        />
        <g transform="translate(1255 682.763)">
          <line
            x2={25}
            transform="translate(0) rotate(90)"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth={2}
          />
        </g>
      </g>
    </svg>
    </ScrollToTopButton>

  </>

  );
}

export default ScrollToTop;
