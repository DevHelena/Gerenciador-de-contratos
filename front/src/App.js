import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NovoContrato from './pages/NovoContrato/NovoContrato'
import Dashboard from './pages/Dashboard/Dashboard'
import Sobre from './pages/Sobre/Sobre'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={ <NovoContrato /> }  path="/" exact /> 
          <Route element={ <Dashboard />}  path="/dashboard" />
          <Route element={ <Sobre />}  path="/sobre" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
//caseSensitive
export default App
