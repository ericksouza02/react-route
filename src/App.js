import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/Home/Home';

function App() {
  return (
  <Router>
    <header>
      <ul>
        <li><Link to='/'>Inicío</Link></li>
        <li><Link to='/usuarios'>Usuários Cadastrados</Link></li>
        <li><Link to='/adicionar'>Adicionar Usuário</Link></li>
      </ul>
    </header>

    
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/usuarios' element={<Usuarios/>}></Route>
          <Route path='/adicionar' element={<AdicionarUsuario/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
