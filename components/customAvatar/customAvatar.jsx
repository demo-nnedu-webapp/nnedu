import { Icon } from "@iconify/react";
import React from "react";
import { useState } from "react";
import { StyledAvatar } from "../../styles/styled";

const CustomAvatar = () => {
  const [photoState, setPhotoState] = useState(
    "https://avatars.dicebear.com/api/avataaars/happy-student-school.svg"
  );

  console.log(photoState);

  return (
    <>
      <StyledAvatar>
        <div className="avatar-upload">
          <div className="avatar-edit">
            <input
              type="file"
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
              onChange={(e) =>
                setPhotoState(URL.createObjectURL(e.target.files[0]))
              }
              value=""
            />
            <label htmlFor="imageUpload">
              <Icon className="text-2xl" icon="ant-design:edit-filled" />
            </label>
          </div>
          <div className="avatar-preview">
            <div
              id="imagePreview"
              style={{
                backgroundImage: `url(${photoState})`,
              }}
            ></div>
          </div>
        </div>
      </StyledAvatar>
    </>
  );
};

export { CustomAvatar };
