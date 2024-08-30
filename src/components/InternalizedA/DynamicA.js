import dynamic from 'next/dynamic'

const DynamicA = dynamic(() => import('provider-one/ExternalA'), {
  loading: () => <p>Loading...</p>,
})

export default DynamicA