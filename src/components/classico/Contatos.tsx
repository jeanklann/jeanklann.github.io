import type { Curriculo, Linguas, Texto } from '../../tipos'
import { getText } from '../../Functions'

type ContatosProps = {
    dados: Curriculo,
    language: Linguas
}

const getTextHidden = (language: Linguas, text: Texto) => {
    let result = getText(language, text);
    if(result.includes("99202-6836"))
      result = result.replace("99202-6836", "9****-****");
    return result;
}

const Contatos = (props:ContatosProps) => {
  return (
    <div className='contatos col-10'>
        {props.dados.contatos.map((contato, index) => (
            <div key={index} className='contato'>
            <i className={contato.icone}></i>
            <span className='valor'> {getTextHidden(props.language, contato.valor)}</span>
            </div>
        ))}
    </div>
  )
}

export default Contatos