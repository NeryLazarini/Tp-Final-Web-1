import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductos } from '../hooks/useProductos';
import Cargando from '../components/atoms/Cargando';
import Boton from '../components/atoms/Boton';

export default function ListaProductos() {
  const { productos, cargando, error } = useProductos();
  
  const [busqueda, setBusqueda] = useState('');

  if (cargando) return <Cargando />;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Productos</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <Link to="/productos/nuevo">
            <Boton>Agregar Producto</Boton>
          </Link>
        </div>
      </div>

      <div className="grid gap-4">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <Link
              key={producto.id}
              to={`/productos/${producto.id}`}
              className="block bg-white p-4 rounded shadow hover:shadow-md transition"
            >
              <h3 className="font-bold">{producto.nombre}</h3>
              <p>Precio: ${producto.precio} | Stock: {producto.stock}</p>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No se encontraron productos con ese nombre.</p>
        )}
      </div>
    </div>
  );
}