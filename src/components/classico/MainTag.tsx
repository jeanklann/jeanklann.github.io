type MainTagProps = {
  openning: boolean;
}

const MainTag = (props:MainTagProps) => {
  return (
    <div className='main-tag'>
        <span className='color-secondary'>{props.openning ? "<" : "</"}</span>
        <span className='color-primary'>cv</span>
        <span className='color-secondary'>{">"}</span>
    </div>
  )
}

export default MainTag