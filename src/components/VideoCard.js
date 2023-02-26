import React from "react";
import Avatar from "@mui/material/Avatar";
function VideoCard({
  title,
  channel,
  views,
  timestamp,
  thumbnail,
  videoFile,
  channelImage,
}) {
  return (
    <div className="videoCard">
      <img src={thumbnail} alt="" className="videoCard__thumbnail" />
      <div className="videoCard_info">
        <Avatar src={channelImage} alt={channel} />

        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
