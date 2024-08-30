import dynamic from 'next/dynamic'

const DynamicClientA = dynamic(() => import('provider-one/ExternalA'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

export default DynamicClientA