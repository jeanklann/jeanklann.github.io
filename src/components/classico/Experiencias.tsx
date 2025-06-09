import { formatPeriodo, getText } from '../../Functions'
import type { Curriculo, Linguas, Palavras } from '../../tipos'
import Habilidades from './Habilidades'
import TituloSecao from './TituloSecao'

type ExperienciasProps = {
    dados: Curriculo,
    language: Linguas,
    palavras: Palavras
}

const Experiencias = (props: ExperienciasProps) => {
  return (
    <div className='experiencia'>
        <TituloSecao title={getText(props.language, props.palavras.experiencia)} />
        {props.dados.experienciaProfissional.map((experiencia, index) => (
            <>
            {experiencia.cargos.map((cargo, cargoIndex) => (
                <div key={(index*100) + cargoIndex} className='experiencia-item'>
                <div className='cargo row'>
                    <div className='col-5'>
                        <div className='nome'>{getText(props.language, cargo.nome)}</div>
                        <div className='empresa'>{experiencia.nomeEmpresa}</div>
                    </div>
                    <div className='col-4'>
                        <div className='periodo col-4 col2'>{formatPeriodo(props.language, cargo.periodo)}</div>
                    </div>
                    
                    <div className='descricao col-3 col3'>{getText(props.language, cargo.descricao)}</div>
                    
                    <div>
                    <Habilidades cargo={cargo} language={props.language} />
                    </div>
                </div>
                </div>
            ))}
            </>
        ))}
    </div>
  )
}

export default Experiencias