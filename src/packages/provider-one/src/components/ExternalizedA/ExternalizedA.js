import style from './externalized-a.module.scss';


const ExternalizedA = ({ description }) => {

  return <div className={style.info}>
    <div className={style.desc}>
      Provider 1 component
    </div>
    <div>
      {description}
    </div>
  </div>
}

export default ExternalizedA