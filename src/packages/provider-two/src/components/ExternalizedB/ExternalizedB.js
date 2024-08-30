import style from './externalized-b.module.scss';


const ExternalizedB = ({ description }) => {

  return <div className={style.info}>
    <div className={style.desc}>
      Provider 2 component
    </div>
    <div>
      {description}
    </div>
  </div>
}

export default ExternalizedB