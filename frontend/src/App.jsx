import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './views/Login';
import Calendario from './views/calendario';
import Encuesta from './views/Encuesta';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/calendario" element={<Calendario />}/>
        <Route exact path="/encuesta" element={<Encuesta />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
