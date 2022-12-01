import { Icon } from "@iconify/react";
import React from "react";
import styled from "styled-components";

const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  animation: fade 0.4s ease-in forwards;
  background: #1f1839;
  opacity: 5;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LoadingScreen = () => {
  return (
    <Screen>
      <div className="w-full h-full min-h-screen flex items-center justify-center">
        <Icon icon="eos-icons:loading" color="white" width="36" height="36" />
      </div>
    </Screen>
  );
};

export default LoadingScreen;
