// ./src/App.js

// 1. IMPORTACIONES
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Exercise from './components/Exercise';

// 2. FUNCIÓN
function App() {
  return (
    // Establecemos configuración de ruteo
    <BrowserRouter>
    {/* Establecer la lista de rutas */}
      <Routes>
        {/* Establecer una ruta individual */}
        <Route path="/" element={ <Home /> } />
        <Route path="/ejercicio" element={ <Exercise /> } />
      </Routes>
    </BrowserRouter>
  );
}

// 3. EXPORTACIÓN
export default App;
