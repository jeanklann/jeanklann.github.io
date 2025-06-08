import type { curriculo } from '../../tipos'

type ContatosProps = {
    dados: curriculo,
}

const Contatos = (props:ContatosProps) => {
  return (
    <div className='contatos col-10'>
        {props.dados.contatos.map((contato, index) => (
            <div key={index} className='contato'>
            <i className={contato.icone}></i>
            <span className='valor'> {contato.valor}</span>
            </div>
        ))}
    </div>
  )
}

export default Contatos