import TituloSecao from './TituloSecao'
import { getText } from '../../Functions'
import type { Curso, Linguas, Palavras } from '../../tipos'

type CursosProps = {
    dados: Curso[],
    language: Linguas,
    palavras: Palavras
}

const Cursos = (props:CursosProps) => {
    const todosCursos = props.dados.map(curso => curso.nomes.map(nome => getText(props.language, nome))).flat();

  return (
    <div className='cursos col-4 row col3'>
              <TituloSecao title={getText(props.language, props.palavras.cursos)} type='secondary' />
              <div className='curso-item'>
                <div className='nomes col-12'>{todosCursos.join(', ')}</div>
              </div>
            </div>
  )
}

export default Cursos