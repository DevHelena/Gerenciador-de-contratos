import React, { useState } from 'react'
import './novoContrato.css'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

export const NovoContrato = () => {
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
  // COMO BUSCAR ESSES DADOS
  const [inicioVigencia, setInicioVigencia] = useState('')
  const [finalVigencia, setFinalVigencia] = useState('')

  const dados = [empresaContratante,cnpjContratante,ruaContratante,numeroContratante,estadoContratante,cidadeContratante,empresaContratado,cnpjContratado,ruaContratado,numeroContratado,estadoContratado,cidadeContratado,tipoContrato,carencia,valor,parcelas,inicioVigencia,finalVigencia] 
  const dadosPreenchidos = dados.every(item => item !== '')
  console.log(dados)

  const [isContractActive, setIsContractActive] = useState(false)

  //Dados forms
  const tiposContratoList = ['Empréstimos', 'Arrendamento', 'Seguro', 'Locação de Serviços', 'Equipamentos']
  const financeiro = ['Carência', 'Valor', 'Parcelas']

  const handleChange = (event) => {
    setTipoContrato(event.target.value);
  };

  return (
    <div className='novoContrato'>
    <div className='container'>
      <h1 className='form-titulo'>Novo contrato</h1>
      <form className='form'>

        <>
        <h2 className='form-subtitulo'>Contratante</h2>
        <div className='inputs'>
          <TextField helperText=" " label='Empresa' variant="outlined" size='small' style={{ width: '350px' }} 
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
          <TextField helperText=" " label='Empresa' variant="outlined" size='small' style={{ width: '350px' }} 
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
              onChange={handleChange}
              size='small'
              helperText=" "
            >
            {tiposContratoList.map((tipo, index) => (
              <MenuItem key={index} value={tipo}> {tipo} </MenuItem>
            ))}
            </Select>
          </FormControl>
        </div>

        {financeiro.map((info, index) => (
          <div className='inputs'>
            <TextField helperText=" " label={info} key={index} variant="outlined" size='small' type={info === 'Valor' ? 'number' : 'text'}/>
          </div>
        ))}

        <div className='inputs'><TextField helperText="Data do início da vigência" label='' variant="outlined" size='small' type='date' style={{width: '210px'}}/></div>
        <div className='inputs'><TextField helperText="Data do término da vigência" label='' variant="outlined" size='small' type='date' style={{width: '210px'}}/></div>

        <div className='button-group'>
          <Button variant="contained">Salvar</Button>
          {
            dadosPreenchidos ? (
              <Button variant="contained">Ativar Contrato</Button>
            ) : 
              <Button variant="contained" disabled>Ativar Contrato</Button>
          }
          
        </div>
      </form>
    </div>
    </div>
  );
}