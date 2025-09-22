import { useEffect, useRef, useState } from 'react'
import Switch from "react-switch";
import QRCode from 'react-qr-code' 
import { type Linguas } from '../tipos.tsx'
import {DadosCurriculo, PalavrasPadroes } from '../DadosCurriculo.tsx'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/CurriculoClassico.scss'
import MainTag from './classico/MainTag.tsx';
import Name from './classico/Name.tsx';
import Contatos from './classico/Contatos.tsx';
import Formacao from './classico/Formacao.tsx';
import Experiencias from './classico/Experiencias.tsx';
import ExperienciasAdicionais from './classico/ExperienciasAdicionais.tsx';
import Idiomas from './classico/Idiomas.tsx';
import { getText } from '../Functions.tsx';

function CurriculoClassico() {
  let params = new URLSearchParams(document.location.search);
  let defaultLanguage : Linguas = params.get("lan") == "enUs" ? "enUs" : "ptBr";
  let defaultNightMode = params.get("night") ?? "0";

  const [language, setLanguage] = useState(defaultLanguage);
  const [languageBool, setLanguageBool] = useState(defaultLanguage == "enUs");
  const [nightMode, setNightMode] = useState(defaultNightMode != "1");
  const curriculoRef = useRef<HTMLDivElement>(null);
  const linhasRef = useRef<HTMLDivElement>(null);
  

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

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  

  const getLines = () => {
    let lines = DadosCurriculo.totalLinhas.ptBr;
    if(DadosCurriculo.totalLinhas[language])
      lines = DadosCurriculo.totalLinhas[language];
    
    return Array.from({ length: lines }).map((_, index) => (
                <div key={index} className='linha'>{(index+1)}</div>
              ));
  }

  

  return (
    <div className="curriculo-classico-container">
      <div ref={curriculoRef} className='curriculo-classico'>
        <div className='menu'>
          <div className='menu-item'>
            <Switch 
                onChange={toggleNightMode} 
                checked={nightMode} 
                onColor='#d33e15' 
                offColor='#111120'
                checkedIcon={<i className="switch-icon fa-solid fa-sun" style={{color: '#fff'}}></i>}
                uncheckedIcon={<i className="switch-icon fa-solid fa-moon" style={{color: '#fff'}}></i>}
                />
          </div>
          
          <div className='menu-item'>
            <Switch 
                onChange={toggleLanguage} 
                checked={languageBool}
                onColor='#d33e15' 
                offColor='#0c5361'
                checkedIcon={<span className='switch-icon switch-icon-mini' style={{color: '#ccc'}}>EN</span>}
                uncheckedIcon={<span className='switch-icon switch-icon-mini' style={{color: '#ccc'}}>PT</span>}
                />
          </div>

          <div className='menu-item'>
            <button onClick={handlePrint}>
              {getText(language, PalavrasPadroes.imprimir)}
            </button>
          </div>
          {/*
          <div className='menu-item'>
            <button onClick={handleBack}>
              {getText(language, PalavrasPadroes.voltar)}
            </button>
          </div>
          */}
        </div>
        <div ref={linhasRef} className='curriculo-classico-linhas'>
          { getLines() }
        </div>
        <div className='curriculo-classico-main'>
          <div className='row'>
            <div className='titulo col-5'>
              <MainTag openning={true} />
              <Name dados={DadosCurriculo} language={language} />
            </div>
            <div className='col-7 row col2' style={{marginTop: '30px'}}>
              <Contatos dados={DadosCurriculo} language={language} />
              <div className='qrCode col-2'>
                <QRCode 
                  value={DadosCurriculo.contatos.filter(x => x.icone == "fa-brands fa-github")[0].valor.ptBr}
                  style={{maxHeight: '80px', maxWidth: '80px', marginBottom: '10px'}} />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='resumo-maior col-12'>
              {getText(language, DadosCurriculo.resumoMaior)}
            </div>
          </div>
          <Formacao dados={DadosCurriculo} language={language} palavras={PalavrasPadroes} />
          <Experiencias dados={DadosCurriculo} language={language} palavras={PalavrasPadroes} />
          <ExperienciasAdicionais dados={DadosCurriculo} language={language} palavras={PalavrasPadroes} />

          <Idiomas idiomas={DadosCurriculo.idiomas} language={language} palavras={PalavrasPadroes} />
          <MainTag openning={false} />
          </div>
        </div>
      </div>
  )
}

export default CurriculoClassico
