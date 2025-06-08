import type { curriculo, linguas } from '../../tipos.tsx'
import { getText } from '../../Functions.tsx'

type NameProps = {
    dados: curriculo,
    language: linguas
}

const Name = (props: NameProps) => {
  return (
    <div>
        <div className='nome'>{props.dados.nome}</div>
        <div className='resumo'>{getText(props.language, props.dados.resumo)}</div>
    </div>
  )
}

export default Name