import { Layout } from "antd";
import React, { Suspense, useState } from "react";
import { CustomSider, StyledContent } from "../../styles/styled";
import { DashboardNav } from "../navigation/dashboardNav";
import { useSelector } from "react-redux";
import { DashboardNavItems } from "../navigation/navigationItems/navItems";
import LoadingScreen from "../loaderscreen/loadingscreen";

const DashboardLayout = ({ children }) => {
  const collapsed = useSelector((state) => state.dashboard.sidebar);

  return (
    <>
      <Layout>
        <DashboardNav />
        <Layout>
          <CustomSider
            className={`sidebar ${!collapsed ? "hidden lg:flex" : "open"}`}
          >
            <div className="h-screen w-full flex flex-col items-center">
              <div className="mt-24 w-full text-white px-12 py-4 gap-4 flex flex-col">
                <DashboardNavItems />
              </div>
            </div>
          </CustomSider>
          <StyledContent className="lg:ml-[250px] z-10 text-black bg-dashboardbg h-full mt-16 p-6">
            <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
          </StyledContent>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
