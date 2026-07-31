import {peticion} from'./cliente';
import type {Producto, DatosProducto}  from '../types/producto';

//Funciones de relacionadas a productos
export const apiProductos ={
    //Obtener todos los productos
    obtenerTodos: ()=> peticion<Producto[]>('/api/products'),

    //Por id
    obtenerUno: (id: string | number)=> peticion<Producto>(`/api/products/${id}`),

    //Crear
    crear: (datos: DatosProducto) =>
        peticion<Producto>('/api/products', {
            method: 'POST',
            body: JSON.stringify(datos),
        }),

    //Actualizar
    actualizar: (id: string | number, datos: DatosProducto)=>
        peticion<Producto>(`/api/products/${id}`,{
            method: 'PUT',
            body: JSON.stringify(datos),
        }),

    //Eleminar
    eliminar: (id: string | number)=> 
        peticion<void> (`api//products/${id}`,{
            method: 'DELETE',
        }),
};