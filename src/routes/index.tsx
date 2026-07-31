import{lazy, Suspense} from 'react';
import type {RouteObject} from 'react-router-dom';
import PlanillaPrincipal from '../components/templates/PlanillaPrincipal';
import Cargando from '../components/atoms/Cargando';
import EditarProducto from '../pages/EditarProducto';

const ListaProductos = lazy(()=> import('../pages/ListaProductos'));
const VistaProducto = lazy(()=> import('../pages/VistaProducto'));
const NuevoProducto = lazy(() => import('../pages/NuevoProducto'));
const Perfil = lazy(() => import('../pages/Perfil'));

export const rutas: RouteObject[] = [
    {
        path: '/',
        element: <PlanillaPrincipal />,
        children: [
      { path: 'productos', element: <ListaProductos /> },
      { path: 'productos/:id', element: <VistaProducto /> },
      { path: 'productos/:id/editar', element: <EditarProducto/>},
      { path: 'productos/nuevo', element: <NuevoProducto /> },
      { path: 'perfil', element: <Perfil /> },
    ],
    },
];
