import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    let resizeTimer;
    const handler = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setWindowSize(getSize()), 250);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return windowSize;
};

export default useWindowSize;
