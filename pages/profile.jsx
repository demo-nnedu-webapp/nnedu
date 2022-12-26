import { Form } from "antd";
import Head from "next/head";
import React from "react";
import { CustomAvatar } from "../components/customAvatar/customAvatar";
import DashboardLayout from "../components/layout/dashboardLayout";
import { CustomTable } from "../components/customTable/customTable";
import { DefaultButton } from "../components/customButton/defaultButton";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { columndata, promotionData } from "../data/data";
import { useSelector } from "react-redux";

function Profile() {
  const date = new Date().toJSON().slice(0, 10);

  const getSession = useSelector((state) => state.auth.sessionData);

  console.log(getSession);

  return (
    <>
      <div>
        <Head>
          <title>NNSS Payments | Profile</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <DashboardLayout>
        <div className="mt-4 w-full">
          <h2 className="font-semibold text-2xl font-inter tracking-[0.06em] text-primary">
            Profile
          </h2>
          <div className="bg-white w-full mt-4 p-4 border-t-4 border-primary shadow-md">
            <div className="p-4">
              <div className="w-full grid lg:grid-cols-6 gap-5">
                <div className="lg:col-span-2 flex justify-center">
                  <div className="flex flex-col items-center gap-4 w-fit">
                    <div className="bg-secondary w-fit py-1 px-1.5">
                      <p className="font-inter font-semibold tracking-[0.06em]">
                        ID/
                        <span className="font-montserrat font-normal">
                          NNSS1101
                        </span>
                      </p>
                    </div>
                    <div className="w-full flex justify-center">
                      <Form>
                        <CustomAvatar />
                      </Form>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 grid grid-cols-2 place-items-center place-content-center lg:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-y-5 justify-between">
                    <div className="flex flex-col">
                      <h4 className="capitalize font-inter tracking-[0.06em] font-medium text-base">
                        First name
                      </h4>
                      <p className="font-montserrat font-normal tracking-[0.06em] text-sm capitalize">
                        {getSession.user_metadata?.firstname}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="capitalize font-inter tracking-[0.06em] font-medium text-base">
                        Last name
                      </h4>
                      <p className="font-montserrat font-normal tracking-[0.06em] text-sm capitalize">
                        {getSession.user_metadata?.lastname}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="capitalize font-inter tracking-[0.06em] font-medium text-base">
                        Middle name
                      </h4>
                      <p className="font-montserrat font-normal tracking-[0.06em] text-sm">
                        {getSession.user_metadata?.middlename}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-5 justify-between">
                    <div className="flex flex-col">
                      <h4 className="capitalize font-inter tracking-[0.06em] font-medium text-base">
                        Date of Birth
                      </h4>
                      <p className="font-montserrat font-normal tracking-[0.06em] text-sm">
                        {getSession.user_metadata?.dob}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="capitalize font-inter tracking-[0.06em] font-medium text-base">
                        Gender
                      </h4>
                      <p className="font-montserrat font-normal tracking-[0.06em] text-sm">
                        Unknown
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="capitalize font-inter tracking-[0.06em] font-medium text-base">
                        Religion
                      </h4>
                      <p className="font-montserrat font-normal tracking-[0.06em] text-sm">
                        Unknown
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-5 justify-between">
                    <div className="flex flex-col">
                      <h4 className="capitalize font-inter tracking-[0.06em] font-medium text-base">
                        Nationality
                      </h4>
                      <p className="font-montserrat font-normal tracking-[0.06em] text-sm">
                        Nigerian
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="capitalize font-inter tracking-[0.06em] font-medium text-base">
                        State of Origin
                      </h4>
                      <p className="font-montserrat font-normal tracking-[0.06em] text-sm">
                        Unknown
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Academic Details */}
            {/* <div className="lg:col-span-2">
              <h2 className="font-semibold text-2xl font-inter tracking-[0.06em] text-primary">
                Academic details
              </h2>
              <div className="bg-white w-full shadow-md p-6 flex lg:justify-center mt-4 border-t-4 border-primary">
                <div className="grid grid-cols-2 justify-start items-center gap-y-5 gap-x-16 p-4">
                  <div className="w-fit flex flex-col">
                    <h4 className="font-inter font-medium text-base tracking-[0.06em]">
                      School
                    </h4>
                    <p className="tracking-[0.06em] text-sm font-montserrat font-normal">
                      NNSS OJO
                    </p>
                  </div>

                  <div className="w-fit flex flex-col">
                    <h4 className="font-inter font-medium text-base tracking-[0.06em]">
                      Class
                    </h4>
                    <p className="tracking-[0.06em] text-sm font-montserrat font-normal">
                      {getSession.user_metadata?.class}
                    </p>
                  </div>

                  <div className="w-fit flex flex-col">
                    <h4 className="font-inter font-medium text-base tracking-[0.06em]">
                      Admission date
                    </h4>
                    <p className="tracking-[0.06em] text-sm font-montserrat font-normal">
                      Unknown
                    </p>
                  </div>

                  <div className="w-fit flex flex-col">
                    <h4 className="font-inter font-medium text-base tracking-[0.06em]">
                      Arm
                    </h4>
                    <p className="tracking-[0.06em] text-sm font-montserrat font-normal">
                      Ekun
                    </p>
                  </div>

                  <div className="w-fit flex flex-col">
                    <h4 className="font-inter font-medium text-base tracking-[0.06em]">
                      Academic year
                    </h4>
                    <p className="tracking-[0.06em] text-sm font-montserrat font-normal">
                      Unknown
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Academic Details */}

            {/* <div className="lg:col-span-3">
              <h2 className="font-semibold text-2xl font-inter tracking-[0.06em] text-primary">
                Promotion history
              </h2>
              <div className="bg-white shadow-md w-full flex justify-center mt-4 border-t-4 border-primary">
                <div className="w-full flex flex-col gap-y-4 gap-x-4 items-center justify-center">
                  <CustomTable
                    datasource={promotionData}
                    columndata={columndata}
                    selectData
                  />
                  <DefaultButton
                    className="bg-primary mb-4 text-white font-montserrat font-medium
                   tracking-[0.06em] py-2.5 rounded-md px-4"
                  >
                    View full history
                  </DefaultButton>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="mt-12">
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-5 md:gap-4">
            <div className="lg:col-span-2">
              <h2 className="font-semibold text-2xl font-inter tracking-[0.06em] text-primary">
                Fees status
              </h2>
              <div className="bg-white w-full shadow-md p-6 flex items-center justify-center mt-4">
                <Link href="/dashboard/payment" passHref legacyBehavior>
                  <a className="flex items-center text-primary hover:text-secondary font-inter font-medium text-base tracking-[0.06em] gap-4">
                    <Icon
                      icon="ant-design:link-outlined"
                      width={48}
                      height={48}
                    />
                    View status on payment page
                  </a>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex w-full items-center justify-between">
                <h2 className="font-semibold text-2xl font-inter tracking-[0.06em] text-primary">
                  Assesments reports
                </h2>

                <Link href="#" passHref legacyBehavior>
                  <a
                    className="font-montserrat italic underline font-medium shadow-sm text-secondary
                   hover:text-primary active:text-secondary"
                  >
                    view all
                  </a>
                </Link>
              </div>

              <div className="bg-white w-full shadow-md p-6 flex items-center justify-center mt-4">
                <div className="flex w-full justify-between items-center">
                  <div>
                    <h4 className="font-inter font-medium text-base tracking-[0.06em] text-primary">
                      Class
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-primary text-base font-montserrat font-medium tracking-[0.06em]">
                      JSS 3 Ekun
                    </p>
                    <DefaultButton>
                      <Icon
                        icon="ic:baseline-download-for-offline"
                        width={30}
                        height={30}
                      />
                    </DefaultButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="mt-12">
          <h2 className="font-semibold text-2xl font-inter tracking-[0.06em] text-primary">
            Documents
          </h2>
          <div className="mt-4">
            <CustomTable columndata={[]} datasource={[]} selectData />
          </div>
        </div> */}
      </DashboardLayout>
    </>
  );
}

export default Profile;
