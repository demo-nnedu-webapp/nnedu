import Head from "next/head";
import 'antd/dist/antd.css';
import WebLayout from "../components/layout/layout";

export default function Home() {
  return (
    <div className="bg-green-400 h-full w-full">
      <Head>
        <title>DNED</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebLayout>
        <div>Slider Here</div>
        <div>Brief About</div>
        <div>Directors Office</div>
        <div>Few Informations</div>
        <div>Few Blogs</div>
        <div>Footer</div>
      </WebLayout>
    </div>
  );
}
