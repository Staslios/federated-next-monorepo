import styles from './bitcoin-price.module.scss';


const BitcoinPrice = ({data}) => {

  if (!data)
    return <div>No Bitcoin data</div>

  return <div className={styles.container}>
      <h1>Bitcoin Price Index</h1>
      {data && (
        <div className={styles.prices}>
          <div className={styles.price}>
            <h2>USD</h2>
            <p>${data.bpi.USD.rate}</p>
          </div>
          <div className={styles.price}>
            <h2>GBP</h2>
            <p>£{data.bpi.GBP.rate}</p>
          </div>
          <div className={styles.price}>
            <h2>EUR</h2>
            <p>€{data.bpi.EUR.rate}</p>
          </div>
        </div>
      )}
      <p className="updated-time">Last Updated: {data.time.updated}</p>
    </div>
};

BitcoinPrice.getServerSideProps = async() => {
  const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await response.json()

  return { props: { data }};
}

export default BitcoinPrice;