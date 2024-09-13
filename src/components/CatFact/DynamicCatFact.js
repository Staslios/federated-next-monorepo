import dynamic from 'next/dynamic'

const DynamicCatFact = dynamic(() => import('provider-one/CatFact'), {
  loading: () => <p>Loading...</p>,
})

export default DynamicCatFact