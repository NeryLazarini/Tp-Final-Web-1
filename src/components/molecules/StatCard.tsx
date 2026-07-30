import { Link } from 'react-router-dom';
import './StatCard.css'; 

interface StatCardProps {
  titulo: string;
  cantidad: number;
  ruta: string;
  textoBoton: string;
}

const StatCard = ({ titulo, cantidad, ruta, textoBoton }: StatCardProps) => {
  return (
    <div className="stat-card">
      <h3 className="stat-card-title">{titulo}</h3>
      <p className="stat-card-number">{cantidad}</p>
      
      <Link to={ruta} className="stat-card-link">
        {textoBoton}
      </Link>
    </div>
  );
};

export default StatCard;