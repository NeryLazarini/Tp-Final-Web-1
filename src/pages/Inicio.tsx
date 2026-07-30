import StatCard from '../components/molecules/StatCard';

const Inicio = () => {
  // Datos simulados (Mock data)
  const nombreUsuario = "Walter"; // Este nombre podría provenir de un contexto o estado global en una aplicación real
  
  const estadisticas = {
    totalProductos: 45,
    totalTiendas: 15
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* Componente de saludo dinámico */}
      <header style={{ marginBottom: '2rem' }}>
        <h1>¡Hola {nombreUsuario}!</h1>
        <p style={{ color: '#666' }}>Este es el resumen de tu sistema.</p>
      </header>

      {/* Contenedor de las tarjetas */}
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        flexWrap: 'wrap' 
      }}>
        <StatCard 
          titulo="Productos en Stock" 
          cantidad={estadisticas.totalProductos} 
          ruta="/productos" 
          textoBoton="Ir a Productos" 
        />
        
        <StatCard 
          titulo="Tiendas Activas" 
          cantidad={estadisticas.totalTiendas} 
          ruta="/tiendas" 
          textoBoton="Ir a Tiendas" 
        />
      </div>
    </div>
  );
};

export default Inicio;