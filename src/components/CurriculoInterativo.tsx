import { useEffect, useRef, useState } from 'react'
import Switch from "react-switch";
import {DadosCurriculo, PalavrasPadroes } from '../DadosCurriculo.tsx'
import { formatPeriodo, getText } from '../Functions.tsx'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/CurriculoInterativo.scss'
import type { Linguas, Periodo, Texto } from '../tipos.tsx';
import Rellax from 'rellax';

function CurriculoInterativo() {
  let params = new URLSearchParams(document.location.search);
  let defaultLanguage : Linguas = params.get("lan") == "enUs" ? "enUs" : "ptBr";
  let defaultNightMode = params.get("night") ?? "0";

  const [language, setLanguage] = useState(defaultLanguage);
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


  return (
    <div className="curriculo-interativo-container">
      <div ref={curriculoRef} className='curriculo-interativo rellax' data-rellax-speed="2">
        <header className='curriculo-header'>
          <h1>{DadosCurriculo.nome}</h1>
          <p className='curriculo-resumo'>{getText(language, DadosCurriculo.resumo)}</p>
          <div className='curriculo-contatos'>
            {DadosCurriculo.contatos.map((contato, index) => (
              <div key={index} className='contato-item'>
                <i className={contato.icone}></i>
                <span>{contato.valor.ptBr}</span>
              </div>
            ))}
          </div>
        </header>

        <section className='curriculo-formacao'>
          <h2>{getText(language, PalavrasPadroes.formacao)}</h2>
          {DadosCurriculo.formacao.map((formacao, index) => (
            <div key={index} className='formacao-item'>
              <h3>{formacao.instituicao}</h3>
              <p>{getText(language, formacao.nome)}</p>
              <span>{formatPeriodo(language, formacao.periodo)}</span>
            </div>
          ))}
        </section>

        <section className='curriculo-cursos'>
          <h2>{getText(language, PalavrasPadroes.cursos)}</h2>
          {DadosCurriculo.cursos.map((curso, index) => (
            <div key={index} className='curso-item'>
              <h3>{curso.instituicao}</h3>
              {curso.nomes.map((nome, idx) => (
                <p key={idx}>{getText(language, nome)}</p>
              ))}
            </div>
          ))}
        </section>

        <section className='curriculo-experiencia'>
          <h2>{getText(language, PalavrasPadroes.experiencia)}</h2>
          {DadosCurriculo.experienciaProfissional.map((experiencia, index) => (
            <div key={index} className='experiencia-item'>
              {experiencia.imagem ? (<img src={experiencia.imagem[0]} style={{position: 'relative'}} />) : null}
              <h3>{experiencia.nomeEmpresa}</h3>
              {experiencia.cargos.map((cargo, idx) => (
                <div key={idx} className='cargo-item'>
                  <h4>{getText(language, cargo.nome)}</h4>
                  <span>{formatPeriodo(language, cargo.periodo)}</span>
                  <p>{getText(language, cargo.descricao)}</p>
                  {cargo.habilidades.map((habilidade, hIdx) => (
                    <div key={hIdx} className='habilidade-item'>
                      <strong>{getText(language, habilidade.nome)}:</strong>
                      <span>{habilidade.valores.join(', ')}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default CurriculoInterativo
