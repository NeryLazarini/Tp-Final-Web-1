import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {apiProductos} from '../api/productos';
import type {Producto, DatosProducto} from '../types/producto';

//Hook para gestionar un producto

export function useProducto(id: string | undefined){
    const navigate = useNavigate();
    const[producto, setProducto] = useState<Producto | null>(null);
    const[cargando, setCargando] = useState(true);
    const[error, setError] = useState<string | null>(null);
    const[guardando, setGuardando] = useState(false);

    const cargarProducto = async () => {
        if(!id) return;
        try{
            setCargando(true);
            const datos = await apiProductos.obtenerUno(id);
            setProducto(datos);
            setError(null);
        } catch(error){
            setError(error instanceof Error ? error.message : 'Error al cargar el producto');
        } finally {
            setCargando(false);
        }
    };

    // useEffect con dependencia de id
    useEffect(() => {
        cargarProducto();
    }, [id]);

    //Actualiza producto
    const actualizarProducto = async (datos: DatosProducto) => {
        if(!producto) return;
        try{
            setGuardando(true);
            const actualizado = await apiProductos.actualizar(producto.id, datos);
            setProducto(actualizado);
            return actualizado
        } catch(error){
            throw new Error(error instanceof Error ? error.message : 'Error al actualizar');
        } finally {
            setGuardando(false);
        }
    };
    
    //Eliminar productos
    const eliminarProducto = async () => {
        if(!producto) return;
        try{
            setGuardando(true);
            await apiProductos.eliminar(producto.id);
            navigate('/productos'); //Redirige el listado 
        } catch (error){
            throw new Error(error instanceof Error ? error.message : 'Error al eliminar');
        }finally {
            setGuardando(false);
        }
    };

    return{
        producto,
        cargando,
        error,
        guardando,
        actualizarProducto,
        eliminarProducto,
        recargar: cargarProducto,
    };

}
