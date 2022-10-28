import React from "react";
import { Logo } from "../logo/Logo";
import { StyledHeader } from "../../styles/styled";

export const WebNavigation = () => {
  return (
    <>
      <StyledHeader>
        <div className="w-full flex items-center justify-between">
          <div>
            <Logo width={180} height={50} />
          </div>
        </div>
      </StyledHeader>
    </>
  );
};
