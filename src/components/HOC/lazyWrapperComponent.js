import React, { Suspense } from 'react';


const lazyWrapperComponent = (LazyComponent, loadingDesc) => {

  return () => <Suspense fallback={loadingDesc ? loadingDesc : <span>Loading...</span>}>
    <LazyComponent description={'lazy loading'}/>
  </Suspense>
}

export default lazyWrapperComponent