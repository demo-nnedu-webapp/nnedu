import { Icon } from "@iconify/react";
import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import Head from "next/head";
import React, { useState } from "react";
import { WebNavigation } from "../../components/navigation/nav";
import { CustomCheckBox, CustomItem, CustomInput } from "../../styles/styled";
import { DefaultButton } from "../../components/customButton/defaultButton";
import Link from "next/link";
import { useRouter } from "next/router";

function SignIn() {
  const { form } = useForm();

  const router = useRouter();

  const onFinish = (values) => {
    router.push("/dashboard");
    console.log(values);
  };

  return (
    <>
      <div>
        <Head>
          <title>DNED / NNSS Payments | SignIn</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className="h-full min-h-screen flex items-center justify-center flex-col w-full">
        <WebNavigation viewHeaderonAuth={true} />
        <div className="h-full w-full flex items-center justify-center">
          <div className="w-full max-w-lg p-6 bg-primary h-[28rem] flex items-center justify-center flex-col">
            <div className="w-full max-w-sm">
              <Form
                form={form}
                layout="vertical"
                className="w-full"
                onFinish={onFinish}
              >
                <div className="w-full flex flex-col gap-y-8 gap-x-4">
                  <CustomItem
                    name="studentId"
                    rules={[
                      {
                        required: false,
                        message: "please enter studentId",
                      },
                    ]}
                  >
                    <CustomInput type="text" placeholder="student id" />
                  </CustomItem>

                  <CustomItem
                    name="password"
                    rules={[
                      {
                        required: false,
                        message: "please enter password",
                      },
                    ]}
                  >
                    <CustomInput type="password" placeholder="password" />
                  </CustomItem>

                  <CustomItem>
                    <CustomCheckBox className="font-montserrat tracking-[0.06em]">
                      Remember me
                    </CustomCheckBox>
                  </CustomItem>

                  <DefaultButton
                    type="submit"
                    className="w-full bg-secondary text-primary py-3 px-4 rounded-md font-montserrat font-semibold tracking-[0.06em]"
                  >
                    Login
                  </DefaultButton>
                </div>
              </Form>

              <div className="mt-6">
                <Link
                  href={{
                    pathname: "/forgotpassword",
                  }}
                  passHref
                  legacyBehavior
                >
                  <a className="text-white font-montserrat font-normal tracking-[0.06em] hover:text-secondary">
                    forgot password?
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
