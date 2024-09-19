import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";


const DynamicDescCSR = dynamic(() =>
  import('provider_three/test'), { loading: () => <p>Loading...</p>, ssr: false })

const LazyDesc = lazy(() =>
  import('provider_three/test'));

const ProviderThree = ({}) => {

  return <>
    <h1>Provider three route</h1>

    <h4>CSR dynamic import</h4>
    <DynamicDescCSR desc={"prop from host"} />

    <h4>Lazy import</h4>
    <Suspense fallback={<div>Loading...</div>} >
      <LazyDesc suppressHydrationWarning />
    </Suspense>
  </>
}

ProviderThree.getInitialProps = async ()=> { return {} }

export default ProviderThree