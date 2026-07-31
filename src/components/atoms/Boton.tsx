interface Props {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children: React.ReactNode;
    variante?: 'primario' | 'secundario' | 'peligro';
    className?: string;
}

export default function Boton({ 
  onClick, 
  type = 'button', 
  disabled = false, 
  children,
  variante = 'primario',
  className = ""
}: Props) {
  const clases = {
    primario: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    secundario: 'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded',
    peligro: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${clases[variante]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

