import { useEffect, useRef, useState } from 'react'
import Switch from "react-switch";
import QRCode from 'react-qr-code' 
import { type linguas, type periodo, type texto } from '../tipos.tsx'
import {dados, palavrasPadroes } from '../dadosCurriculo.tsx'
import { formatPeriodoFunction, getTextFunction } from '../Functions.tsx'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/CurriculoClassico.scss'

function CurriculoClassico() {
  let params = new URLSearchParams(document.location.search);
  let defaultLanguage : linguas = params.get("lan") == "enUs" ? "enUs" : "ptBr";
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

  const formatPeriodo = (valorPeriodo:periodo) => formatPeriodoFunction(language, valorPeriodo);
  const getText = (text : texto) : string => getTextFunction(language, text);

  const todosCursos = dados.cursos.map(curso => curso.nomes.map(nome => getText(nome))).flat();

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
    let lines = dados.totalLinhas.ptBr;
    if(dados.totalLinhas[language])
      lines = dados.totalLinhas[language];
    
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
                onColor='#cc0' 
                offColor='#111120'
                checkedIcon={<i className="switch-icon fa-solid fa-sun"></i>}
                uncheckedIcon={<i className="switch-icon fa-solid fa-moon"></i>}
                />
          </div>
          
          <div className='menu-item'>
            <Switch 
                onChange={toggleLanguage} 
                checked={languageBool}
                onColor='#711' 
                offColor='#151'
                checkedIcon={<span className='switch-icon switch-icon-mini' style={{color: '#ccc'}}>EN</span>}
                uncheckedIcon={<span className='switch-icon switch-icon-mini' style={{color: '#ccc'}}>PT</span>}
                />
          </div>

          <div className='menu-item'>
            <button onClick={handlePrint}>
              Imprimir / Baixar
            </button>
          </div>

          <div className='menu-item'>
            <button onClick={handleBack}>
              Voltar
            </button>
          </div>
        </div>
        <div ref={linhasRef} className='curriculo-classico-linhas'>
          { getLines() }
        </div>
        <div className='curriculo-classico-main'>
          <div className='row'>
            <div className='titulo col-5'>
              <div className='main-tag'>
                <span className='color-secondary'>{"<"}</span>
                <span className='color-primary'>cv</span>
                <span className='color-secondary'>{">"}</span>
              </div>
              <div>
                <div className='nome'>{dados.nome}</div>
                <div className='resumo'>{getText(dados.resumo)}</div>
              </div>
            </div>
            <div className='col-7 row col2' style={{marginTop: '30px'}}>
              <div className='contatos col-10'>
                {dados.contatos.map((contato, index) => (
                  <div key={index} className='contato'>
                    <i className={contato.icone}></i>
                    <span className='valor'> {contato.valor}</span>
                  </div>
                ))}
              </div>
              
              <div className='qrCode col-2'>
                <QRCode 
                  value={dados.contatos.filter(x => x.icone == "fa-brands fa-github")[0].valor}
                  style={{maxHeight: '80px', maxWidth: '80px', marginBottom: '10px'}} />
              </div>
            </div>
          </div>
          <div className='formacao row'>
            <div className='col-8'>
              <h2><span>.</span>{getText(palavrasPadroes.formacao)}</h2>
              <div className=''>
                {dados.formacao.map((formacao, index) => (
                  <div key={index} className='formacao-item row'>
                    <div className='nome col-8'>
                      <div>{getText(formacao.nome)}</div>
                      <div className='instituicao'>{formacao.instituicao}</div>
                    </div>
                    <div className='col-4'>
                      <div className='periodo col2'>{formatPeriodo(formacao.periodo)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='cursos col-4 row col3'>
              <h3><span>.</span>{(getText(palavrasPadroes.cursos))}</h3>
              <div className='curso-item'>
                <div className='nomes col-12'>{todosCursos.join(', ')}</div>
              </div>
            </div>
          </div>
          <div className='experiencia'>
            <h2><span>.</span>{getText(palavrasPadroes.experiencia)}</h2>
            {dados.experienciaProfissional.map((experiencia, index) => (
              <>
                {experiencia.cargos.map((cargo, cargoIndex) => (
                  <div key={(index*100) + cargoIndex} className='experiencia-item'>
                    <div className='cargo row'>
                        <div className='col-5'>
                          <div className='nome'>{getText(cargo.nome)}</div>
                          <div className='empresa'>{experiencia.nomeEmpresa}</div>
                        </div>
                        <div className='col-4'>
                          <div className='periodo col-4 col2'>{formatPeriodo(cargo.periodo)}</div>
                        </div>
                      
                      <div className='descricao col-3 col3'>{getText(cargo.descricao)}</div>
                      
                      <div>
                        <div className='habilidades'>
                          {cargo.habilidades.map((habilidade, habilidadeIndex) => (
                            <div key={habilidadeIndex} className='habilidade-item row'>
                              <div className='habilidade-titulo col-2'>{getText(habilidade.nome)}</div>
                              <div className='habilidade-valor col-8'>{habilidade.valores.join(', ')}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
          <div className='experiencia-adicional'>
            <h2><span>.</span>{getText(palavrasPadroes.experienciaAdicional)}</h2>
            {dados.experienciaProfissionalAdicional.map((experiencia, index) => (
                  <div key={index} className='experiencia-adicional-item'>
                    <div className='cargo row'>
                        <div className='col-5'>
                          <div className='nome'>{getText(experiencia.titulo)}</div>
                          <div className='empresa'>{experiencia.nomeEmpresa}</div>
                        </div>
                        <div className='col-4'>
                          <div className='periodo col-4 col2'>{formatPeriodo(experiencia.periodo)}</div>
                        </div>
                      
                      <div className='descricao col-3 col3'>{getText(experiencia.descricao)}</div>
                    </div>
                  </div>
            ))}
          </div>

          <div className='idiomas row'>
            <h2><span>.</span>{getText(palavrasPadroes.idiomas)}</h2>
            {dados.idiomas.map((idioma, index) => (
              <div key={index} className='idioma-item'>
                <div className='row'>
                  <div className='lingua col-2'>{getText(idioma.lingua)}</div>
                  <div className='fluencia col-8'>{getText(idioma.texto)}</div>
                </div>
              </div>
            ))}
          </div>      
              <div className='main-tag'>
                <span className='color-secondary'>{"</"}</span>
                <span className='color-primary'>cv</span>
                <span className='color-secondary'>{">"}</span>
              </div>
          </div>
        </div>
      </div>
  )
}

export default CurriculoClassico
