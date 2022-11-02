import { Icon } from "@iconify/react";
import { Avatar } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar } from "../../../app/slices/dashboardSlice";

export const Navitems = () => {
  const items = [
    {
      link: "#",
      label: "the directorate",
      subItems: [
        {
          link: "/thedirectorate",
          label: "the directorate",
        },
        {
          link: "/pastdirectors",
          label: "pastdirectors",
        },
      ],
    },
    {
      link: "#",
      label: "schools",
      subItems: [
        {
          link: "/primary",
          label: "primary",
        },
        {
          link: "/secondary",
          label: "secondary",
        },
        {
          link: "/millitary",
          label: "millitary",
        },
      ],
    },
    {
      link: "#",
      label: "admissions",
      subItems: [
        {
          link: "/check",
          label: "check schools admission",
        },
      ],
    },
    {
      link: "#",
      label: "blog",
    },
    {
      link: "#",
      label: "contact",
    },
  ];

  return (
    <>
      {items.map((i, index) => {
        return (
          <Link href={i.link} key={index} passHref legacyBehavior>
            <a className="text-white lg:text-[#1f1839] capitalize my-2 font-medium hover:text-[#dec918] active:text-[#dec918]">
              {i.label}
            </a>
          </Link>
        );
      })}
    </>
  );
};

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
        <Icon
          icon="ri:secure-payment-fill"
          color={router.pathname === "/dashboard/payment" ? "#dec918" : "white"}
          width="30"
          height="30"
        />
      ),
      link: "/dashboard/payment",
      label: "payment",
    },
    {
      icon: (
        <Avatar
          className=""
          size={30}
          style={{ backgroundColor: "white", color: "#1F1839" }}
        >
          U
        </Avatar>
      ),
      link: "/dashboard/profile",
      label: "Student Profile",
    },
  ];

  return (
    <>
      {DashboardItems.map((i, index) => {
        console.log(i.link);
        return (
          <Link href={i.link} key={index} passHref legacyBehavior>
            <a
              className={`${
                router.asPath === i.link ? "text-[#dec918]" : "text-white"
              } flex gap-3 capitalize first:mt-0 mt-4 text-white items-center font-medium hover:text-[#dec918]`}
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
