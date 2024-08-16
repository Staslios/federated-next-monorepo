import React from 'react';
import lazyWrapperComponent from "@/packages/shared/components/LazyWrapperComponent";


const LazyInternalizedB = lazyWrapperComponent(React.lazy(() =>
  import('provider-two/ExternalB')), "loading remote from Provider TWO");

export default LazyInternalizedB