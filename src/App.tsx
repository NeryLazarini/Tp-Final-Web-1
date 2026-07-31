import{useRoutes} from 'react-router-dom';
import{rutas} from '../src/routes/inxex';
import{Suspense} from 'react';
import Cargando from './components/atoms/Cargando';

function App(){
  const elemento = useRoutes(rutas);
  return <Suspense fallback={
    <Cargando />}>{elemento}
  </Suspense>;
}

export default App;
