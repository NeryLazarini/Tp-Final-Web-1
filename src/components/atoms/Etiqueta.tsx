interface Props{
    htmlFor?: string;
    children: React.ReactNode;
}

export default function Etiqueta({htmlFor, children}: Props){
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
            {children}
        </label>
    );
}