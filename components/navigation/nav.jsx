import React, { useEffect, useRef, useState } from "react";
import { Logo } from "../logo/Logo";
import { StyledHeader } from "../../styles/styled";
import { Navitems } from "./navigationItems/navItems";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const WebNavigation = () => {
  const initialState = false;
  const [openMobileMenu, setOpenMobileMenu] = useState(initialState);

  const mobileMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setOpenMobileMenu(openMobileMenu);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const toggleMobileMenu = () => {
    setOpenMobileMenu(() => !openMobileMenu);
  };

  return (
    <>
      <StyledHeader className="shadow-md z-50">
        <div className="w-full flex items-center justify-between">
          <div>
            <Logo width={180} height={50} />
          </div>
          <div className="flex gap-4 items-center">
            <div className="hidden lg:flex items-center gap-4">
              <Navitems />
              <Link href="/dashboard">Dashboard</Link>
            </div>
            <button
              className="lg:hidden flex"
              onClick={() => toggleMobileMenu()}
            >
              <Icon
                icon="ci:menu-alt-02"
                color="#1f1839"
                width="32"
                height="32"
              />
            </button>
          </div>
        </div>
      </StyledHeader>
      <>
        {openMobileMenu && (
          <>
            <div
            //   ref={mobileMenuRef}
              className="w-full lg:hidden h-auto bg-[#1f1839] border-4 transition-[.5s] border-[#dec918] absolute top-[4.1rem] left-0"
            >
              <div className="flex flex-col gap-4 px-6 p-4">
                <Navitems />
              </div>
            </div>
          </>
        )}
      </>
    </>
  );
};
