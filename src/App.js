import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Component/AppRouter';
import NavBar from './Component/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
