const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const peticion = async <T>(
    endpoint: string,
    opciones?: RequestInit
): Promise<T> => {
  const url = `${BASE_URL}${endpoint}`;
  const respuesta = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(opciones?.headers || {}),
    },
    ...opciones,
  });

    if(!respuesta.ok){
        const errorData = await respuesta.json().catch(()=> ({}));
        throw new Error(errorData.mensaje || `Error ${respuesta.status}: ${respuesta.statusText}`);
    }

    //Si no hay contenido, devolver objeto vacio
    if(respuesta.status === 204){
        return {} as T;
    }
    return respuesta.json();
};