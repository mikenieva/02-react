// ./src/App.js

// 1. IMPORTACIONES
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Exercise from './components/Exercise';
import Layout from './components/Layout';
import CommentState from './context/Comment/CommentState';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin';
import UserState from './context/User/UserState';

// 2. FUNCIÓN
function App() {
  return (

    <>
      <UserState>
        <CommentState>
          <BrowserRouter>
            {/* Establecer la lista de rutas */}
            <Routes>
              {/* Establecer una ruta individual */}
              {/* El atributo path significa la construcción de la URL */}
              {/* El atributo element significa qué componente se va a leer */}

              <Route path="/" element={<Layout />}>

                {/* localhost:3000/ */}
                <Route path="/" element={<Home />} />
                {/* localhost:3000/ejercicio */}
                <Route path="/ejercicio" element={<Exercise />} />

                {/* localhost:3000/registro */}
                <Route path="/registro" element={<Signup />} />

                {/* localhost:3000/login */}
                <Route path="/login" element={<Signin />} />

              </Route>

            </Routes>
          </BrowserRouter>
        </CommentState>
      </UserState>
    </>
  )

}

// 3. EXPORTACIÓN
export default App;
