type TituloSecaoProps = {
    title: string;
    type?: 'primary' | 'secondary';
}

const TituloSecao = (props: TituloSecaoProps) => {
    if(props.type === 'secondary')
        return (<h3><span>.</span>{props.title}</h3>);
    return (<h2><span>.</span>{props.title}</h2>);
}

export default TituloSecao