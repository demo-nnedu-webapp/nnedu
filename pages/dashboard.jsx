import { Icon } from "@iconify/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import DashboardLayout from "../components/layout/dashboardLayout";
import { dashboardLinks, bottomdashboardLinks } from "../data/data";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Dashboard() {
  const getSession = useSelector((state) => state.auth.sessionData);

  console.log(`GetSession is : ${getSession}`);

  const router = useRouter();

  useEffect(() => {
    if (Object.keys(getSession).length === 0) {
      alert(
        "You are currently not logged in \n you would be redirected back to signin page"
      );
      router.replace("/signin");
    }
  }, []);

  return (
    <>
      <div>
        <Head>
          <title>NNSS Payments | Dashboard</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <DashboardLayout>
        <div className="mt-4">
          <h2 className="font-semibold text-2xl font-inter tracking-[0.06em] text-primary">
            Dashboard
          </h2>
          <div className="w-full mt-4">
            <div className="w-full flex flex-col md:flex-row gap-4">
              {/* component one */}
              <div className="bg-white lg:w-1/3 shadow-md flex items-start justify-center p-6">
                <div className="w-full flex gap-y-2 justify-center flex-col">
                  <h3 className="font-inter text-primary font-medium text-lg tracking-[0.065em]">
                    Update student profile
                  </h3>
                  <p className="font-montserrat font-medium text-primary tracking-[0.06em]">
                    Students are required to update their profile frequently
                    based on their major activities
                  </p>

                  <Link href="#" passHref legacyBehavior>
                    <a className="font-inter flex gap-x-1 items-center w-fit tracking-[0.06em] text-secondary font-medium hover:text-primary">
                      update profile
                      <Icon
                        icon="ant-design:arrow-right-outlined"
                        width="20"
                        height="20"
                      />
                    </a>
                  </Link>
                </div>
                <Icon
                  icon="bi:check-circle-fill"
                  width={24}
                  height={24}
                  color="#dec918"
                />
              </div>
              {/* component one */}

              {/* component two */}
              <div className="bg-primary lg:w-1/3 shadow-md flex items-start justify-center p-6">
                <div className="w-full flex gap-y-2 justify-center flex-col">
                  <h3 className="font-inter text-white font-medium text-lg tracking-[0.065em]">
                    Payments completion
                  </h3>
                  <p className="font-montserrat font-medium text-white tracking-[0.06em]">
                    Parents / Students are required to complete their payments
                    required of them
                  </p>

                  <Link href="/dashboard/payment" passHref legacyBehavior>
                    <a className="font-inter flex gap-x-1 items-center w-fit tracking-[0.06em] text-secondary font-medium hover:text-white">
                      complete payments
                      <Icon
                        icon="ant-design:arrow-right-outlined"
                        width="20"
                        height="20"
                      />
                    </a>
                  </Link>
                </div>
                <Icon
                  icon="bi:check-circle-fill"
                  width={24}
                  height={24}
                  color="#dec918"
                />
              </div>
              {/* component two */}
            </div>
          </div>
          <div className="w-full mt-12">
            <h2 className="font-semibold text-2xl font-inter tracking-[0.06em] capitalize text-[#1f1839]">
              General
            </h2>
            <div className="w-full mt-4">
              <div className="w-full grid grid-cols-1 lg:grid-cols-7 items-stretch gap-4">
                <div className="lg:col-span-4 bg-white p-4 border-t-8 border-primary shadow-md"></div>
                <div className="lg:col-span-3 flex flex-col gap-x-4 gap-y-6">
                  {dashboardLinks.map((i, index) => {
                    return (
                      <div key={index} className="flex w-full">
                        <Link href="#" passHref legacyBehavior>
                          <a
                            className="px-6 py-4 bg-white w-full flex gap-x-3 items-center font-inter
                           text-lg tracking-[0.065em] font-medium text-primary text- shadow-md hover:text-secondary active:text-secondary"
                          >
                            {i.icon}
                            {i.label}
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-full mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {bottomdashboardLinks.map((i, index) => {
                  return (
                    <div key={index} className="flex w-full">
                      <Link href="#" passHref legacyBehavior>
                        <a
                          className="px-6 py-4 bg-white w-full flex gap-x-3 items-center font-inter
                           text-lg tracking-[0.065em] font-medium text-primary text- shadow-md hover:text-secondary active:text-secondary"
                        >
                          {i.icon}
                          {i.label}
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
