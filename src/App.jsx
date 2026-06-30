import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Cadastro from '../cadastro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 

     <Link to='/cadastro'>Cadastrar</Link>


    <Routes>
      <Route path='cadastro' element={<Cadastro/>}> Cadastrar</Route>
    </Routes>


   
    </>
  )
}

export default App
