import { Icon } from "@iconify/react";
import { Avatar, message, Upload } from "antd";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { DefaultButton } from "../customButton/defaultButton";

const StyledAvatar = styled(Avatar)``;

const CustomAvatar = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div className="flex items-center justify-center flex-col w-full">
      {loading ? (
        <Icon icon="eos-icons:loading" width="24" height="24" />
      ) : (
        <Icon icon="ant-design:plus-circle-outlined" width="30" height="30" />
      )}
      <div
        style={{
          marginTop: 8,
        }}
        className="font-montserrat tracking-[0.06em] font-medium"
      >
        Upload photo
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: "100%",
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
        <div>
          {/* <DefaultButton
            // onClick={() => beforeUpload()}
            className="bg-primary font-montserrat tracking-[0.06em]  px-4 py-1.5 rounded-md text-white"
          >
            Upload photo
          </DefaultButton> */}
        </div>
      </div>
    </>
  );
};

export { CustomAvatar };
