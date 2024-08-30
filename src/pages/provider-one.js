import LazyA from "@/components/InternalizedA/LazyInternalizedA";
import DynamicA from "@/components/InternalizedA/DynamicA";
import DynamicClientA from "@/components/InternalizedA/DynamicClientA";


export default function ProviderOne() {

  return <>
    <h1>Provider one route</h1>
    <LazyA/>
    <DynamicA description={'dynamic with ssr'}/>
    <DynamicClientA description={'dynamic with no ssr'}/>
  </>
}
