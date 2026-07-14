import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
function Menu(){

  const[cadastro, setCadastro] = useState(false)
  const[ver, setVer] = useState(false)

     let rodape = {
  //  backgroundColor: "cyan",
  display: "flex",
  height: "90px",
  borderBottom: "5px solid #0480e6"
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

return(
    <>
<div style={rodape}>
<img style={imagem} src='/ib_saude.png'/>

<ul style={rotas}>
    <li style={rota}>
      <span onClick={() => setCadastro(!cadastro)}>Cadastrar</span>
      {cadastro && (
      <ul>
        <li><Link to='cadastroMedicamento'>Cadastro de Medicamentos</Link></li>
        <li>Cadastro do Lote de Medicamentos</li>
      </ul>
      )}
    </li>
     <li style={rota}>
      <span onClick={() => setVer(!ver)}>Ver</span>
      {ver && (
      <ul><li>
        <Link to='verRemedios'>Medicamentos</Link>
        </li>
        <li>
          <Link to="verLote">Lote de Medicamentos</Link>
          </li></ul>
      )}
    </li>
    <li style={rota}>
      <Link to='TelaDeRegistro'>Tela de Registro</Link>
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

      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </>
)

}
export default Menu;