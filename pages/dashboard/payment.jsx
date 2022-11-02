import { Icon } from "@iconify/react";
import Head from "next/head";
import React, { useState } from "react";
import DashboardLayout from "../../components/layout/dashboardLayout";

function Payment() {

  return (
    <>
      <div>
        <Head>
          <title>NNSS Payments | Payment</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <DashboardLayout>
        <h2 className="font-bold text-2xl font-mono text-[#1f1839]">Payment</h2>
        <div className="bg-[#1f1839] w-full p-4">
          <div className="w-full flex justify-between"></div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default Payment;
