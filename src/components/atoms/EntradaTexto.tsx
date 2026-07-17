import type { ChangeEvent } from 'react';

interface Props {
    name: string;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: 'text' | 'number';
    required?: boolean;
    
}

export default function EntradaTexto({
    name,
    value,
    onChange,
    placeholder,
    type = 'text',
    required = false
}: Props) {
    return (
        <input
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
