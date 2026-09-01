import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import imagens from "./imagens/ib_saude.png"

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
    width: "100vw"
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
<div className='flex h-28 border-b-4 w-full border-blue-500'>
<img style={imagem} src={imagens}/>

<ul className='w-full flex gap-3 items-center justify-center'>
    <li style={rota}>
      <span onClick={() => setCadastro(!cadastro)}>Cadastrar</span>
      {cadastro && (
      <ul>
        <li><Link to='cadastroMedicamento'>Cadastro de Medicamentos</Link></li>
        <li><Link to='cadastroSaude'>Unidade de Saude</Link></li>
        <li><Link to="LoteMedicamentos">Cadastrar Lote de Medicamentos</Link></li>
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
      <span onClick={() => setVer(!ver)}>Registro</span>
      {ver && (
      <ul><li>
        <Link to='TelaDeRegistro'>Tela De Cadastro</Link>
        </li>
        <li>
          <Link to="ViewRegistro">Visualizar Registro</Link>
          </li></ul>
      )}
      </li>
    <li style={rota}>
    
     <Link to='ControleDeEstoque'>Controle de Estoque</Link>
      </li>
    <li style={rota}>
      <Link to="DistribuicaoUnidade">
      Distribuição para unidades
      </Link>
      </li>
    <li style={rota}>
      <span onClick={() => setVer(!ver)}>Rastreabilidade</span>
      {ver && (
      <ul><li>
        <Link to='Rastreabilidade'>Painel rastreabilidade</Link>
        </li>
        <li>
          <Link to="LoteRastreabilidade">Detalhes do Lote</Link>
          </li>
          <li>
          <Link to="LogAuditoria">Log de Auditoria</Link>
          </li>
          
          </ul>
      )}
      </li>
      <li style={rota}>
        <Link to="PainelAdministrativo">
          Painel Administrativo
        </Link>
      </li>
</ul>
<img style={imagem} src={imagens}/>

</div>

      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </>
)

}
export default Menu;