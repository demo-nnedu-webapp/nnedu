import { Icon } from "@iconify/react";

export const DefaultButton = ({ children, className, onClick, disabled, type }) => {
  return (
    <>
      <button onClick={onClick} disabled={disabled} type={type} className={`${className} capitalize`}>
        {children}
      </button>
    </>
  );
};
