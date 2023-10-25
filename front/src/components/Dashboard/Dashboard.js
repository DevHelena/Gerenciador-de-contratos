import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [formList, setFormList] = useState([])

  useEffect(() => {
    // Realiza a requisição GET para buscar a lista de formulários
    fetch('/api/formularios')
      .then((response) => response.json())
      .then((data) => {
        setFormList(data)
      })
      .catch((error) => {
        console.error('Erro ao buscar a lista de formulários:', error)
      })
  }, [])

  return (
    <div>
      <h1>Lista de Formulários</h1>
      <ul>
        {formList.map((formData, index) => (
          <li key={index}>{JSON.stringify(formData)}</li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard