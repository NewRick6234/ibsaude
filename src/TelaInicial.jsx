import { Link } from 'react-router-dom'
function TelaInicial(){

  const botoes = {
    display: 'flex',
    justifyContent: 'center',
  }

  const botao = {
    margin: '8px',
    border: '1px solid cyan',
    borderRadius: '10px',
    backgroundColor: 'rgb(0, 255, 149)',
    color: '#000',
    fontWeight: 'semibold'
  }

    return(
        <>
       <div style={botoes}>
       <button style={botao}><Link to='/login'>Logar</Link></button>
       <button style={botao}><Link to='/cadastro'>Cadastrar</Link></button>
        <button style={botao}><Link to="/menu">Entrar no Menu</Link></button>
        <button stuyle={botao}><Link to="/menu/LoteMedicamento">Cadastrar Lote de Medicamento</Link></button>
        </div>
        </>
    )

}
export default TelaInicial 