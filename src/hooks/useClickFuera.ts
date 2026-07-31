import { useEffect, RefObject } from 'react';

export function useClickFuera(
  ref: RefObject<HTMLElement>,
  alClickFuera: () => void
): void {
  useEffect(() => {
    function manejarClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        alClickFuera();
      }
    }

    document.addEventListener('mousedown', manejarClick);

    return () => {
      document.removeEventListener('mousedown', manejarClick);
    };
  }, [ref, alClickFuera]);
}