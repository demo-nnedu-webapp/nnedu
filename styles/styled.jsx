import styled from "styled-components";
import { Layout, Form, Checkbox } from "antd";

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
    padding: 0;
  }
`;

export const CustomCheckBox = styled(Checkbox)`
  color: white;
  
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #DEC918;
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
