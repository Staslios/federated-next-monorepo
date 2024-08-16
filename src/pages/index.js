import Head from "next/head";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const TITLE = "Federated Next monorepo"

  return <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <main className={`${inter.className}`}>
        <span><i>No remotes imported here. Browse other routes</i></span>
      </main>
    </>
}
