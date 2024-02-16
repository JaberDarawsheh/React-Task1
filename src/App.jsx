import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let name="Jaber Darawsheh";
  let age =21;
  return (
    <>
      <h2>Hello <strong>{name}</strong></h2>
      <br />
      <h2> My age is <strong>{age}</strong></h2>
    </>  
  )
}

export default App
