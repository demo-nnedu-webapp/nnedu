import React from "react";
import { StyledFooter } from "../../styles/styled";
import { Logo } from "../logo/Logo";

export const WebFooter = () => {
  return (
    <>
      <StyledFooter>
        <div className="w-full flex items-center justify-between p-4">
          <Logo width={180} height={50} white />
          <div className="text-white">back to top</div>
        </div>
      </StyledFooter>
    </>
  );
};
