import React from 'react';
import lazyWrapperComponent from "@/packages/shared/components/LazyWrapperComponent";


const LazyInternalizedA = lazyWrapperComponent(React.lazy(() =>
  import('provider-one/ExternalA')), "loading remote from Provider ONE");

export default LazyInternalizedA