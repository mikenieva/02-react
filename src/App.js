// ./src/App.js

// 1. IMPORTACIONES
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Exercise from './components/Exercise';
import Layout from './Layout';



// 2. FUNCIÓN
function App() {
  return (
    // Establecemos configuración de ruteo
    <BrowserRouter>
    {/* Establecer la lista de rutas */}
      <Routes>
        {/* Establecer una ruta individual */}
        {/* El atributo path significa la construcción de la URL */}
        {/* El atributo element significa qué componente se va a leer */}

        <Route path="/" element={ <Layout /> }>

          {/* localhost:3000/ */}
          <Route path="/" element={ <Home /> } />
          {/* localhost:3000/ejercicio */}
          <Route path="/ejercicio" element={ <Exercise /> } />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

// 3. EXPORTACIÓN
export default App;
