import styled from "styled-components";
import { Layout, Form, Checkbox, Tabs, Input, Select } from "antd";

const { Content, Footer, Sider } = Layout;
const { Item } = Form;

export const StyledContent = styled(Content)`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  background-color: white;
  height: 100%;
  min-height: 100vh;
`;

export const StyledFooter = styled(Footer)`
  width: 100%;
  background-color: #1f1839;
  bottom: 0;
  position: static; //TODO::  change this value later
  padding: 0px 20px;

  @media (min-width: 1024px) {
   padding: 0px 50px;
`;

export const CustomSider = styled(Sider)``;

export const CustomItem = styled(Item)`
  margin: 0;

  & .ant-form-item-label {
    margin: 0;
    margin-bottom: 6px;
    font-family: inter;
    letter-spacing: 0.06em;
    font-weight: 500;
    padding: 0;
  }
`;

export const CustomCheckBox = styled(Checkbox)`
  color: white;

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #dec918;
    border-color: #000000;
    outline: none;

    &:hover {
      border-color: #000000;
      box-shadow: none;
    }

    &:focus {
      border-color: #000000;
      box-shadow: none;

      &:active {
        border-color: #000000;
        box-shadow: none;
      }
    }
  }
`;

export const CustomTabs = styled(Tabs)`
  font-family: inter;

  .ant-tabs-tab {
    font-size: 16px;
    letter-spacing: 0.06em;
    font-weight: 500;
    color: #1f1839;
  }
  .ant-tabs-tab .ant-tabs-tab-active {
    color: #dec918;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #dec918;
    font-weight: 600;
  }

  .ant-tabs-ink-bar {
    background: #dec918;
  }

  .ant-tabs-tab-btn:active,
  .ant-tabs-tab-btn:focus,
  .ant-tabs-tab-remove:active,
  .ant-tabs-tab-remove:focus {
    color: #1f1839;
  }
`;

export const CustomInput = styled(Input)`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  outline: none;
  font-weight: 500;
  color: #1f1839;
  box-shadow: none;
  background-color: white;
  width: 100%;
  font-family: Montserrat, sans-serif;
  letter-spacing: 0.06em;
  border: ${(props) =>
    props.auth ? "2px solid #1f1839" : "2px solid #1f1839"};

  &:hover {
    border: ${(props) =>
      props.auth ? "2px solid #1f1839" : "2px solid #dec918"};
    box-shadow: none;
  }

  &:focus {
    border: ${(props) =>
      props.auth ? "2px solid #1f1839" : "2px solid #dec918"};
    box-shadow: none;

    &:active {
      border: ${(props) =>
        props.auth ? "2px solid #1f1839" : "2px solid #dec918"};
      box-shadow: none;
    }

    &:disabled {
      background-color: #e8e8e8;
    }
  }
`;

export const CustomSelect = styled(Select)`
  color: #1f1839;
  font-family: montserrat;
  letter-spacing: 0.06em;
  font-size: 14px;
  border: 1px solid #1f1839;
  border-radius: 0.375rem;
`;

export const StyledAvatar = styled.div`
  max-width: 960px;

  .avatar-upload {
    position: relative;
    max-width: 205px;
    .avatar-edit {
      position: absolute;
      right: 12px;
      z-index: 1;
      top: 10px;
      input {
        display: none;
        + label {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          margin: 0;
          border-radius: 10%;
          background: #1f1839;
          color: white;
          border: 1px solid transparent;
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
          cursor: pointer;
          font-weight: normal;
          transition: all 0.2s ease-in-out;

          &:after {
            content: "";
            font-family: "montserrat";
            color: white;
            position: absolute;
            top: 10px;
            left: 0;
            right: 0;
            text-align: center;
            margin: auto;
          }
        }
      }
    }
    .avatar-preview {
      width: 192px;
      height: 192px;
      position: relative;
      border-radius: 100%;
      border: 6px solid #f8f8f8;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
      > div {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;
