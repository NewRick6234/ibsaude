import { Link, Outlet } from 'react-router-dom'
function Menu(){

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

return(
    <>
<div style={rodape}>
<img style={imagem} src='/ib_saude.png'/>

<ul style={rotas}>
    <li style={rota}>
      <Link to='cadastroMedicamento'>Cadastro de Medicamentos</Link>
    </li>
     {/* <li style={rota}>
      <Link to='/logar'>Logar</Link>
    </li> */}
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

      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </>
)

}
export default Menu;