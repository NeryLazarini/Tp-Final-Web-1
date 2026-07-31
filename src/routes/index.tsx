import{lazy, Suspense} from 'react';
import type {RouteObject} from 'react-router-dom';
import PlanillaPrincipal from '../components/templates/PlanillaPrincipal';
import Cargando from '../components/atoms/Cargando';
import EditarProducto from '../pages/EditarProducto';

//Carga perezosa para mejorar rendimiento
const ListaProductos = lazy(()=> import('../pages/ListaProductos'));
const VistaProducto = lazy(()=> import('../pages/VistaProducto'));
const NuevoProducto = lazy(() => import('../pages/NuevoProducto'));

export const rutas: RouteObject[] = [
    {
        path: '/',
        element: <PlanillaPrincipal />,
        children: [
      { path: 'products', element: <ListaProductos /> },
      { path: 'products/:id', element: <VistaProducto /> },
      { path: 'products/:id/editar', element: <EditarProducto/>},
      { path: 'products/nuevo', element: <NuevoProducto /> }
    ],
    },
];
