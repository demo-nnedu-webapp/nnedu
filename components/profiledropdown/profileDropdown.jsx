import { Icon } from "@iconify/react";
import { supaClient } from "../../lib/supabase";
import { Avatar, Dropdown, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSession } from "../../app/slices/authSlice";

const DropdownProfile = () => {
  const getSession = useSelector((state) => state.auth.sessionData);
  const dispatch = useDispatch();
  const router = useRouter();

  const Signout = async () => {
    router.replace("/signin");
    // try {
    //   const { error } = await supaClient.auth.signOut();
    //   if (!error) {
    //     dispatch(removeSession(getSession));
    //     router.replace("/signin");
    //   }
    //   console.log(error.message);
    // } catch (error) {
    //   console.log(error);
    // }
  };

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
            <Link href="#" className="font-medium" onClick={() => Signout()}>
              Log Out
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
