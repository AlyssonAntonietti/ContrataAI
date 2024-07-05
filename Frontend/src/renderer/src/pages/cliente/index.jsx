import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../cliente/index.css'
import '../curriculo/anexar'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://contrataai.onrender.com/api'
})

const AreadoCliente = () => {
  const [isLoading, setLoading] = useState(true)
  const [value, setValue] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/curriculos")
        setValue(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <h1 id="titulo">Area do cliente</h1>
      <p id="subtitulo">Aqui você poderá ter acesso aos seus curriculos enviados</p>
      <br />
      <div className="voltar">
        <Link to="/">
          <input type="button" value="Menu" />
        </Link>
      </div>
      <br />
      {isLoading == false ? (
        value?.map((value) => (
          <div
            key={value.id}
            style={{ display: 'flex', alignItems: 'left', flexDirection: 'column' }}
          >
            
            <p class="left-align">
            <br />
            <div class="janela">
            <div class="conjunto-dados">Nome: {value.nome}</div>
            <div class="conjunto-dados">Email: {value.email}</div>
            <div class="conjunto-dados">Telefone: {value.telefone}</div>
            <div class="conjunto-dados">Data de Nascimento: {value.dataNascimento}</div>
            <div class="conjunto-dados">Cidade: {value.cidade}</div>
            <div class="conjunto-dados">UF: {value.uf}</div>
            <div class="conjunto-dados">Estado Civil: {value.estadoCivil}</div>
            <div class="conjunto-dados">Gênero: {value.genero}</div>
            <div class="conjunto-dados">Grau de Escolaridade: {value.grauEscolaridade}</div>
            <div class="conjunto-dados">Nacionalidade: {value.nacionalidade}</div>
            <div class="conjunto-dados">Descrição Pessoal: {value.descricaoPessoal}</div>
            <div class="conjunto-dados">Descrição Profissional: {value.descricaoProfissional}</div>
            </div>
            <br />
            </p>

          </div>
        ))
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div>Carregando...</div>
      </div>)}
    </>
  )
}
export default AreadoCliente