import Desc from "provider-one/ExternalA";


const AllProviders = ({data}) => {

  return <>
    <h1>All providers route</h1>
    <Desc description={"ciao"}/>
  </>
}

AllProviders.getInitialProps = async ()=> {
  return {}
}

export default AllProviders