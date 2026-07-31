import { useLocation } from 'react-router-dom';

export function useEsRutaActiva(ruta: string, exacta: boolean = false): boolean {
  const { pathname } = useLocation();

  if (exacta) {
    return pathname === ruta;
  }

  // la ruta raíz "/" solo debe estar activa en coincidencia exacta
  // sino "/" quedaria marcada como activa en todas las rutas
  if (ruta === '/') {
    return pathname === '/';
  }

  return pathname === ruta || pathname.startsWith(`${ruta}/`);
}