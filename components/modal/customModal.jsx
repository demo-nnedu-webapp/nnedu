import { Modal } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledModal = styled(Modal)``;

const CustomModal = ({ title, cancel, children, footer }) => {
  const modalState = useSelector((state) => state.dashboard.modal);

  return (
    <>
      <StyledModal
        title={title}
        open={modalState}
        onCancel={cancel}
        footer={footer}
      >
        {children}
      </StyledModal>
    </>
  );
};

export { CustomModal };
