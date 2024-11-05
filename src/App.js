import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Form from './Componentstwo/Form/Form';

function App() {
    const[tCount, setTcount] = useState(0);
    const[pCount, setPcount] = useState(10);
    const[uCount, setUCount] = useState(15);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar value={tCount} pCount={pCount} uCount={uCount}/>}/>
      <Route path="/form" element={<Form  setValue={setTcount} setPcount={setPcount} setUCount={setUCount}/>}/>
    </Routes>
    {/* <NavBar/> */}
    </BrowserRouter>

  )
}

export default App