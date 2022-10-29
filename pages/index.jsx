import Head from "next/head";
import 'antd/dist/antd.css';
import WebLayout from "../components/layout/layout";

export default function Home() {
  return (
    <div className="h-full min-h-screen w-full">
      <Head>
        <title>DNED / NNSS Payments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebLayout>
        {/* <div>Slider Here</div>
        <div>Brief About</div>
        <div>Directors Office</div>
        <div>Few Informations</div>
        <div>Few Blogs</div> */}
      </WebLayout>
    </div>
  );
}