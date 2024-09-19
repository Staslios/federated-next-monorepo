import Head from "next/head";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const TITLE = "Federated Next monorepo"

  return <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <main className={`${inter.className}`}>
        <div><i>No remotes imported here. Browse other routes</i></div>
      </main>
    </>
}

Home.getInitialProps = async ()=> {
  return {}
}

export default Home
