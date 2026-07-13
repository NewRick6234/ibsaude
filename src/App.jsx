import TelaInicial from './TelaInicial'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Menu from './Menu'
import CadastroMedicamento from './CadastroMedicamento'
import Remedios from './Remedios'
import CadastroUsuario from './CadastroUsuario'
import ViewRemedios from './viewRemedios'


function App() {

  return (
    <> 
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<CadastroUsuario />} />
      <Route path="/menu" element={<Menu />}>
        <Route path="cadastroMedicamento" element={<CadastroMedicamento />} />
        <Route path='verRemedios' element={<ViewRemedios/>}/>
      </Route>
    </Routes>
    </>


  )
}

export default App
