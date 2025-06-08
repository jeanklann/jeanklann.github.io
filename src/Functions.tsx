import { type linguas, type periodo, type texto } from './tipos.tsx'
import { palavrasPadroes } from './dadosCurriculo.tsx'

export const formatDate = (date:Date) => {
    if (!date) return palavrasPadroes.atual;
    return date.toLocaleDateString('pt-BR', {month: '2-digit', year: 'numeric'});
}

export const formatPeriodoFunction = (language: linguas, valorPeriodo:periodo) => {
    return (<>{formatDate(valorPeriodo.inicio)} - {valorPeriodo.fim ? formatDate(valorPeriodo.fim) : getTextFunction(language, palavrasPadroes.atual)}</>);
}
  
export const getTextFunction = (language: linguas, text : texto) : string => {
    if (language == "enUs" && text.enUs)
        return text.enUs;
    return text.ptBr;
}