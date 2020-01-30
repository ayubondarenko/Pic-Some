import { useState, useEffect, useRef } from 'react';

function useHover() {
  // Challenge:
  // Keep track of hover state in this hook
  const [isHover, setIsHover] = useState(false);
  const ref = useRef(null);

  function onHover() {
    setIsHover(true);
  }

  function offHover() {
    setIsHover(false);
  }
  useEffect(() => {
    ref.current.addEventListener('mouseenter', onHover);
    ref.current.addEventListener('mouseleave', offHover);
    return () => {
      ref.current.removeListener('mouseenter', onHover);
      ref.current.removEventListener('mouseleave', offHover);
    };
  }, []);

  return [isHover, ref];
}

export default useHover;
