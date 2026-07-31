import {useParams} from 'react-router-dom';
import {useProducto} from '../hooks/useProducto';
import FormularioProducto from '../components/organisms/FormularioProducto';
import Cargando from '../components/atoms/Cargando';

export default function EditarProducto(){
    const {id} = useParams <{id: string}>();
    const { producto, cargando, actualizarProducto, eliminarProducto, guardando } = useProducto(id);

    if(cargando) return <Cargando/>;
    if(!producto) return <div>Producto no encontrado</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Editar Producto</h2>
            <FormularioProducto
            datosIniciales={producto}
            onSubmit={actualizarProducto}
            onCancel={() => window.history.back()}
            textoBoton='Actualizar Producto'
            estaGuardando={guardando}
            onDelete={eliminarProducto}
            />
        </div>
    );
}