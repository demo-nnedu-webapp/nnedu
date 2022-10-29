import Head from "next/head";
import React from "react";
import DashboardLayout from "../../components/layout/dashboardLayout";

function Dashboard() {
  return (
    <>
      <div>
        <Head>
          <title>NNSS Payments | Dashboard</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <DashboardLayout></DashboardLayout>
    </>
  );
}

export default Dashboard;