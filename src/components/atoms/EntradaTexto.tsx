import type { ChangeEvent } from 'react';

interface Props {
    id?: string;
    name: string;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: 'text' | 'number';
    required?: boolean;
    
}

export default function EntradaTexto({
    id,
    name,
    value,
    onChange,
    placeholder,
    type = 'text',
    required = false
}: Props) {
    return (
        <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border border-gray-300 rounded px-3 py-2 w-full"
        />
    );
}
