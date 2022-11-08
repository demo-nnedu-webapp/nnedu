import { Modal } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledModal = styled(Modal)``;

const CustomModal = ({ title, cancel, children }) => {
  const modalState = useSelector((state) => state.dashboard.modal);
  console.log(modalState);

  return (
    <>
      <StyledModal title={title} open={modalState} onCancel={cancel}>
        {children}
      </StyledModal>
    </>
  );
};

export { CustomModal };
