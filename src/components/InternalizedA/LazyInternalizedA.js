import React from 'react';
import lazyWrapperComponent from "@/components/HOC/lazyWrapperComponent";


const LazyInternalizedA = lazyWrapperComponent(React.lazy(() => import('provider-one/ExternalA')), "loading remote from Provider ONE");

export default LazyInternalizedA