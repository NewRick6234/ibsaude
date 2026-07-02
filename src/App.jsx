import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Cadastro from './Cadastro'

function App() {
  const [count, setCount] = useState(0)


  let rodape = {
  //  backgroundColor: "cyan",
  display: "flex",
  height: "90px",
  borderBottom: "5px solid cyan"
  }

  let rotas = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%"
    // flexWrap: "wrap" 
    //color: "black" 
  }

  let rota = {
    fontWeight: "bold",           /* Negrito */
    textDecoration: "underline"  /* Sublinhado */
  }

  let imagem = {
    width: "16%"
  }

  let botoes = {
    display: "flex",
    justifyContent: "center"
  }

  let botao = {
    margin: "8px",
    border: "1px solid cyan",
    borderRadius: "10px",
    backgroundColor: "rgb(0, 255, 149)"
  }

  return (
    <> 

<div style={rodape}>
<img style={imagem} src='/ib_saude.png'/>

<ul style={rotas}>
    <li style={rota}>
      <Link to='/cadastro'>Cadastro de Medicamentos</Link>
    </li>
    <li style={rota}>
      Entrada
      </li>
    <li style={rota}>
     Controle de Estoque
      </li>
    <li style={rota}>
      Distribuição para unidades
      </li>
    <li style={rota}>
      Rastreabilidade 
      </li>
      <li style={rota}>
        Painel administrativo
      </li>
</ul>
</div>

<br/>
   
   {/* Colocar em um arquivo separado */}
   <div style={botoes}>
   <button style={botao}>Logar</button>
   <button style={botao}>Cadastrar</button>
    </div>

    <Routes>
      <Route path='cadastro' element={<Cadastro/>}> </Route>
    </Routes>


   
    </>
  )
}

export default App
