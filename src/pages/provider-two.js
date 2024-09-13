import LazyInternalizedB from "@/components/InternalizedB/LazyInternalizedB";
import RemoteBitcoin from 'provider-two/BitcoinPrice';


export default function ProviderTwo({data}) {

  return <>
    <h1>Provider two route</h1>
    <LazyInternalizedB/>
    <RemoteBitcoin data={data}/>
  </>
}

export async function getServerSideProps() {

  return await RemoteBitcoin.getServerSideProps();
}

