import LazyInternalizedB from "@/components/InternalizedB/LazyInternalizedB";
import InternalizedA from "@/components/InternalizedA/LazyInternalizedA";
import DynamicCatFact from "@/components/CatFact/DynamicCatFact";
import RemoteBitcoin from 'provider-two/BitcoinPrice';


export default function ProviderTwo({data}) {

  return <>
    <h1>All providers route</h1>
    <h3>Provider ONE</h3>
    <InternalizedA/>
    <DynamicCatFact/>
    <h3>Provider TWO</h3>
    <LazyInternalizedB/>
    <RemoteBitcoin data={data} />
  </>
}

export async function getServerSideProps() {

  return await RemoteBitcoin.getServerSideProps();
}
