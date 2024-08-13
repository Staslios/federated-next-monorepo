import style from './externalized-a.module.css';


const ExternalizedA = ({description}) => {

  return <div className={style.a}>
    <b>
      Externalized A Component
    </b>
    <br/>
    <span>
      <i>{description}</i>
    </span>
  </div>
}

export default ExternalizedA