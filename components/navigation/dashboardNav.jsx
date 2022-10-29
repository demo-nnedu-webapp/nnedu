import React from "react";
import { StyledHeader } from "../../styles/styled";
import { Logo } from "../logo/Logo";
import { Notifications } from "../notifications/notifications";
import { DropdownProfile } from "../profiledropdown/profileDropdown";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar, showSidebar } from "../../app/slices/dashboardSlice";
import { Icon } from "@iconify/react";

const DashboardNav = () => {

  const SideBar = useSelector((state) => state.dashboard.sidebar);
  const dispatch = useDispatch()

  const toggeSidebar = () => {
    if (SideBar === false) {
      dispatch(showSidebar(SideBar));
    } else {
      dispatch(hideSidebar(SideBar));
    }
  };

  return (
    <StyledHeader className="shadow-md z-50 fixed top-0 left-0">
      <div className="w-full flex items-center py-4 justify-between">
        <Logo width={180} height={50} />
        <div className="flex items-center gap-4">
          <DropdownProfile />
          <Notifications />
          <div className="block lg:hidden">
            <button
              onClick={() => toggeSidebar()}
              className="flex items-center"
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
      </div>
    </StyledHeader>
  );
};

export { DashboardNav };
