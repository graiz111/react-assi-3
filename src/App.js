import {useNavigate } from "react-router-dom";
import React from "react";
import './App.css'

function App() {
const navigate=useNavigate()

  return (
    <>
    <div class="container">

   <button class="button" onClick={()=>{navigate('/products')}}>click for products</button>
    </div>
    </>
  );
}

export default App;
