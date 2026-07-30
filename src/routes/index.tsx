import{lazy, Suspense} from 'react';
import type { RouteObject } from 'react-router-dom';
import PlanillaPrincipal from '../components/templates/PlanillaPrincipal';
import Cargando from '../components/atoms/Cargando';

//Carga perezosa para mejorar rendimiento
const Inicio = lazy(() => import('../pages/Inicio'));
const ListaProductos = lazy(()=> import('../pages/ListaProductos'));
const VistaProducto = lazy(()=> import('../pages/VistaProducto'));
const NuevoProducto = lazy(() => import('../pages/NuevoProducto'));
const Perfil = lazy(() => import('../pages/Perfil'));
const NoEncontrado = lazy(()=> import('../pages/NoEncontrado'));

export const rutas: RouteObject[] = [
    {
        path: '/',
        element: <PlanillaPrincipal />,
        children: [
      { index: true, element: <Inicio /> },
      { path: 'productos', element: <ListaProductos /> },
      { path: 'productos/:id', element: <VistaProducto /> },
      { path: 'productos/nuevo', element: <NuevoProducto /> },
      { path: 'perfil', element: <Perfil /> },
      { path: '*', element: <NoEncontrado /> },
    ],
    },
];
