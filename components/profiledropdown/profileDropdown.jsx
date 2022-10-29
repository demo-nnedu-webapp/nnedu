import { Icon } from "@iconify/react";
import { Avatar, Dropdown, Menu } from "antd";
import Link from "next/link";
import React from "react";

const DropdownProfile = () => {
  const menu = (
    <Menu
      items={[
        {
          label: <Link href="#">Student Profile</Link>,
          icon: (
            <Avatar
              className="font-bold"
              size={20}
              style={{ backgroundColor: "#1F1839" }}
            >
              U
            </Avatar>
          ),
          key: "0",
        },
        {
          type: "divider",
        },
        {
          label: (
            <Link href="#" className="font-bold">
              LogOut
            </Link>
          ),
          icon: (
            <Icon
              icon="ri:logout-circle-r-fill"
              color="red"
              width={24}
              height={24}
            />
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Avatar
            className="font-bold"
            size={30}
            style={{ backgroundColor: "#1F1839" }}
          >
            U
          </Avatar>
        </a>
      </Dropdown>
    </>
  );
};

export { DropdownProfile };
