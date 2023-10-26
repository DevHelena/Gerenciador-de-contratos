import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NovoContrato from './components/NovoContrato/NovoContrato'
import Dashboard from './components/Dashboard/Dashboard'
import Sobre from './components/Sobre/Sobre'

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
