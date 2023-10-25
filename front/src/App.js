import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NovoContrato from './components/NovoContrato/NovoContrato'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={ <NovoContrato /> }  path="/" exact />
          <Route element={ <Dashboard />}  path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
