import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Cadastro from './Cadastro'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 

<ul>
    <li>
      <Link to='/cadastro'>Cadastrar</Link>
    </li>
</ul>

   

    <Routes>
      <Route path='cadastro' element={<Cadastro/>}> Cadastrar</Route>
    </Routes>


   
    </>
  )
}

export default App
