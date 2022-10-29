import { Icon } from "@iconify/react";
import { Dropdown } from "antd";

const Notifications = () => {
  const menu = (
    <div className="flex gap-4 w-full items-baseline">
      <div>
        <Icon icon="carbon:dot-mark" color="#dec918" />
      </div>
      <div>
        <h3 className="text-white font-mono text-[14px] font-semibold">
          You have a new message
        </h3>
        <p className="text-white tracking-wider">You paid some amount</p>
      </div>
    </div>
  );

  return (
    <>
      <Dropdown
        overlay={menu}
        overlayStyle={{
          backgroundColor: "#1f1839",
          padding: "1rem 2rem",
          marginTop: "2rem",
          position: "fixed",
          borderRadius: "6px",
        }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Icon
            width={36}
            height={36}
            icon="bxs:notification"
            color="#1f1839"
          />
        </a>
      </Dropdown>
    </>
  );
};

export { Notifications };
