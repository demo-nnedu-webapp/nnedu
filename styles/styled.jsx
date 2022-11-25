import styled from "styled-components";
import { Layout, Form, Checkbox, Tabs, Input, Select } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Form;

export const StyledHeader = styled(Header)`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: white;
  padding: 0px 20px;

  @media (min-width: 1024px) {
   padding: 0px 50px;
`;

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
  border: ${(props) => (props.auth ? "2px solid #1f1839" : "none")};

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
