import { lazy, Suspense } from 'react';


const InternalizedALazyComponent = lazy(() => import("provider-one/ExternalA"));

const InternalizedA = ({}) => {
  return <Suspense fallback={<div>Loading remote component</div>}>
    <InternalizedALazyComponent description={'lazy loaded'}/>
  </Suspense>
}

export default InternalizedA