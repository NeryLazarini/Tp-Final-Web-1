// src/components/organisms/FormularioProducto.tsx
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Boton from '../atoms/Boton';
import CampoFormulario from '../molecules/CampoFormulario';
import type { DatosProducto } from '../../types/producto';
import Etiqueta from '../atoms/Etiqueta';

interface Props {
  datosIniciales: DatosProducto;
  onSubmit: (datos: DatosProducto) => Promise<void>;
  onCancel: () => void;
  textoBoton: string;
  estaGuardando: boolean;
  onDelete?: () => Promise<void>; // Opcional para edición
}

interface Errores {
    nombre?: string;
    precio?: string;
    stock?: string;
}

export default function FormularioProducto({
  datosIniciales,
  onSubmit,
  onCancel,
  textoBoton,
  estaGuardando,
  onDelete,
}: Props) {
    const [formData, setFormData] = useState<DatosProducto>(datosIniciales);
    const [errores, setErrores] = useState<Errores>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'precio' || name ==='stock' ? Number(value) : value,
        }));
    };

    const validar = (): boolean => {
        const nuevosErrores: Errores = {};

        if(!formData.nombre || formData.nombre.trim() === ''){
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
        if(isNaN(formData.precio) || formData.precio < 0){
            nuevosErrores.precio = 'El precio debe ser un número positivo.';
        }
        if(isNaN(formData.stock) || formData.stock < 0){
            nuevosErrores.stock = 'El stock debe ser un número positivo.';
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };
    
    const handleSubmit = async (e: FormEvent)=>{
        e.preventDefault();
        if(!validar()) return;
        await onSubmit(formData);
    };

return(
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CampoFormulario
                id="nombre"
                label="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required 
                error={errores.nombre}
                />

                <CampoFormulario
                id="precio"
                label="Precio"
                name="precio"
                type="number"
                value={formData.precio}
                onChange={handleChange}
                required
                error={errores.precio}
                />

                <CampoFormulario
                id="stock"
                label="Stock"
                name="stock"
                type="number"
                value={formData.stock}
                onChange={handleChange}
                required
                error={errores.stock}
                />

                <div className="mb-4 md:col-span-2">
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
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <Boton type="button" onClick={onCancel} variante="secundario" disabled={estaGuardando}>Cancelar</Boton>
                <Boton type="submit" variante="primario" disabled={estaGuardando}>
                {estaGuardando ? 'Guardando...' : textoBoton}
                </Boton>
            </div>

        </form>
    );
}