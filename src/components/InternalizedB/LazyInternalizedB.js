import React from 'react';
import lazyWrapperComponent from "@/components/HOC/lazyWrapperComponent";


const LazyInternalizedB = lazyWrapperComponent(React.lazy(() =>
  import('provider-two/ExternalB')), "loading remote from Provider TWO");

export default LazyInternalizedB