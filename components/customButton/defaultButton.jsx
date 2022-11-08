import { Icon } from "@iconify/react";

export const DefaultButton = ({ children, className, onClick, disabled }) => {
  return (
    <>
      <button onClick={onClick} disabled={disabled} className={`${className} capitalize`}>
        {children}
      </button>
    </>
  );
};
