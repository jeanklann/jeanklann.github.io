//import { useEffect, useRef, useState } from 'react'
import { useState } from 'react'

import Navigation from './interativo/Navigation.tsx';
import Hero from './interativo/Hero.tsx';
import About from './interativo/About.tsx';
import Experience from './interativo/Experience.tsx';
import Skills from './interativo/Skills.tsx';
{/*import Projects from './interativo/Projects.tsx';*/}
import Contact from './interativo/Contact.tsx';

{/*import Switch from "react-switch";*/}
import {DadosCurriculo, PalavrasPadroes } from '../DadosCurriculo.tsx'
{/*import { formatPeriodo, getText } from '../Functions.tsx'*/}
import '@fortawesome/fontawesome-free/css/all.css'
import '../scss/CurriculoInterativo.scss'
import type { Linguas } from '../tipos.tsx';
// import Rellax from 'rellax';

function CurriculoInterativo() {
  let params = new URLSearchParams(document.location.search);
  let defaultLanguage : Linguas = params.get("lan") == "enUs" ? "enUs" : "ptBr";
  // let defaultNightMode = params.get("night") ?? "0";

  //const [language, setLanguage] = useState(defaultLanguage);
  const [language] = useState(defaultLanguage);
  {/*}
  const [languageBool, setLanguageBool] = useState(defaultLanguage == "enUs");
  const [nightMode, setNightMode] = useState(defaultNightMode != "1");
  const curriculoRef = useRef<HTMLDivElement>(null);
  const linhasRef = useRef<HTMLDivElement>(null);
  const todosCursos = DadosCurriculo.cursos.map(curso => curso.nomes).flat();

  useEffect(() => {
    let relax = new Rellax(".curriculo-formacao");

  }, []);
  useEffect(() => {
    if(defaultNightMode == "1")
      document.body.classList.toggle('night', true);
    document.documentElement.lang = language ? 'en' : 'pt-BR';
  }, []);

  const toggleNightMode = (checked:boolean) => {
    setNightMode(checked);
    document.body.classList.toggle('night', !checked);
  }



  const toggleLanguage = (checked:boolean) => {
    if(checked){
      setLanguage("enUs");
      document.documentElement.lang = 'enUs';
    } else {
      setLanguage("ptBr");
      document.documentElement.lang = 'ptBr';
    }
    setLanguageBool(checked);
  }

  */}

  return (
    <div className="curriculo-interativo min-h-screen bg-white dark:bg-slate-900">
      <Navigation dados={DadosCurriculo} language={language} palavras={PalavrasPadroes} />
      <main>
        <Hero dados={DadosCurriculo} language={language} palavras={PalavrasPadroes} />
        <About dados={DadosCurriculo} language={language} palavras={PalavrasPadroes} />
        <Experience dados={DadosCurriculo} language={language} palavras={PalavrasPadroes} />
        <Skills dados={DadosCurriculo} language={language} palavras={PalavrasPadroes} />
        {/*<Projects dados={DadosCurriculo} language={language} palavras={PalavrasPadroes} />*/}
        <Contact dados={DadosCurriculo} language={language} palavras={PalavrasPadroes} />
      </main>
    </div>
  );
}

export default CurriculoInterativo
