import { Layout } from "antd";
import React, { useState } from "react";
import { CustomSider, StyledContent } from "../../styles/styled";
import { DashboardNav } from "../navigation/dashboardNav";
import { useSelector } from "react-redux";

const DashboardLayout = ({ children }) => {
  const collapsed = useSelector((state) => state.dashboard.sidebar);
  console.log(collapsed);

  return (
    <>
      <Layout>
        <DashboardNav />
        <Layout>
          <CustomSider className={`sidebar ${!collapsed ? "" : "open"}`}>
            <div className="h-screen w-full flex flex-col items-center">
              <div className="mt-24 w-full text-white">
                
              </div>
            </div>
          </CustomSider>
          <StyledContent>{children}</StyledContent>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
