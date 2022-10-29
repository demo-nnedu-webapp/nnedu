import styled from "styled-components";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export const StyledHeader = styled(Header)`
  display: flex;
  width: 100%;
  max-width: 1440px;
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
  background-color: black;
  height: 100%;
`;

export const StyledFooter = styled(Footer)`
  width: 100%;
  max-width: 1440px;
  background-color: #1f1839;
  bottom: 0;
  position: absolute; //TODO::  change this value later
  padding: 0px 20px;

  @media (min-width: 1024px) {
   padding: 0px 50px;
`;
