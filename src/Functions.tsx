import { type Linguas, type Periodo, type Texto } from './tipos.tsx'
import { PalavrasPadroes } from './DadosCurriculo.tsx'

export const formatDate = (date:Date) => {
    if (!date) return PalavrasPadroes.atual;
    return date.toLocaleDateString('pt-BR', {month: '2-digit', year: 'numeric'});
}

export const formatPeriodo = (language: Linguas, valorPeriodo:Periodo) => {
    return (<>{formatDate(valorPeriodo.inicio)} - {valorPeriodo.fim ? formatDate(valorPeriodo.fim) : getText(language, PalavrasPadroes.atual)}</>);
}
  
export const getText = (language: Linguas, text : Texto) : string => {
    if (language == "enUs" && text.enUs)
        return text.enUs;
    return text.ptBr;
}