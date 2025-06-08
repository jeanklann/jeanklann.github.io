import type { idioma, linguas, palavras } from '../../tipos';
import { getText } from '../../Functions';
import TituloSecao from './TituloSecao';

type IdiomasProps = {
    idiomas: idioma[];
    palavras: palavras;
    language: linguas;
}

const Idiomas = (props: IdiomasProps) => {
  return (
    <div className='idiomas row'>
        <TituloSecao title={getText(props.language, props.palavras.idiomas)} />
        {props.idiomas.map((idioma, index) => (
            <div key={index} className='idioma-item'>
            <div className='row'>
                <div className='lingua col-2'>{getText(props.language, idioma.lingua)}</div>
                <div className='fluencia col-8'>{getText(props.language, idioma.texto)}</div>
            </div>
            </div>
        ))}
    </div>  
  )
}

export default Idiomas