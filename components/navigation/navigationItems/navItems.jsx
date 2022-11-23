import { Icon } from "@iconify/react";
import { Avatar } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar } from "../../../app/slices/dashboardSlice";

export const DashboardNavItems = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const DashboardItems = [
    {
      icon: (
        <Icon
          icon="bxs:dashboard"
          color={router.pathname === "/dashboard" ? "#dec918" : "white"}
          width="30"
          height="30"
        />
      ),
      link: "/dashboard",
      label: "dashboard",
    },
    {
      icon: (
        <Avatar
          className=""
          size={30}
          style={{
            backgroundColor:
              router.pathname === "/dashboard/profile" ? "#dec918" : "white",
            color:
              router.pathname === "/dashboard/profile" ? "white" : "#1F1839",
          }}
        >
          U
        </Avatar>
      ),
      link: "/profile",
      label: "Student Profile",
    },
    {
      icon: (
        <Icon
          icon="ph:exam-fill"
          color={router.pathname === "/dashboard/exam" ? "#dec918" : "white"}
          width="30"
          height="30"
        />
      ),
      link: "#",
      label: "Exam",
      disabled: "disabled",
    },
    {
      icon: (
        <Icon
          icon="ri:secure-payment-fill"
          color={router.pathname === "/dashboard/payment" ? "#dec918" : "white"}
          width="30"
          height="30"
        />
      ),
      link: "/payment",
      label: "payment",
    },
    {
      icon: (
        <Icon
          icon="clarity:notification-solid-badged"
          color={router.pathname === "/dashboard/exam" ? "#dec918" : "white"}
          width="30"
          height="30"
        />
      ),
      link: "#",
      label: "Activities",
      disabled: "disabled",
    },
  ];

  return (
    <>
      {DashboardItems.map((i, index) => {
        return (
          <Link href={i.link} key={index} passHref legacyBehavior>
            <a
              className={`${
                router.asPath === i.link ? "text-[#dec918]" : "text-white"
              } flex gap-x-2 capitalize font-inter tracking-[0.07em] first:mt-0 mt-4 text-white items-center hover:text-[#dec918]`}
              onClick={() => dispatch(hideSidebar())}
            >
              {i.icon}
              {i.label}
            </a>
          </Link>
        );
      })}
    </>
  );
};
