import React from 'react';
import { getWindow } from 'ssr-window';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = getWindow();
  return { width, height };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    getWindow().addEventListener('resize', handleResize);
    return () => getWindow().removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}