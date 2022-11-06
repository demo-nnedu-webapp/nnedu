import { Icon } from "@iconify/react";

export const DefaultButton = ({ children, className, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`${className} capitalize`}>
        {children}
      </button>
    </>
  );
};
