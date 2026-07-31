import type {ChangeEvent} from 'react';
import Etiqueta from '../atoms/Etiqueta';
import EntradaTexto from '../atoms/EntradaTexto';

interface Props{
    id: string;
    label: string;
    name: string;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>)=>void;
    type?: 'text' | 'number';
    required?: boolean;
    placeholder?: string;
    error?: string;
}

export default function CampoFormulario({
    id,
    label,
    name,
    value,
    onChange,
    type = 'text',
    required = false,
    placeholder,
    error,
}: Props) {
    return (
        <div className="mb-4">
            <Etiqueta htmlFor={id}>{label}</Etiqueta>
            <EntradaTexto
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            required={required}
            placeholder={placeholder} 
            />
            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        </div>
    );
}