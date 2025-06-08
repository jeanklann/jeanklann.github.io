import React from 'react'
import CurriculoClassico from './components/CurriculoClassico.tsx'
import CurriculoInterativo from './components/CurriculoInterativo.tsx'

const App = () => {
    let params = new URLSearchParams(document.location.search);
    let modo = params.get("modo") ?? "interativo";
    if (modo === "classico") {
        return (
            <CurriculoClassico />
        )
    }
  return (
    <CurriculoInterativo />
  )
}

export default App