import { getText } from '../../Functions'
import type { Linguas, Palavras, Texto } from '../../tipos'

type ProjetosProps = {
    dados: Texto[],
    language: Linguas,
    palavras: Palavras
}

const Projetos = (props: ProjetosProps) => {
  return (
    <div className='projetos row'>
        <div className='titulo col-12'><span className='color-primary'>{"{"}</span> {getText(props.language, props.palavras.projetos)} <span className='color-primary'>{"}"}</span></div>
        {props.dados.map((projeto, index) => (
            <div key={index} className='projeto-item col-12'>
                <div className='descricao'>{getText(props.language, projeto)}</div>
            </div>
        ))}
    </div>
  )
}

export default Projetos