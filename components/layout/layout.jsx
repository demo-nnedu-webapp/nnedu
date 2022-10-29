import React from "react";
import { Layout } from "antd";
import { WebNavigation } from "../navigation/nav";
import { StyledContent } from "../../styles/styled";
import { WebFooter } from "../footer/footer";

export default function WebLayout({ children }) {
  return (
    <>
      <Layout className="flex items-center justify-center">
        <WebNavigation />
        <StyledContent>{children}</StyledContent>
        <WebFooter />
      </Layout>
    </>
  );
}
