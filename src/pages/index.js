import Head from "next/head";
import { Inter } from "next/font/google";
import InternalizedA from "@/components/InternalizedA/InternalizedA";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const TITLE = "Federated Next monorepo"

  return <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <h1>{TITLE}</h1>
        <InternalizedA/>
      </main>
    </>
}
