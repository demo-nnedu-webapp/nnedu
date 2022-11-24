import React, { useEffect, useRef, useState } from "react";
import { Logo } from "../logo/Logo";
import { StyledHeader } from "../../styles/styled";
import { Navitems } from "./navigationItems/navItems";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const WebNavigation = ({ viewHeaderonAuth }) => {
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
      <StyledHeader className="shadow-md fixed top-0 left-0 z-50 flex items-center justify-center">
        <div className="w-full max-w-[70rem]">
          <div>
            <Logo width={180} height={50} />
          </div>
        </div>
      </StyledHeader>
    </>
  );
};
