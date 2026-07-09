import TelaInicial from './TelaInicial'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Menu from './Menu'
import CadastroMedicamento from './CadastroMedicamento'
import TelaDeRegistro from './TelaDeRegistro'
import Remedios from './Remedios'
import CadastroUsuario from './CadastroUsuario'


function App() {

  return (
    <> 
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<CadastroUsuario />} />
      <Route path="/menu" element={<Menu />}>
        <Route path="cadastroMedicamento" element={<CadastroMedicamento />} />
        <Route path="TelaDeRegistro" element={<TelaDeRegistro />} />

      </Route>
    </Routes>
    </>


  )
}

export default App
