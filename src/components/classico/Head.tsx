import type { curriculo, linguas, palavras } from '../../tipos'
import MainTag from './MainTag'
import Name from './Name'
import Contatos from './Contatos'
import QRCode from 'react-qr-code'

type HeadProps = {
    dados: curriculo,
    palavras: palavras,
    language: linguas
}

const Head = (props:HeadProps) => {
  return (
    <div className='row'>
        <div className='titulo col-5'>
            <MainTag openning={true} />
            <Name dados={props.dados} language={props.language} />
        </div>
        <div className='col-7 row col2' style={{marginTop: '30px'}}>
            <Contatos dados={props.dados} />
            <div className='qrCode col-2'>
            <QRCode 
                value={props.dados.contatos.filter(x => x.icone == "fa-brands fa-github")[0].valor}
                style={{maxHeight: '80px', maxWidth: '80px', marginBottom: '10px'}} />
            </div>
        </div>
    </div>
  )
}

export default Head