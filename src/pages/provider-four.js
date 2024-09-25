import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";


import Four from 'provider_four/Four';

const DynamicFourCSR = dynamic(() =>
  import('provider_four/Four'), { loading: () => <p>Loading...</p>, ssr: false })

const DynamicFourSSR = dynamic(() =>
  import('provider_four/Four'), { loading: () => <p>Loading...</p>, ssr: true })

const LazyFour = lazy(() =>
  import('provider_four/Four'));

const ProviderFour = ({}) => {

  return <>
    <h1>Provider four route</h1>

    <h4>CSR dynamic import</h4>
    <DynamicFourCSR/>

    <h4>CSR dynamic import</h4>
    <DynamicFourSSR/>

    <h4>Lazy import</h4>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyFour/>
    </Suspense>

    <h4>ES import</h4>
    <Four/>
  </>
}

ProviderFour.getInitialProps = async () => { return {} }

export default ProviderFour