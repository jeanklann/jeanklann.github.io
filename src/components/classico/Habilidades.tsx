import type { Cargo, Linguas } from '../../tipos'
import { getText } from '../../Functions'

type HabilidadesProps = {
    cargo: Cargo,
    language: Linguas,
}

const Habilidades = (props: HabilidadesProps) => {
  return (
    <div className='habilidades'>
    {props.cargo.habilidades.map((habilidade, habilidadeIndex) => (
        <div key={habilidadeIndex} className='habilidade-item row'>
        <div className='habilidade-titulo col-2'>{getText(props.language, habilidade.nome)}</div>
        <div className='habilidade-valor col-8'>{habilidade.valores.join(', ')}</div>
        </div>
    ))}
    </div>
  )
}

export default Habilidades