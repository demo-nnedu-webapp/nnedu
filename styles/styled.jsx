import styled from "styled-components";
import { Layout } from "antd";

const { Header, Content } = Layout;

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
`;
