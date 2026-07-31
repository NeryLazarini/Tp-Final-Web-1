import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {apiProductos} from '../api/productos';
import type { DatosProducto } from '../types/producto';

export function useCrearProducto() {
    const navigate = useNavigate();
    const [guardando, setGuardando] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const crearProducto = async (datos: DatosProducto) =>{
        try{
            setGuardando(true);
            setError(null);
            const nuevo = await apiProductos.crear(datos);
            navigate(`/productos/${nuevo.id}`); //Redirige al detalle del producto nuevo
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al crear Producto');
            throw err;
        } finally {
            setGuardando(false);
        }
    };
    return {crearProducto, guardando, error};
}
