import React from "react";
import Verified from "@mui/icons-material/Verified";
import { Avatar } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";

function ChannelRow({
  image,
  verified,
  subs,
  noOfVideos,
  description,
  channelName,
}) {
  return (
    <div className="channelRow">
      <Avatar src={image} className="channelRow__avatar" />
      <div className="channelRow__text">
        <h4>
          {channelName}
          {verified && (
            <CheckCircleOutlineOutlined className="verified__icon" />
          )}
        </h4>

        <p>
          {subs}K subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
