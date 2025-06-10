import { formatPeriodo, getText } from '../../Functions'
import type { Curriculo, Linguas, Palavras } from '../../tipos'
import TituloSecao from './TituloSecao'

type ExperienciasAdicionaisProps = {
    dados: Curriculo,
    language: Linguas,
    palavras: Palavras
}

const ExperienciasAdicionais = (props: ExperienciasAdicionaisProps) => {
  return (
    <div className='experiencia-adicional'>
        <TituloSecao title={getText(props.language, props.palavras.experienciaAdicional)} />
        {props.dados.experienciaProfissionalAdicional.map((experiencia, index) => (
            <div key={index} className='experiencia-adicional-item'>
                <div className='cargo row'>
                    <div className='col-5'>
                        <div className='nome'>{getText(props.language, experiencia.titulo)}</div>
                        <div className='empresa'>{experiencia.nomeEmpresa}</div>
                    </div>
                    <div className='col-4'>
                        <div className='periodo col-4 col2'>{experiencia.periodo == null ? null : formatPeriodo(props.language, experiencia.periodo)}</div>
                    </div>
                    
                    <div className='descricao col-3 col3'>{getText(props.language, experiencia.descricao)}</div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ExperienciasAdicionais