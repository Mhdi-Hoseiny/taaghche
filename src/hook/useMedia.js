import { useEffect, useState } from 'react';

const SCREEN_LG = 'LG';
const SCREEN_SM = 'SM';

const getScreenSize = () => {
  return window.innerWidth >= 768 ? SCREEN_LG : SCREEN_SM;
};

const useScreen = () => {
  const [screen, setScreen] = useState(getScreenSize());

  useEffect(() => {
    const handlerResize = () => {
      setScreen(getScreenSize());
    };
    window.addEventListener('resize', handlerResize);
    return () => {
      window.addEventListener('resize', handlerResize);
    };
  }, []);

  return { screen: screen, sizes: { lg: SCREEN_LG, sm: SCREEN_SM } };
};

export default useScreen;
