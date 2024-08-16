import { lazy, Suspense } from 'react';


const InternalizedBLazyComponent = lazy(() => import("provider-two/ExternalB"));

const InternalizedB = ({}) => {
  return <Suspense fallback={<div>Loading remote component</div>}>
    <InternalizedBLazyComponent description={'lazy loaded'}/>
  </Suspense>
}

export default InternalizedB