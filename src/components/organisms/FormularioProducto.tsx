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

export default function FormularioProducto({
  datosIniciales,
  onSubmit,
  onCancel,
  textoBoton,
  estaGuardando,
  onDelete,
}: Props) {
  const [formData, setFormData] = useState<DatosProducto>(datosIniciales);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'precio' || name === 'stock' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || formData.nombre.trim() === '') {
      alert('El nombre es obligatorio');
      return;
    }
    if (formData.precio < 0 || formData.stock < 0) {
      alert('El precio y el stock deben ser números positivos');
      return;
    }
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
      
      <CampoFormulario
        id="nombre"
        label="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <CampoFormulario
        id="precio"
        label="Precio"
        name="precio"
        type="number"
        value={formData.precio}
        onChange={handleChange}
        required
      />

      <CampoFormulario
        id="stock"
        label="Stock"
        name="stock"
        type="number"
        value={formData.stock}
        onChange={handleChange}
        required
      />

      <CampoFormulario
        id="categoria"
        label="Categoría"
        name="categoria"
        value={formData.categoria}
        onChange={handleChange}
        required
      />

      <CampoFormulario
        id="imagen"
        label="Imagen (URL)"
        name="imagen"
        value={formData.imagen}
        onChange={handleChange}
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
        <Boton type="button" onClick={onCancel} variante="secundario" disabled={estaGuardando}>
          Cancelar
        </Boton>

        <Boton type="submit" variante="primario" disabled={estaGuardando}>
          {estaGuardando ? 'Guardando...' : textoBoton}
        </Boton>

        {onDelete && (
          <Boton 
            type="button" 
            onClick={onDelete} 
            variante="peligro"
            className="ml-auto"
            disabled={estaGuardando}
          >
            Eliminar Producto
          </Boton>
        )}
      </div>
    </form>
  );
}