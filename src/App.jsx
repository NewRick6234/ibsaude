import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Cadastro from './Cadastro'
import Remedios from './Remedios'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 

<ul>
    <li>
      <Link to='/cadastro'>Cadastrar</Link>
    </li>
    <li>
    <Link to='/Remedios'>Remédio</Link>
    </li>
</ul>

   

    <Routes>
      <Route path='cadastro' element={<Cadastro/>}> Cadastrar</Route>
      <Route path='Remedios' element={<Remedios/>}>remedios</Route>
      
    </Routes>


   
    </>


  )
}

export default App
