import CurriculoClassico from './components/CurriculoClassico.tsx'
import CurriculoInterativo from './components/CurriculoInterativo.js'
import CurriculoClassicoCoverLetter from './components/CurriculoClassicoCoverLetter.tsx';

const App = () => {
    let params = new URLSearchParams(document.location.search);
    let modo = params.get("modo") ?? "classico";
    if (modo === "classico") {
        return (
            <CurriculoClassico />
        )
    } else if (modo === "cover") {
      return (
            <CurriculoClassicoCoverLetter />
        )
    }
  return (
    <CurriculoInterativo />
  )
}

export default App