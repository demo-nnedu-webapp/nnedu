import { Icon } from "@iconify/react";

export const DefaultButton = ({ children, className }) => {
  return (
    <>
      <button className={`${className} capitalize tracking-[0.09em]`}>
        {children}
      </button>
    </>
  );
};
