import{useRoutes} from 'react-router-dom';
import{rutas} from './routes';
import{Suspense} from 'react';
import Cargando from './components/atoms/Cargando';

function App(){
  const elemento = useRoutes(rutas);
  return <Suspense fallback={
    <Cargando />}>{elemento}
  </Suspense>;
}

export default App;
