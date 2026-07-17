import { useEffect, useState } from "react";
import {apiProductos} from '../api/productos';
import type { Producto } from '../types/producto';

//Hook para gestionar productos

export function useProductos(){
    const[productos, setProductos] = useState<Producto[]>([]);
    const[cargando, setCargando] = useState(true);
    const[error, setError] = useState<string | null>(null);
    
    const cargarProductos = async () =>{
        try{
            setCargando(true);
            const data = await apiProductos.obtenerTodos();
            setProductos(data);
            setError(null);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Error al cargar productos');
        } finally {
            setCargando(false);
        }
    };

    //UseEffect para cargar al montar el componente
    useEffect(()=> {
        cargarProductos();
    }, []); // dependencias vacias -> solo se ejecuta una vez


    //Devolvemos el estado y la funcion para recargar manualmente
    return {productos, cargando, error, recargar: cargarProductos};

}
