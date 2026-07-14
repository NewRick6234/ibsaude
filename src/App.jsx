import TelaInicial from './TelaInicial'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Menu from './Menu'
import CadastroMedicamento from './CadastroMedicamento'
import Remedios from './Remedios'
import LoteMedicamento from './LoteMedicamento'
import CadastroUsuario from './CadastroUsuario'
import ViewRemedios from './viewRemedios'
import ViewLote from './ViewLote'


function App() {

  return (
    <> 
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<CadastroUsuario />} />
      <Route path="/menu" element={<Menu />}>
        <Route path="cadastroMedicamento" element={<CadastroMedicamento />} />
        <Route path="LoteMedicamento" element={<LoteMedicamento />} />
        <Route path='verRemedios' element={<ViewRemedios/>}/>
        <Route path='verLote' element={<ViewLote/>}/>
      </Route>
    </Routes>
    </>


  )
}

export default App
