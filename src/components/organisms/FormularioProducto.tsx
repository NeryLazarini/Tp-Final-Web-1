import {useState} from 'react'; 
import type {ChangeEvent, FormEvent} from 'react';
import Boton from '../atoms/Boton';
import CampoFormulario from '../molecules/CampoFormulario';
import type { DatosProducto } from '../../types/producto';
import Etiqueta from '../atoms/Etiqueta';

interface Props{
    datosIniciales: DatosProducto;
    onSubmit: (datos: DatosProducto) => Promise<void>;
    onCancel: () => void;
    textoBoton: string;
    estaGuardando: boolean;
}

export default function FormularioProducto({
    datosIniciales,
    onSubmit,
    onCancel,
    textoBoton,
    estaGuardando,
}: Props) {

    //Formulario local
    const[formData, setFormData] = useState<DatosProducto>(datosIniciales);

    //Manejador de cambios
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'precio' || name ==='stock' ? Number(value) : value,
        }));
    };
    
    //Envio formulario
    const handleSubmit = async (e: FormEvent)=>{
        e.preventDefault();
        //validacion
        if(!formData.nombre || formData.nombre.trim() === ''){
            alert("El nombre es obligatorio");
            return;
        }
        if(formData.precio < 0 || formData.stock < 0){
            alert('El precio y el stock deben ser numeros positivos');
            return;
        }
        await onSubmit(formData);
    };
    return(
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
            <CampoFormulario
            id="nombre"
            label="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required 
            />
            
            <CampoFormulario
            id="nombre"
            label="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required 
            />

            <CampoFormulario
            id="nombre"
            label="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required 
            />

            <div className="mb-4">
        <Etiqueta htmlFor="descripcion">Descripción</Etiqueta>
        <textarea
          id="descripcion"
          name="descripcion"
          value={formData.descripcion || ''}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 w-full"
          rows={3}
        />
      </div>

            <div className="flex gap-2">
                <Boton type="button" onClick={onCancel} variante="secundario" disabled={estaGuardando}>Cancelar</Boton>
                <Boton type="submit" variante="primario" disabled={estaGuardando}>
                {estaGuardando ? 'Guardando...' : textoBoton}
                </Boton>
            </div>

        </form>
    );
}
