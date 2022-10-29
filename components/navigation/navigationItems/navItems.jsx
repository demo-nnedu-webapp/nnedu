import Link from "next/link";
import React from "react";

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
