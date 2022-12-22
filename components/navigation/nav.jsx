import React, { useEffect, useRef, useState } from "react";
import { Logo } from "../logo/Logo";

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
      <nav
        className="shadow-md w-full bg-white py-3 px-5 md:px-[50px] 
      fixed top-0 left-0 z-50 flex items-center justify-center"
      >
        <div className="w-full max-w-[70rem]">
          <div className="w-fit flex items-center justify-between">
            <Logo width={180} height={50} />
          </div>
        </div>
      </nav>
    </>
  );
};
