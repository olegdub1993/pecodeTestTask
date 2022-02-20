import { useState } from 'react';

 export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle(isShowing) {
    setIsShowing(isShowing);
  }

  return [
    isShowing,
    toggle,
  ]
};

