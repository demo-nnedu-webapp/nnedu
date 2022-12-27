import { Icon } from "@iconify/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { supaClient } from "../../lib/supabase";
import { StyledAvatar } from "../../styles/styled";

const CustomAvatar = () => {
  const [photoState, setPhotoState] = useState(
    "https://avatars.dicebear.com/api/avataaars/happy-student-school.svg"
  );

  const handleUpload = async (e) => {
    setPhotoState(URL.createObjectURL(e.target.files[0]));

    // let file;

    // const { data, error } = await supaClient.storage
    //   .from("images")
    //   .upload("public/" + photoState.name, file);

    // if (data) {
    //   console.log(data);
    // } else if (error) {
    //   console.log(error);
    // }
  };

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
              onChange={(e) => handleUpload(e)}
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
