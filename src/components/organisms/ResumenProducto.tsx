import { Link } from 'react-router-dom';
import './ResumenProducto.css';

interface ResumenProductoProps {
  nombre: string;
  stock: number;
  precio: number;
  nombreTienda: string;
  rutaTienda: string;
}

const ResumenProducto = ({ nombre, stock, precio, nombreTienda, rutaTienda }: ResumenProductoProps) => {
  return (
    <div className="resumen-contenedor">
      <div className="resumen-info">
        <h2>{nombre}</h2>
        <p className="resumen-precio">${precio.toLocaleString('es-AR')}</p>
        <p className="resumen-detalles">
          Stock disponible: <span>{stock} unidades</span> | Vendido por: <span>{nombreTienda}</span>
        </p>
      </div>

      <div>
        <Link to={rutaTienda} className="btn-tienda">
          Ver perfil de la tienda
        </Link>
      </div>
    </div>
  );
};

export default ResumenProducto;