import style from './externalized-b.module.css';


const ExternalizedB = ({description}) => {

  return <div className={style.b}>
    <b>
      Externalized B Component
    </b>
    <br/>
    <span>
      <i>{description}</i>
    </span>
  </div>
}

export default ExternalizedB