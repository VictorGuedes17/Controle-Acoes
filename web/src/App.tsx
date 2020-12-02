import React from 'react';
import Login from './View/Login'
import Controle from './View/Controle'
import AppRouter from './Router';
import { AuthProvider } from './Context/auth';


function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default App;
