import { useEffect, useRef, useState } from 'react'
import Switch from "react-switch";
import {dados, palavrasPadroes } from '../dadosCurriculo.tsx'
import { formatPeriodoFunction, getTextFunction } from '../Functions.tsx'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/CurriculoInterativo.scss'
import type { linguas, periodo, texto } from '../tipos.tsx';

function CurriculoInterativo() {
  let params = new URLSearchParams(document.location.search);
  let defaultLanguage : linguas = params.get("lan") == "enUs" ? "enUs" : "ptBr";
  let defaultNightMode = params.get("night") ?? "0";

  const [language, setLanguage] = useState(defaultLanguage);
  const [languageBool, setLanguageBool] = useState(defaultLanguage == "enUs");
  const [nightMode, setNightMode] = useState(defaultNightMode != "1");
  const curriculoRef = useRef<HTMLDivElement>(null);
  const linhasRef = useRef<HTMLDivElement>(null);
  const todosCursos = dados.cursos.map(curso => curso.nomes).flat();

  useEffect(() => {
    if(defaultNightMode == "1")
      document.body.classList.toggle('night', true);
    document.documentElement.lang = language ? 'en' : 'pt-BR';
  }, []);

  const toggleNightMode = (checked:boolean) => {
    setNightMode(checked);
    document.body.classList.toggle('night', !checked);
  }

  const formatPeriodo = (valorPeriodo:periodo) => formatPeriodoFunction(language, valorPeriodo);
  const getText = (text : texto) : string => getTextFunction(language, text);

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
      <div ref={curriculoRef} className='curriculo-interativo'>
        <header className='curriculo-header'>
          <h1>{dados.nome}</h1>
          <p className='curriculo-resumo'>{getText(dados.resumo)}</p>
          <div className='curriculo-contatos'>
            {dados.contatos.map((contato, index) => (
              <div key={index} className='contato-item'>
                <i className={contato.icone}></i>
                <span>{contato.valor}</span>
              </div>
            ))}
          </div>
        </header>

        <section className='curriculo-formacao'>
          <h2>{getText(palavrasPadroes.formacao)}</h2>
          {dados.formacao.map((formacao, index) => (
            <div key={index} className='formacao-item'>
              <h3>{formacao.instituicao}</h3>
              <p>{getText(formacao.nome)}</p>
              <span>{formatPeriodo(formacao.periodo)}</span>
            </div>
          ))}
        </section>

        <section className='curriculo-cursos'>
          <h2>{getText(palavrasPadroes.cursos)}</h2>
          {dados.cursos.map((curso, index) => (
            <div key={index} className='curso-item'>
              <h3>{curso.instituicao}</h3>
              {curso.nomes.map((nome, idx) => (
                <p key={idx}>{getText(nome)}</p>
              ))}
            </div>
          ))}
        </section>

        <section className='curriculo-experiencia'>
          <h2>{getText(palavrasPadroes.experiencia)}</h2>
          {dados.experienciaProfissional.map((experiencia, index) => (
            <div key={index} className='experiencia-item'>
              <h3>{experiencia.nomeEmpresa}</h3>
              {experiencia.cargos.map((cargo, idx) => (
                <div key={idx} className='cargo-item'>
                  <h4>{getText(cargo.nome)}</h4>
                  <span>{formatPeriodo(cargo.periodo)}</span>
                  <p>{getText(cargo.descricao)}</p>
                  {cargo.habilidades.map((habilidade, hIdx) => (
                    <div key={hIdx} className='habilidade-item'>
                      <strong>{getText(habilidade.nome)}:</strong>
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
