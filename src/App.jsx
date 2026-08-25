import TelaInicial from './TelaInicial'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Menu from './Menu'
import CadastroMedicamento from './CadastroMedicamento'
import TelaDeRegistro from './TelaDeRegistro'
import Remedios from './Remedios'
import LoteMedicamento from './LoteMedicamento'
import CadastroUsuario from './CadastroUsuario'
import ViewRemedios from './ViewRemedios'
import ViewLote from './ViewLote'
import CadastroUnidadeSaude from './CadastroUnidadeSaude'
import ViewRegistro from './ViewRegistro'

import ControleDeEstoque from './ControleDeEstoque'

import Rastreabilidade from './Rastreabilidade'

import DistribuicaoUnidade from './DistribuicaoUnidade'
//import DashboardChart from './DashboardChart'
import CardEstoque from './CardEstoque'
import CardArea from './CardArea'
function App() {

  return (
    <> 
    <div className='flex flex-col items-center '>
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<CadastroUsuario />} />
      <Route path="/menu" element={<Menu />}>
        <Route path="cadastroMedicamento" element={<CadastroMedicamento />} />
        <Route path="cadastroSaude" element={<CadastroUnidadeSaude />} />
        <Route path="LoteMedicamentos" element={<LoteMedicamento />} />
        <Route path="TelaDeRegistro" element={<TelaDeRegistro />} />
        <Route path="ControleDeEstoque" element={<ControleDeEstoque />} />
        <Route path='DistribuicaoUnidade' element={<DistribuicaoUnidade/>}/>

        <Route path='Rastreabilidade' element={<Rastreabilidade/>}/>
 
        <Route path="ViewRegistro" element={<ViewRegistro />}/>
        <Route path='verRemedios' element={<ViewRemedios/>}/>
        <Route path='verLote' element={<ViewLote/>}/>
        {/* <Route path='DashboardChart' element={<DashboardChart />}/> */}
        <Route path='CardEstoque' element={<CardEstoque/>}/>
        <Route path='CardArea' element={<CardArea/>}/>
      </Route>
    </Routes>
    </div>
    </>


  )
}

export default App
