import { useCrearProducto } from '../hooks/useCrearProducto';
import FormularioProducto from '../components/organisms/FormularioProducto';

export default function NuevoProducto() {
  const { crearProducto, guardando } = useCrearProducto();

  // Datos iniciales vacíos
  const datosIniciales = {
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    imagen: '',
    categoria: '',
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Nuevo Producto</h2>
      <FormularioProducto
        datosIniciales={datosIniciales}
        onSubmit={crearProducto}
        onCancel={() => window.history.back()}
        textoBoton="Crear Producto"
        estaGuardando={guardando}
      />
    </div>
  );
}