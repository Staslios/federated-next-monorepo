import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";
import RemoteBitcoin from 'provider-two/BitcoinPrice';


const DynamicExternalBCSR = dynamic(() =>
  import('provider-two/ExternalB'), { loading: () => <p>Loading...</p>, ssr: false })

const LazyExternalB = lazy(() =>
  import('provider-two/ExternalB'));


const ProviderTwo = ({data}) => {

  return <>
    <h1>Provider two route</h1>

    <h4>CSR dynamic import</h4>
    <DynamicExternalBCSR description={"prop from host"}/>

    <h4>Lazy import</h4>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyExternalB description={"prop from host"}/>
    </Suspense>

    <RemoteBitcoin data={data}/>
  </>
}

export async function getServerSideProps() {
  return await RemoteBitcoin.getServerSideProps();
}


export default ProviderTwo