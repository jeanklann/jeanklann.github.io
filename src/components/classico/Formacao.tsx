import type { Curriculo, Linguas, Palavras } from '../../tipos'
import TituloSecao from './TituloSecao'
import { formatPeriodo, getText } from '../../Functions'
import Cursos from './Cursos'

type FormacaoProps = {
    dados: Curriculo,
    language: Linguas,
    palavras:Palavras
}

const Formacao = (props:FormacaoProps) => {
  return (
    <div className='formacao row'>
        <div className='col-8'>
            <TituloSecao title={getText(props.language, props.palavras.formacao)} />
            <div className=''>
            {props.dados.formacao.map((formacao, index) => (
                <div key={index} className='formacao-item row'>
                <div className='nome col-8'>
                    <div>{getText(props.language, formacao.nome)}</div>
                    <div className='instituicao'>{formacao.instituicao}</div>
                </div>
                <div className='col-4'>
                    <div className='periodo col2'>{formatPeriodo(props.language, formacao.periodo)}</div>
                </div>
                </div>
            ))}
            </div>
        </div>
        <Cursos dados={props.dados.cursos} language={props.language} palavras={props.palavras} />
    </div>
  )
}

export default Formacao