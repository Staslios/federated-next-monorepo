import LazyInternalizedB from "@/components/InternalizedB/LazyInternalizedB";
import InternalizedA from "@/components/InternalizedA/LazyInternalizedA";


export default function ProviderTwo() {

  return <>
    <h1>All providers route</h1>
    <InternalizedA/>
    <LazyInternalizedB/>
  </>
}
