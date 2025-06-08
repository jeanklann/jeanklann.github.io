import React from 'react'
import CurriculoClassico from './CurriculoClassico.tsx'
import CurriculoInterativo from './CurriculoInterativo.tsx'

const Curriculo = () => {
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

export default Curriculo