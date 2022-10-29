import Head from "next/head";
import WebLayout from "../components/layout/layout";

export default function Home() {
  return (
    <div className="h-full min-h-screen w-full">
      <Head>
        <title>DNED / NNSS Payments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebLayout></WebLayout>
    </div>
  );
}
