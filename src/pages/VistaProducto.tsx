import { useParams } from 'react-router-dom';
import { useProducto } from '../hooks/useProducto';
import FormularioProducto from '../components/organisms/FormularioProducto';
import Cargando from '../components/atoms/Cargando';
import Boton from '../components/atoms/Boton';

export default function VistaProducto() {
  const { id } = useParams<{ id: string }>();
  const { producto, cargando, error, guardando, actualizarProducto, eliminarProducto } =
    useProducto(id);

  if (cargando) return <Cargando />;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!producto) return <div>Producto no encontrado</div>;

  const manejarEliminar = async () => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      await eliminarProducto();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Productos &gt; #{producto.id}</h2>
        <Boton onClick={manejarEliminar} variante="peligro" disabled={guardando}>
          Eliminar
        </Boton>
      </div>

      <FormularioProducto
        datosIniciales={producto}
        onSubmit={actualizarProducto}
        onCancel={() => window.history.back()}
        textoBoton="Guardar"
        estaGuardando={guardando}
      />
    </div>
  );
}