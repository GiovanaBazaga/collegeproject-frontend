import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; // Assumindo que você tem um componente para a página principal
import Login from './pages/Login/Login'; // Componente da página de login
import Register from './pages/Register/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/register" Component={Register} />
        <Route path="/" Component={Login} />
      </Routes>
    </Router>
  );
};

export default App;
