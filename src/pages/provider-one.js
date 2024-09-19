import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";


const DynamicExternalACSR = dynamic(() =>
  import('provider-one/ExternalA'), {loading: () => <p>Loading csr...</p>, ssr: false})

const DynamicExternalASSR = dynamic(() =>
  import('provider-one/ExternalA'))

const LazyExternalA = lazy(() =>
  import('provider-one/ExternalA'));

const DynamicCatFactCSR = dynamic(() =>
  import('provider-one/CatFact'), { loading: () => <p>Loading csr...</p>, ssr: false })

const DynamicCatFactSSR = dynamic(() =>
  import('provider-one/CatFact'))


const ProviderOne = () => {

  return <>
    <h1>Provider one route</h1>

    <h4>CSR dynamic import</h4>
    <DynamicExternalACSR description={"prop from host"}/>

    <h4>SSR dynamic import</h4>
    <DynamicExternalASSR description={"prop from host"}/>

    <h4>Lazy import</h4>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyExternalA description={"prop from host"}/>
    </Suspense>

    <h4>SSR dynamic import</h4>
    <DynamicCatFactSSR/>

    <h4>CSR dynamic import</h4>
    <DynamicCatFactCSR/>
  </>
}

ProviderOne.getInitialProps = async ()=> { return {} }

export default ProviderOne
