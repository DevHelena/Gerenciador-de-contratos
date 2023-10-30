import React, { useState } from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import './novoContrato.css'


const NovoContrato = () => {
  // States
  const [empresaContratante, setEmpresaContratante] = useState('')
  const [cnpjContratante, setCnpjContratante] = useState('')
  const [ruaContratante, setRuaContratante] = useState('')
  const [numeroContratante, setNumeroContratante] = useState('')
  const [estadoContratante, setEstadoContratante] = useState('')
  const [cidadeContratante, setCidadeContratante] = useState('')
  const [empresaContratado, setEmpresaContratado] = useState('')
  const [cnpjContratado, setCnpjContratado] = useState('')
  const [ruaContratado, setRuaContratado] = useState('')
  const [numeroContratado, setNumeroContratado] = useState('')
  const [estadoContratado, setEstadoContratado] = useState('')
  const [cidadeContratado, setCidadeContratado] = useState('')
  const [tipoContrato, setTipoContrato] = useState('')
  const [carencia, setCarencia] = useState('')
  const [valor, setValor] = useState('')
  const [parcelas, setParcelas] = useState('')
  const [inicioVigencia, setInicioVigencia] = useState('')
  const [finalVigencia, setFinalVigencia] = useState('')
  const [key, setKey] = useState('')
  
  const [isContractSave, setIsContractSave] = useState(false)

  

  const dados = [empresaContratante,cnpjContratante,ruaContratante,numeroContratante,estadoContratante,cidadeContratante,empresaContratado,cnpjContratado,ruaContratado,numeroContratado,estadoContratado,cidadeContratado,tipoContrato,carencia,valor,parcelas,inicioVigencia,finalVigencia] 
  const dadosPreenchidos = dados.every(item => item !== '')

  const tiposContratoList = ['Empréstimos', 'Arrendamento', 'Seguro', 'Locação de Serviços', 'Equipamentos']

  const formData = {
    contratante: {
      empresa: empresaContratante,
      cnpj: cnpjContratante,
      rua: ruaContratante,
      numero: numeroContratante,
      estado: estadoContratante,
      cidade: cidadeContratante,
    },
    contratado: {
      empresa: empresaContratado,
      cnpj: cnpjContratado,
      rua: ruaContratado,
      numero: numeroContratado,
      estado: estadoContratado,
      cidade: cidadeContratado,
    },
    tipoContrato,
    carencia,
    valor,
    parcelas,
    inicioVigencia,
    finalVigencia,
    key,
  }

  //functions
  function createContractKey() {
    const contractKey = uuidv4()
    setKey(contractKey)
  }

  function handleSaveForm() {
    const endpoint = 'http://localhost:5000/api/salvar-formulario'
    createContractKey()
    
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setIsContractSave(true)
        } else {
          console.error('Falha ao enviar dados.')
        }
      })
      .catch((error) => {
        console.error('Erro ao enviar dados:', error)
      })
  }

  return (
    <>
      <Header thisPage={'novocontrato'}/>
      
      <div className='body-component'>
      <div className='container'>
        <h1>Novo contrato</h1>
        <form className='form'>

          <>
          <h2>Contratante</h2>
          <div className='inputs'>
            <TextField helperText=" " label='Empresa' className='empresa' variant="outlined" size='small' style={{ width: '350px' }} 
            value={empresaContratante} 
            onChange={(e) => setEmpresaContratante(e.target.value)}/>
          </div>
          <div className='inputs'>
            <TextField helperText=" " label='CNPJ' type='number' variant="outlined" size='small' style={{ width: '300px' }}
            value={cnpjContratante} 
            onChange={(e) => setCnpjContratante(e.target.value)}/>
          </div>
          <div className='inputs'>
            <TextField helperText=" " label='Rua'  variant="outlined" size='small' style={{ width: '450px' }}
            value={ruaContratante} 
            onChange={(e) => setRuaContratante(e.target.value)}/>
          </div>
          <div className='inputs'>
            <TextField helperText=" " label='Número' type='number' variant="outlined" size='small' style={{ width: '200px' }}
            value={numeroContratante} 
            onChange={(e) => setNumeroContratante(e.target.value)}/>
          </div>
          <div className='inputs'>
            <TextField helperText=" " label='Estado'  variant="outlined" size='small' style={{ width: '325px' }}
            value={estadoContratante} 
            onChange={(e) => setEstadoContratante(e.target.value)}/>
          </div>
          <div className='inputs'>
            <TextField helperText=" " label='Cidade'  variant="outlined" size='small' style={{ width: '325px' }}
            value={cidadeContratante} 
            onChange={(e) => setCidadeContratante(e.target.value)}/>
          </div>
          </>
          <>
          <h2 className='form-subtitulo'>Contratado</h2>
          <div className='inputs'>
            <TextField helperText=" " label='Empresa' className='empresa' variant="outlined" size='small' style={{ width: '350px' }} 
            value={empresaContratado} 
            onChange={(e) => setEmpresaContratado(e.target.value)}/>
          </div>
          <div className='inputs'>
            <TextField helperText=" " label='CNPJ' type='number' variant="outlined" size='small' style={{ width: '300px' }}
            value={cnpjContratado} 
            onChange={(e) => setCnpjContratado(e.target.value)}/>
          </div>
          <div className='inputs'>
            <TextField helperText=" " label='Rua'  variant="outlined" size='small' style={{ width: '450px' }}
            value={ruaContratado} 
            onChange={(e) => setRuaContratado(e.target.value)}/>
          </div>
          <div className='inputs'>
            <TextField helperText=" " label='Número' type='number' variant="outlined" size='small' style={{ width: '200px' }}
            value={numeroContratado} 
            onChange={(e) => setNumeroContratado(e.target.value)}/>
          </div>
          <div className='inputs'>
            <TextField helperText=" " label='Estado'  variant="outlined" size='small' style={{ width: '325px' }}
            value={estadoContratado} 
            onChange={(e) => setEstadoContratado(e.target.value)}/>
          </div>
          <div className='inputs'>
            <TextField helperText=" " label='Cidade'  variant="outlined" size='small' style={{ width: '325px' }}
            value={cidadeContratado} 
            onChange={(e) => setCidadeContratado(e.target.value)}/>
          </div>
          </>

          <h2 className='form-subtitulo'>Informações Gerais</h2>
          <div className='inputs'>
            <FormControl fullWidth sx={{ minWidth: '200px' }}>
              <InputLabel id="demo-simple-select-label">Tipo do Contrato</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tipoContrato}
                label="Tipo do Contrato"
                onChange={(e) => setTipoContrato(e.target.value)}
                size='small'
              >
              {tiposContratoList.map((tipo, index) => (
                <MenuItem key={index} value={tipo}> {tipo} </MenuItem>
              ))}
              </Select>
            </FormControl>
          </div>

          <div className='inputs'>
            <TextField helperText=" " label='Carência' variant="outlined" size='small' value={carencia} onChange={(e) => setCarencia(e.target.value)}/>
          </div>          
          <div className='inputs'>
            <TextField helperText=" " label='Valor' variant="outlined" size='small' type='number' value={valor} onChange={(e) => setValor(e.target.value)}/>
          </div>          
          <div className='inputs'>
            <TextField helperText=" " label='Parcelas' variant="outlined" size='small' type='number' value={parcelas} onChange={(e) => setParcelas(e.target.value)}/>
          </div>
          <div className='inputs'>
            <TextField helperText="Data do início da vigência" label='' variant="outlined" size='small' type='date' style={{width: '210px'}} value={inicioVigencia} onChange={(e) => setInicioVigencia(e.target.value)}/>
          </div>
          <div className='inputs'>
            <TextField helperText="Data do término da vigência" label='' variant="outlined" size='small' type='date' style={{width: '210px'}} value={finalVigencia} onChange={(e) => setFinalVigencia(e.target.value)}/>
          </div>

          <div className='button-group'>
            {
              dadosPreenchidos ? (<Button variant="contained" onClick={handleSaveForm}><Link to='/dashboard'>Salvar</Link></Button>)
              : <Button variant="contained" disabled><Link to='/dashboard'>Salvar</Link></Button>
            }
            
          </div>
        </form>
      </div>
      </div>    
      <Footer />
    </>
  )
}

export default NovoContrato